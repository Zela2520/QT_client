#include "authorization.h"

authorization::authorization(QWidget* parent) : painter(parent)
{
    this->setObjectName("authorization_page");                  // устанавливаем имя страницы авторизации
    QGridLayout* authorization_layout = new QGridLayout(this);  // создаём layout внутри страницы авторизации
    authorization_layout->setSpacing(10);

    QVBoxLayout* title_authorization_layout = new QVBoxLayout; // создаём layout для titla
    m_page_title = new QLabel("Вход");          // label приветствия
    m_page_title->setObjectName("page_title");  // задаем имя элементу

    this->m_icon_label = new QLabel("", this);  // создаём лейбл для изображения
    m_icon_label->setObjectName("icon_label");  // устанвливаем имя
    m_icon_label->resize(347, 347);             // установим размер иконки приложения

    QPixmap m_icon(":/image/.png");     // загружаем изображение
    int width = m_icon_label->width();                  // получим ширину лейбла
    int height = m_icon_label->height();                // получим высоту лейбла
    m_icon_label->setPixmap(m_icon.scaled(width, height, Qt::KeepAspectRatio)); // установим изображение во весь лейбл с поддержкой аддаптивности

    QVBoxLayout* form_authorization_layout = new QVBoxLayout; // создаём layout для формы входа
    form_authorization_layout->setSpacing(8);

    this->m_login = new QLineEdit;
    m_login->setMaximumWidth(400);
    m_login->setObjectName("login");
    QPalette pal = m_login->palette();
    pal.setColor(QPalette::PlaceholderText, QColor(0, 0, 0, 100));
    m_login->setPalette(pal);   // стилизуем placeholder
    m_login->setPlaceholderText("Логин");
    //    m_login->setFont(QFont("Times" , -1 ,  QFont::Bold)); // стилизуем шрифт для логина

    this->m_password = new QLineEdit;
    m_password->setMaximumWidth(400);
    m_password->setObjectName("password");
    m_password->setPalette(pal);
    m_password->setPlaceholderText("Пароль");
    m_password->setEchoMode(QLineEdit::Password); // установим звездочки
//    m_password->setFont(QFont("Times" , -1 ,  QFont::Bold)); // стилизуем шрифт для пароля

    QVBoxLayout* changes_authorization_layout = new QVBoxLayout; // создаём layout для кнопок входа и регистраци
    changes_authorization_layout->setSpacing(0);

    this->m_enter_button = new QPushButton("Войти");
    m_enter_button->setObjectName("enter_btn");
    m_enter_button->setMaximumWidth(200); // установим максимальную ширину для виджета
    connect(m_enter_button, &QPushButton::pressed, this, &authorization::on_enter_button_pressed); // при нажатии на кнопку будем менять фон кнопки
    connect(m_enter_button, &QPushButton::released, this, &authorization::on_enter_button_released); // при отжатии кнопки возвращаем её в исходное состояние

    this->m_registration_button = new QPushButton("Создать аккаунт");
    m_registration_button->setObjectName("registration_btn");
    connect(m_registration_button, &QPushButton::pressed, this, &authorization::on_registration_button_pressed); // при нажатии на кнопку будем менять фон кнопки
    connect(m_registration_button, &QPushButton::released, this, &authorization::on_regstration_button_released); // при отжатии кнопки возвращаем её в исходное состояние

    this->set_interface_style();                                    // устанавливаем интерфейс страницы авторизации

    title_authorization_layout->addWidget(m_page_title);            // формируем title (добавляем надпись)
    title_authorization_layout->addWidget(m_icon_label);            // формируем title (добавляем иконку приложения)

    form_authorization_layout->addWidget(m_login);                  // формируем форму авторизации (добваляем поле логина)
    form_authorization_layout->addWidget(m_password);               // формируем форму авторизации (добавляем поле пароля)

    changes_authorization_layout->addWidget(m_enter_button);         // формируем кнопки changes (добавляем кнопку входа)
    changes_authorization_layout->addWidget(m_registration_button);  // формируем кнопки changes (добавляем кнопку создания аккаунта)

    authorization_layout->addLayout(title_authorization_layout, 0, 0, 1, 1, Qt::AlignCenter); // добавляем title в layout
    authorization_layout->addLayout(form_authorization_layout, 1, 0, 1, 1, Qt::AlignCenter);  // добавляем форму в layout
    authorization_layout->addLayout(changes_authorization_layout, 2, 0, 1, 1, Qt::AlignCenter | Qt::AlignTop);  // добавляем форму в layout
}

authorization::~authorization() {

}

QPushButton* authorization::get_enter_button()
{
    return m_enter_button;
}

QPushButton *authorization::get_registration_button()
{
    return m_registration_button;
}

void authorization::set_interface_style()
{
    m_page_title->setStyleSheet(stylehelper::page_title_style());
    m_icon_label->setStyleSheet(stylehelper::icon_title_style());
    this->setStyleSheet(stylehelper::authorization_background_style());
}

void authorization::on_enter_button_pressed()
{
    m_enter_button->setStyleSheet(stylehelper::on_enter_button_pushed_style());
}

void authorization::on_enter_button_released()
{
    m_enter_button->setStyleSheet(stylehelper::enter_btn_style());
}

void authorization::on_registration_button_pressed()
{
    m_registration_button->setStyleSheet(stylehelper::on_registration_button_pushed_style());
}

void authorization::on_regstration_button_released()
{
    m_registration_button->setStyleSheet(stylehelper::registration_btn_style());
}
