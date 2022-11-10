#include "group_title.h"

group_title::group_title(QWidget* parent) : painter(parent)
{
    this->setObjectName("groups_title");
    this->resize(1400, 200);                                              // установим размер titla
    this->setMaximumSize(1400, 200);                                      // установим размер titla
    this->setMinimumSize(1400, 200);                                      // установим размер titla
    QGridLayout* group_title_layout = new QGridLayout(this);
    group_title_layout->setSpacing(30);                                 // отступы по горизонтали между виджетами

    // стилизуем пользовательскую аватарку
    this->m_user_avatar = new QPushButton("", this);                    // создаём кнопку для картинки
    m_user_avatar->setObjectName("user_title_avatar_btn");              // задаём id
    m_user_avatar->resize(90, 100);                                     //  устанавливаем высоту и ширину кнопки
    QIcon avatar(":/img/my_static/img/avatar_luffy.png");               // загружаем картинку
    int width = m_user_avatar->width();
    int height = m_user_avatar->height();
    m_user_avatar->setIconSize(QSize(width, height));                   // устанвливаем картнку по размеру кнопки
    m_user_avatar->setIcon(avatar);                                     // устанавливае картинку
    connect(m_user_avatar, &QPushButton::pressed, this, &group_title::on_user_avatar_button_pressed);
    connect(m_user_avatar, &QPushButton::released, this, &group_title::on_user_avatar_button_released);

    // стилизуем кнопку для имени группы
    this->m_group_name = new QPushButton("MeetUp Team");
    m_group_name->setObjectName("group_title_name");
//    m_group_name->setMaximumWidth(200);
    connect(m_group_name, &QPushButton::pressed, this, &group_title::on_group_title_name_btn_pressed);
    connect(m_group_name, &QPushButton::released, this, &group_title::on_group_title_name_btn_released);

    // стилизуем лейбл для описания группы
    this->m_group_description = new QLabel("группа команды MeetUp");
    m_group_description->setObjectName("groups_description");

    //  стилизуем кнопку изменения группы
    this->m_modify_group_btn = new QPushButton("изменить группу");
    m_modify_group_btn->setObjectName("modify_group_btn");
//    m_modify_group_btn->setMaximumWidth(200);
    connect(m_modify_group_btn, &QPushButton::pressed, this, &group_title::on_modify_group_btn_pressed);
    connect(m_modify_group_btn, &QPushButton::released, this, &group_title::on_modify_group_btn_released);

    //  стилизуем кнопку приглашения группы
    this->m_invite_group_btn = new QPushButton("пригласить в группу");
    m_invite_group_btn->setObjectName("invite_group_btn");
//    m_modify_group_btn->setMaximumWidth(200);
    connect(m_invite_group_btn, &QPushButton::pressed, this, &group_title::on_invite_group_btn_pressed);
    connect(m_invite_group_btn, &QPushButton::released, this, &group_title::on_invite_group_btn_released);

    //  стилизуем кнопку удаления группы
    this->m_delete_group_btn = new QPushButton("удалить группу");
    m_delete_group_btn->setObjectName("delete_group_btn");
//    m_modify_group_btn->setMaximumWidth(200);
    connect(m_delete_group_btn, &QPushButton::pressed, this, &group_title::on_delete_group_btn_pressed);
    connect(m_delete_group_btn, &QPushButton::released, this, &group_title::on_delete_group_btn_released);

    this->set_interface_style();                                         // устанавливаем стили

    // заполняем title_layout
    group_title_layout->addWidget(m_user_avatar, 1, 1, 2, 1, Qt::AlignCenter);

    group_title_layout->addWidget(m_group_name, 1, 2, 1, 1, Qt::AlignLeft | Qt::AlignCenter);
    group_title_layout->addWidget(m_group_description, 2, 2, 1, 1, Qt::AlignLeft | Qt::AlignCenter);

    group_title_layout->addWidget(m_modify_group_btn, 1, 3, 1, 1, Qt::AlignLeft | Qt::AlignCenter);
    group_title_layout->addWidget(m_invite_group_btn, 2, 3, 1, 1, Qt::AlignLeft | Qt::AlignCenter);

    group_title_layout->addWidget(m_delete_group_btn, 1, 4, 2, 1, Qt::AlignLeft | Qt::AlignCenter);
}

group_title::~group_title()
{

}

QPushButton *group_title::get_user_avatar_button()
{
    return m_user_avatar;
}

QPushButton *group_title::get_delete_group_button()
{
    return m_delete_group_btn;
}

void group_title::delete_title()
{
    delete this;
}

void group_title::set_interface_style()
{
    this->setStyleSheet(stylehelper::group_title_background_style());
}

void group_title::on_user_avatar_button_pressed()
{
    m_user_avatar->setStyleSheet(stylehelper::on_user_avatar_title_btn_pushed_style());
}

void group_title::on_user_avatar_button_released()
{
    m_user_avatar->setStyleSheet(stylehelper::user_avatar_title_btn_style());
    //    m_user_avatar->setStyleSheet(stylehelper::user_avatar_title_hover());
}

void group_title::on_group_title_name_btn_pressed()
{
//    m_user_avatar->setStyleSheet(stylehelper::on_user_avatar_title_btn_pushed());
}

void group_title::on_group_title_name_btn_released()
{
//    m_user_avatar->setStyleSheet(stylehelper::user_avatar_title_btn());
    //    m_user_avatar->setStyleSheet(stylehelper::user_avatar_title_hover());
}


void group_title::on_modify_group_btn_pressed()
{
//    m_user_avatar->setStyleSheet(stylehelper::on_user_avatar_title_btn_pushed());
}

void group_title::on_modify_group_btn_released()
{
//    m_user_avatar->setStyleSheet(stylehelper::user_avatar_title_btn());
    //    m_user_avatar->setStyleSheet(stylehelper::user_avatar_title_hover());
}

void group_title::on_invite_group_btn_pressed()
{

}

void group_title::on_invite_group_btn_released()
{

}

void group_title::on_delete_group_btn_pressed()
{
    //    delete this;
}

void group_title::on_delete_group_btn_released()
{

}
