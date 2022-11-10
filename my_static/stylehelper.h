#ifndef STYLEHELPER_H
#define STYLEHELPER_H

#include <QString>

namespace stylehelper // stylehelper нужен для стилизации элементов, которые должны изменяться при воздействие пользователя на элементы интерфейса
{
    // стили для странички авторизации
    QString authorization_background_style();
    QString background_image_style();
    QString page_title_style();
    QString icon_title_style();
    QString login_style();
    QString password_style();
    QString enter_btn_style();
    QString registration_btn_style();
    QString on_enter_button_pushed_style();
    QString on_registration_button_pushed_style();

    // стили для странички групп
    QString group_background_style();
    QString navbar_background_style();
    QString search_field_background_style();
    QString group_title_background_style();
    QString shedule_btn_style();
    QString on_shedule_btn_pushed_style();
    QString friends_btn_style();
    QString on_friends_btn_pushed_style();
    QString groups_btn_style();
    QString on_groups_btn_pushed_style();
    QString settings_btn_style();
    QString on_settings_btn_pushed_style();
    QString user_avatar_btn_style();
    QString on_user_avatar_btn_pushed_style();
    QString added_btn_style();
    QString added_btn_hover_style();
    QString on_added_btn_pushed_style();
    QString user_avatar_title_btn_style();
    QString user_avatar_title_hover_style();
    QString on_user_avatar_title_btn_pushed_style();

    // компоненты
    QString on_logout_btn_pushed_style();
    QString logout_btn_style();
    QString get_information_field_background();

    // стили для странички настроек
    QString get_save_button_pressed();
//    QString get_save_button_released();
//    QString get_save_button_hover_released();

    // стили для странички друзей
    QString friends_background_style();

    // стили для странички настроек
    QString get_settings_background();
};

#endif // STYLEHELPER_H
