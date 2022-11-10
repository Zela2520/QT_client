#include "stylehelper.h"


QString stylehelper::authorization_background_style()
{
    return "#authorization_page {background-color: rgba(79, 39, 193, 1);"" }";
}

QString stylehelper::background_image_style()
{
    return "#authorization_page {background-image: url(:/img/my_static/img/bubble_background.png);""}";
}

QString stylehelper::page_title_style()
{
    return "#page_title {"
                            "padding-left: 90px;"
                            "font-size: 60px;"
                            "font-weight: 700;"
            "}";
}

QString stylehelper::icon_title_style()
{
    return "#icon_label {"
                            "width: 200px;"
                            "height: 200px;"
           "}";
}

QString stylehelper::login_style() // QLineEdit
{
    return "QLineEdit#login {"
                            "margin-top: 0px;"
                            "width: 200px;"
                            "height: 200px;"
           "}";
}

QString stylehelper::password_style() // QLineEdit
{
    return "QLineEdit#password {"
                            "width: 200px;"
                            "height: 200px;"
           "}";
}

QString stylehelper::enter_btn_style()
{
    return "#QPushButton#enter_btn {"
                            "width: 200px;"
                            "height: 200px;"
           "}";
}

QString stylehelper::registration_btn_style()
{
    return "#QPushButton#registration_btn {"
            "width: 200px;"
            "height: 50px;"
            "border-radius: 15px;"
            "font-size: 16px;"
            "background: none;"
        "}";
}

QString stylehelper::on_enter_button_pushed_style()
{
    return "QPushButton#enter_btn {"
                            "width: 205px;"
                            "height: 55px;"
           "}";
}

QString stylehelper::on_registration_button_pushed_style()
{
    return "QPushButton#registration_btn {"
                            "font-size: 18px;"
                            "background: none;"
           "}";
}

QString stylehelper::group_background_style()
{
    return "#groups_page {background-color: rgba(79, 39, 193, 1);"" }";
//    return "#groups_page {background-color: qlineargradient(spread:pad, x1:0.472174, y1:1, x2:0.472637, y2:0.119318, stop:0 rgba(255, 9, 230, 175), stop:0.487562 rgba(112, 1, 254, 255), stop:0.945274 rgba(177, 155, 205, 255));"" }";
}

QString stylehelper::navbar_background_style()
{
    return "#navbar_groups {background-color: rgba(152, 128, 203, 1);}";
}

QString stylehelper::search_field_background_style()
{
    return "#search_field {"
               "background-color: rgba(152, 128, 203, 1);"
               "border-radius: 10px;"
           "}";
}

QString stylehelper::group_title_background_style()
{
    return "#groups_title {"
                "background-color: rgba(152, 128, 203, 1);"
                "border-radius: 20px;"
           "}";
}

QString stylehelper::shedule_btn_style()
{
    return "QPushButton#shedule_btn {"
            "width: 200px;"
            "height: 50px;"
            "border-radius: 15px;"
            "font-size: 24px;"
//            "background-color: rgba(152, 128, 203, 1);"
           "}";
}

QString stylehelper::on_shedule_btn_pushed_style()
{
    return "QPushButton#shedule_btn {"
                            "width: 205px;"
                            "height: 55px;"
                            "font-size: 26px;"
                            "background: rgba(204, 137, 205, 1);"
           "}";
}

QString stylehelper::friends_btn_style()
{
    return "QPushButton#friends_btn {"
            "width: 200px;"
            "height: 50px;"
            "border-radius: 15px;"
            "font-size: 24px;"
//            "background-color: rgba(152, 128, 203, 1);"
           "}";
}

QString stylehelper::on_friends_btn_pushed_style() // вдруг захочу стилизовать каждую кнопку в navbar при нажатии по особенному
{
    return "QPushButton#friends_btn {"
                                "width: 205px;"
                                "height: 55px;"
                                "font-size: 26px;"
                                "background: rgba(204, 137, 205, 1);"
           "}";
}

QString stylehelper::groups_btn_style()
{
    return "QPushButton#groups_btn {"
            "width: 200px;"
            "height: 50px;"
            "border-radius: 15px;"
            "font-size: 24px;"
//            "background-color: rgba(152, 128, 203, 1);"
           "}";
}

QString stylehelper::on_groups_btn_pushed_style()
{
    return "QPushButton#groups_btn {"
                                "width: 205px;"
                                "height: 55px;"
                                "font-size: 26px;"
                                "background: rgba(204, 137, 205, 1);"
           "}";
}

QString stylehelper::settings_btn_style()
{
    return "QPushButton#settings_btn {"
            "width: 200px;"
            "height: 50px;"
            "border-radius: 15px;"
            "font-size: 24px;"
//            "background-color: rgba(152, 128, 203, 1);"
           "}";
}

QString stylehelper::on_settings_btn_pushed_style()
{
    return "QPushButton#settings_btn {"
                                "width: 205px;"
                                "height: 55px;"
                                "font-size: 26px;"
                                "background: rgba(204, 137, 205, 1);"
           "}";
}

QString stylehelper::logout_btn_style()
{
    return "QPushButton#logout_btn {"
            "width: 200px;"
            "height: 50px;"
            "border-radius: 15px;"
            "font-size: 24px;"
//            "background-color: rgba(152, 128, 203, 1);"
           "}";
}

QString stylehelper::on_logout_btn_pushed_style()
{
    return "QPushButton#logout_btn {"
                                "width: 205px;"
                                "height: 55px;"
                                "font-size: 26px;"
                                "background: rgba(204, 137, 205, 1);"
           "}";
}

QString stylehelper::user_avatar_btn_style()
{
    return "QPushButton#user_avatar_btn {"
            "width: 100px;"
            "height: 100px;"
            "border: none;"
            "background-color: none;"
           "}";
//    QPushButton#user_avatar_btn:hover{"
//                    "width: 120px;"
//                    "height: 105px;"
//                    "border-radius: 10px;"
//                    "background-color: #fff;"
//                    "}"
}

QString stylehelper::on_user_avatar_btn_pushed_style()
{
    return "QPushButton#user_avatar_btn {"
            "width: 110px;"
            "height: 110px;"
            "border-radius: 10px;"
            "background-color: black;"
           "}";
}

QString stylehelper::added_btn_style()
{
    return "QPushButton#added_group_btn {"
            "width: 200px;"
            "height: 50px;"
            "border-radius: 15px;"
            "font-size: 22px;"
            "background-color: rgba(152, 128, 203, 1);"
           "}";
}

QString stylehelper::on_added_btn_pushed_style()
{
    return "QPushButton#added_group_btn {"
            "width: 210px;"
            "height: 60px;"
            "border-radius: 15px;"
            "background-color: black;"
           "}";
}

QString stylehelper::added_btn_hover_style() {
    return "QPushButton#added_group_btn:hover {"
            "width: 200px;"
            "height: 50px;"
            "border-radius: 15px;"
            "font-size: 24px;"
            "background-color: rgba(70, 103, 168, 1);"
        "}";
}

QString stylehelper::user_avatar_title_btn_style()
{
//    return "QPushButton#user_title_avatar_btn {"
//           "width: 100px;"
//           "height: 100px;"
//           "border: none;"
//           "background-color: none;"
//    "}";
    return "QString#user_title_avatar_btn {"
           "width: 100px;"
           "height: 100px;"
           "border-radius: 10px;"
           "background-color: black;"
    "}";
}

QString stylehelper::user_avatar_title_hover_style()
{
    return "QPushButton#user_title_avatar_btn:hover {"
            "width: 110px;"
            "height: 110px;"
            "border-radius: 15px;"
        /*    background-color: rgba(90, 83, 219, 1);*/
            "background-color: white;"
        "}";
}

QString stylehelper::on_user_avatar_title_btn_pushed_style()
{
    return "QPushButton#user_title_avatar_btn {"
            "width: 100px;"
            "height: 100px;"
            "border-radius: 10px;"
            "background-color: black;"
        "}";
}

QString stylehelper::friends_background_style()
{
    return "#friends_page {background-color: rgba(79, 39, 193, 1);"" }";
}

QString stylehelper::get_settings_background()
{
//    return "#settings_page {background-color: rgba(79, 39, 193, 1);"" }";
    return "#settings_page {background-color: rgba(79, 39, 193, 1);"" }";
}

QString stylehelper::get_information_field_background()
{
    return "information_field#information_field_background {"
                "background-color: rgba(103, 56, 163, 1);"
                "border-radius: 20px;"
           "}";
}

QString stylehelper::get_save_button_pressed()
{
    return "QPushButton#save_button {"
            "width: 210px;"
            "height: 60px;"
            "font-size: 24px;"
            "border-radius: 15px;"
            "color: #000000;"
            "background-color: rgba(79, 39, 193, 1);"
      "}";
}

//QString stylehelper::get_save_button_released()
//{
//    return "QPushButton#save_button {"
//            "width: 200px;"
//            "height: 50px;"
//            "font-size: 20px;"
//            "border-radius: 15px;"
//            "color: #000000;"
//            "background-color: #fff;"
//      "}";
//}

//QString stylehelper::get_save_button_hover_released()
//{
//    return "QPushButton#save_button {"
//            "width: 210px;"
//            "height: 55px;"
//            "font-size: 22px;"
//            "border-radius: 15px;"
//            "color: #000000;"
//            "background-color: rgba(79, 39, 193, 1);"
//      "}";
//}
