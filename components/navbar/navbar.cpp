#include "navbar.h"

navbar::navbar(QWidget* parent) : painter(parent)
{
    this->setObjectName("navbar_groups");
    QHBoxLayout* navbar_layout = new QHBoxLayout(this);  // создаём layout, в котором будут сожержаться все элементы navbar
    navbar_layout->setSpacing(80); // задаём отступы между кнопками по горизонтали

    this->m_shedule_button = new QPushButton("Мое расписание");
    m_shedule_button->setObjectName("shedule_btn");
    m_shedule_button->setMaximumWidth(200);
    connect(m_shedule_button, &QPushButton::pressed, this, &navbar::on_shedule_button_pressed);
    connect(m_shedule_button, &QPushButton::released, this, &navbar::on_shedule_button_released);

    this->m_friends_button = new QPushButton("Мои друзья");
    m_friends_button->setObjectName("friends_btn");
    m_friends_button->setMaximumWidth(200);
    connect(m_friends_button, &QPushButton::pressed, this, &navbar::on_friends_button_pressed);
    connect(m_friends_button, &QPushButton::released, this, &navbar::on_friends_button_released);

    this->m_groups_button = new QPushButton("Мои группы");
    m_groups_button->setObjectName("groups_btn");
    m_groups_button->setMaximumWidth(200);
    connect(m_groups_button, &QPushButton::pressed, this, &navbar::on_groups_button_pressed);
    connect(m_groups_button, &QPushButton::released, this, &navbar::on_groups_button_released);

    this->m_settings_button = new QPushButton("Настройки");
    m_settings_button->setObjectName("settings_btn");
    m_settings_button->setMaximumWidth(200);
    connect(m_settings_button, &QPushButton::pressed, this, &navbar::on_settings_button_pressed);
    connect(m_settings_button, &QPushButton::released, this, &navbar::on_settings_button_released);

    this->m_logout_button = new QPushButton("Выйти");
    m_logout_button->setObjectName("logout_btn");
    m_logout_button->setMaximumWidth(200);
    connect(m_logout_button, &QPushButton::pressed, this, &navbar::on_logout_button_pressed);
    connect(m_logout_button, &QPushButton::released, this, &navbar::on_logout_button_released);

    this->m_user_avatar = new QPushButton("", this);            // создаём кнопку, в которой будет размещаться аватарка
    m_user_avatar->setObjectName("user_avatar_btn");
    m_user_avatar->resize(100, 100);
    QIcon avatar(":/img/my_static/img/avatar_luffy.png");       // загружаем изображение пользователя
    int width = m_user_avatar->width();                         // берём ширину кнопки
    int height = m_user_avatar->height();                       // берём высоту кнопки
    m_user_avatar->setIconSize(QSize(width, height));           // устанавливаем иконку во все пространство кнопки
    m_user_avatar->setIcon(avatar);
    connect(m_user_avatar, &QPushButton::pressed, this, &navbar::on_user_avatar_button_pressed);
    connect(m_user_avatar, &QPushButton::released, this, &navbar::on_user_avatar_button_released);


    this->set_interface_style();

    navbar_layout->addWidget(m_shedule_button, 1, Qt::AlignRight);
    navbar_layout->addWidget(m_friends_button, 2, Qt::AlignRight);
    navbar_layout->addWidget(m_groups_button, 3, Qt::AlignRight);
    navbar_layout->addWidget(m_settings_button, 4, Qt::AlignRight);
    navbar_layout->addWidget(m_logout_button, 5, Qt::AlignRight);
    navbar_layout->addWidget(m_user_avatar, 6, Qt::AlignRight);
}

navbar::~navbar()
{

}

QPushButton *navbar::get_shedule_button()
{
    return m_shedule_button;
}

QPushButton *navbar::get_friends_button()
{
    return m_friends_button;
}

QPushButton *navbar::get_groups_button()
{
    return m_groups_button;
}

QPushButton *navbar::get_settings_button()
{
    return m_settings_button;
}

QPushButton *navbar::get_logout_button()
{
    return m_logout_button;
}

QPushButton *navbar::get_user_avatar_button()
{
    return m_user_avatar;
}

void navbar::set_interface_style()
{
    this->setStyleSheet(stylehelper::navbar_background_style());
}

void navbar::on_shedule_button_pressed()
{
    m_shedule_button->setStyleSheet(stylehelper::on_shedule_btn_pushed_style());
}

void navbar::on_shedule_button_released()
{
    m_shedule_button->setStyleSheet(stylehelper::shedule_btn_style());
}

void navbar::on_friends_button_pressed()
{
    m_friends_button->setStyleSheet(stylehelper::on_friends_btn_pushed_style());
}

void navbar::on_friends_button_released()
{
    m_friends_button->setStyleSheet(stylehelper::friends_btn_style());
}

void navbar::on_groups_button_pressed()
{
    m_groups_button->setStyleSheet(stylehelper::on_groups_btn_pushed_style());
}

void navbar::on_groups_button_released()
{
    m_groups_button->setStyleSheet(stylehelper::groups_btn_style());
}

void navbar::on_settings_button_pressed()
{
    m_settings_button->setStyleSheet(stylehelper::on_settings_btn_pushed_style());
}

void navbar::on_settings_button_released()
{
    m_settings_button->setStyleSheet(stylehelper::settings_btn_style());
}

void navbar::on_logout_button_pressed()
{
    m_settings_button->setStyleSheet(stylehelper::on_logout_btn_pushed_style());
}

void navbar::on_logout_button_released()
{
    m_settings_button->setStyleSheet(stylehelper::logout_btn_style());
}

void navbar::on_user_avatar_button_pressed()
{
    m_user_avatar->setStyleSheet(stylehelper::on_user_avatar_btn_pushed_style());
}

void navbar::on_user_avatar_button_released()
{
    m_user_avatar->setStyleSheet(stylehelper::user_avatar_btn_style());
}
