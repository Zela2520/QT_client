#ifndef FRIENDSPAGE_H
#define FRIENDSPAGE_H

#include <painter.h>
#include <stylehelper.h>
#include <friendcard.h>
#include <navbar_2.h>
#include <navbar.h>
#include <search_field.h>

#include <map>
#include <vector>

class Base;

class FriendsPage : public painter
{
    Q_OBJECT
public:
    friend class Base;
    explicit FriendsPage(QWidget *parent = nullptr);

    QPushButton* get_shedule_btn();
    QPushButton* get_friends_btn();
    QPushButton* get_groups_btn();
    QPushButton* get_settings_btn();
    QPushButton* get_logout_btn();
    QPushButton* get_user_avatar_btn();

public slots:
    void on_added_button_pressed();
    void on_delete_button_pressed();

private:
    navbar* m_navbar;
    search_field* m_search_field;
    std::map<int, FriendCard*> friendCards;
    // компоненты для создания скролла
    QVBoxLayout friendsScrollLayout;
    painter* friendsScrollWidget;
    QScrollArea* friendsScroll;

    void set_interface_style();
};


#endif // FRIENDSPAGE_H
