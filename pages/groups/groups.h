#ifndef GROUPS_H
#define GROUPS_H

#include <painter.h>
#include <stylehelper.h>
#include <vector>

#include <navbar.h>
#include <search_field.h>
#include <group_title.h>
#include <map>

class groups : public painter
{
    Q_OBJECT

public:
    explicit groups(QWidget* parent = nullptr);
   ~groups();

    QPushButton* get_shedule_btn();
    QPushButton* get_friends_btn();
    QPushButton* get_groups_btn();
    QPushButton* get_settings_btn();
    QPushButton* get_logout_btn();
    QPushButton* get_user_avatar_btn();

private:
    navbar* m_navbar;
    search_field* m_search_field;
    std::map<int, group_title*> m_title_list;
    painter* m_groups_scroll_widget;
    QVBoxLayout* m_groups_scroll_layout;
    QScrollArea* m_scroll;

    void set_interface_style();

private slots:
    void on_delete_button_pressed();
    void on_added_button_pressed();
};

#endif // GROUPS_H
