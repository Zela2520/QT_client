#include "base.h"

#include <QLabel>

Base::Base(QWidget *parent)
    : QMainWindow(parent),
      loginNetworkManager(new QNetworkAccessManager)
{
    this->resize(1440, 1024);                                           // устанавливаем размер ПК
    QGridLayout* main_layout = new QGridLayout(this->centralWidget());  // создали main_layout в центральном виджете приложения
    m_screens = new QStackedWidget();                                   // создали стек экранов
    m_screens->setObjectName("screen_list");                            // задали имя списку экранов
    this->setCentralWidget(m_screens);                                  // сделали списиок экрнов центральным виджетом

    authorization_page = new authorization();
    groups_page = new groups();
    registration_page = new RegistrationPage();
    friends_page = new FriendsPage();
    shedule_page = new SchedulePage();
    settings_page = new settings();

    // Вход
    connect(authorization_page->get_enter_button(), &QPushButton::clicked, this, &Base::on_shedule_page_clicked);
    connect(authorization_page->get_registration_button(), &QPushButton::clicked, this, &Base::on_registration_page_clicked);
    // Группы
    connect(groups_page->get_shedule_btn(), &QPushButton::clicked, this, &Base::on_shedule_page_clicked);
    connect(groups_page->get_friends_btn(), &QPushButton::clicked, this, &Base::on_friends_page_clicked);
    connect(groups_page->get_groups_btn(), &QPushButton::clicked, this, &Base::on_groups_page_clicked);
    connect(groups_page->get_settings_btn(), &QPushButton::clicked, this, &Base::on_settings_page_clicked);
    connect(groups_page->get_logout_btn(), &QPushButton::clicked, this, &Base::on_auth_page_clicked);
    connect(groups_page->get_user_avatar_btn(), &QPushButton::clicked, this, &Base::on_settings_page_clicked);
    // Друзья
    connect(friends_page->get_shedule_btn(), &QPushButton::clicked, this, &Base::on_shedule_page_clicked);
    connect(friends_page->get_friends_btn(), &QPushButton::clicked, this, &Base::on_friends_page_clicked);
    connect(friends_page->get_groups_btn(), &QPushButton::clicked, this, &Base::on_groups_page_clicked);
    connect(friends_page->get_settings_btn(), &QPushButton::clicked, this, &Base::on_settings_page_clicked);
    connect(friends_page->get_logout_btn(), &QPushButton::clicked, this, &Base::on_auth_page_clicked);
    connect(friends_page->get_user_avatar_btn(), &QPushButton::clicked, this, &Base::on_settings_page_clicked);
    // расписание
    connect(shedule_page->get_shedule_btn(), &QPushButton::clicked, this, &Base::on_shedule_page_clicked);
    connect(shedule_page->get_friends_btn(), &QPushButton::clicked, this, &Base::on_friends_page_clicked);
    connect(shedule_page->get_groups_btn(), &QPushButton::clicked, this, &Base::on_groups_page_clicked);
    connect(shedule_page->get_settings_btn(), &QPushButton::clicked, this, &Base::on_settings_page_clicked);
    connect(shedule_page->get_logout_btn(), &QPushButton::clicked, this, &Base::on_auth_page_clicked);
    connect(shedule_page->get_user_avatar_btn(), &QPushButton::clicked, this, &Base::on_settings_page_clicked);
    // настройки
    connect(settings_page->get_shedule_btn(), &QPushButton::clicked, this, &Base::on_shedule_page_clicked);
    connect(settings_page->get_friends_btn(), &QPushButton::clicked, this, &Base::on_friends_page_clicked);
    connect(settings_page->get_groups_btn(), &QPushButton::clicked, this, &Base::on_groups_page_clicked);
    connect(settings_page->get_settings_btn(), &QPushButton::clicked, this, &Base::on_settings_page_clicked);
    connect(settings_page->get_logout_btn(), &QPushButton::clicked, this, &Base::on_auth_page_clicked);
    connect(settings_page->get_user_avatar_btn(), &QPushButton::clicked, this, &Base::on_settings_page_clicked);

    try {
    connect(loginNetworkManager, &QNetworkAccessManager::finished, this, &Base::loginHttpResult);
    connect(this->registration_page->getEnterButton(), &QPushButton::clicked, this, &Base::onLoginEnterButtonClicked);
    } catch (const std::string& e) {
        // Code that handles another exception type
        // ...
        std::cout << e;
    }

    m_screens->insertWidget(e_authorization, authorization_page);
    m_screens->insertWidget(e_groups, groups_page);
    m_screens->insertWidget(e_registration, registration_page);
    m_screens->insertWidget(e_friends, friends_page);
    m_screens->insertWidget(e_shedule, shedule_page);
    m_screens->insertWidget(e_settings, settings_page);
}

void Base::on_auth_page_clicked() {
    m_screens->setCurrentIndex(e_authorization);
}

void Base::on_groups_page_clicked() {
    m_screens->setCurrentIndex(e_groups);
}

void Base::on_settings_page_clicked() {
    m_screens->setCurrentIndex(e_settings);
}

void Base::loginHttpResult(QNetworkReply *loginReply)
{
    qDebug () << loginReply -> error ();
    this->registration_page->getEnterButton()->setDisabled(false);
    std::cout << "dbg" << std::endl;
        if(!loginReply->error()) {

            QStringList propertyNames;
            QStringList propertyKeys;
            QString strReply = (QString)loginReply->readAll();
            QJsonDocument jsonResponse = QJsonDocument::fromJson(strReply.toUtf8());
            QJsonObject jsonObject = jsonResponse.object();
            QString idString = jsonObject["id"].toString();
            std::cout << idString.toStdString() << std::endl;

            if(true) {
                std::cout << "dbg" << std::endl;
                this->registration_page->getEnterButton()->setDisabled(false);
                m_screens->setCurrentIndex(e_authorization);

            } else {

                this->registration_page->getEnterButton()->setDisabled(false);
                QMessageBox::warning(this, tr("Error"), tr("Wrong login or password"));

            }

        } else {

            qDebug() << loginReply->errorString();

            qDebug() << "Server answer: " +  loginReply->readAll() << Qt::endl;

            qDebug () << loginReply -> error ();

            QMessageBox::warning(this, tr("Error"),
                                 tr("Connection ERROR.\n"));
            this->registration_page->getEnterButton()->setDisabled(false);

        }
        this->registration_page->getEnterButton()->setDisabled(false);
        loginReply->deleteLater();
        loginNetworkManager->clearAccessCache();
}

void Base::onLoginEnterButtonClicked()
{

    this->registration_page->getEnterButton()->setDisabled(true);
    QJsonObject RegJson;
    QJsonObject param;
    param.insert("nickname", registration_page->getLoginInput()->getLoginInput()->text());
    param.insert("password", registration_page->getPasswordInput()->getLoginInput()->text());
    if (registration_page->getPasswordInput()->getLoginInput()->text() != registration_page->getPasswordInputRepeat()->getLoginInput()->text()) {
        this->registration_page->getEnterButton()->setDisabled(false);
        return ;
    }


    QString header = "POST / HTTP/1.1\r\nHost: localhost\r\nUser-Agent: my-custom-agent\r\n\r\n";
    RegJson.insert("registration", param);

    QJsonDocument doc(RegJson);

    QString strJson(doc.toJson(QJsonDocument::Compact));
    header += strJson;
    std::cout << header.toStdString() << std::endl;

    QString server_url = "http://127.0.0.1:8000/";
    QNetworkRequest request(QUrl(server_url + ""));
    request.setHeader(QNetworkRequest::ContentTypeHeader,
                      QStringLiteral("application/json;charset=utf-8"));

    request.setRawHeader("HEADER", QByteArray::fromStdString(header.toStdString()));


    std::cout << "dbg" << std::endl;

    loginNetworkManager->post(
                request,
                QByteArray::fromStdString(header.toStdString())
                );

}

void Base::on_registration_page_clicked()
{
    m_screens->setCurrentIndex(e_registration);
}

void Base::on_friends_page_clicked()
{
    m_screens->setCurrentIndex(e_friends);
}

void Base::on_shedule_page_clicked()
{
    m_screens->setCurrentIndex(e_shedule);
}

Base::~Base()
{
    delete authorization_page;
    delete groups_page;
    delete settings_page;
    delete friends_page;
    delete shedule_page;
    delete registration_page;
}
