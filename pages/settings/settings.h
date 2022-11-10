#ifndef SETTINGS_H
#define SETTINGS_H

#include <painter.h>
#include <stylehelper.h>

#include "navbar.h"
#include "information_field.h"
#include "search_field.h"

class settings : public painter
{
    Q_OBJECT

public:
    explicit settings(QWidget* parent = nullptr);
   ~settings();

    QPushButton* get_save_btn();
    QPushButton* get_save_addres_btn();

    // navbar
    QPushButton* get_shedule_btn();
    QPushButton* get_friends_btn();
    QPushButton* get_groups_btn();
    QPushButton* get_settings_btn();
    QPushButton* get_logout_btn();
    QPushButton* get_user_avatar_btn();

private:
    // слои
    QVBoxLayout* m_settings_page;
    QHBoxLayout* m_scrolls_layout;

    // компоненты 1-го скролла
    painter* m_first_settings_scroll_widget;
    QVBoxLayout* m_first_settings_scroll_layout;
    QScrollArea* m_first_scroll;
    // компоненты 2-го скролла
    painter* m_second_settings_scroll_widget;
    QVBoxLayout* m_second_settings_scroll_layout;
    QScrollArea* m_second_scroll;

    // информация о пользователе
    navbar* m_navbar;
    QLabel* m_user_settings;
    QLabel* m_user_address;

    // первый вертиакльный layout

    information_field *m_name_header;
    information_field *m_second_name_header;
    information_field *m_age_header;
    information_field *m_phone_number_header;
    information_field *m_status_header;
    information_field *m_mail_header;
    QPushButton* m_save;

    information_field *name_header;
    information_field *second_name_header;
    information_field *age_header;
    information_field *phone_number_header;
    information_field *status_header;
    information_field *mail_header;

    // второй вертиакльный layout
    information_field *m_country_header;
    information_field *m_district_header;
    information_field *m_city_header;
    information_field *m_street_header;
    information_field *m_housing_header;
    information_field *m_index_header;
    QPushButton* m_save_address;

    void set_interface_style();

private slots:
    // сохранить
    void on_save_button_pressed();
    void on_save_button_released();
    // сохранить адрес
    void on_save_address_button_pressed();
    void on_save_address_button_released();
};

#endif // SETTINGS_H
