#ifndef SCHEDULEPAGE_H
#define SCHEDULEPAGE_H


#include "painter.h"
#include "stylehelper.h"

#include "navbar.h"
#include "taskcard.h"

class SchedulePage : public painter
{
    Q_OBJECT
public:
    friend class Base;
    explicit SchedulePage(QWidget *parent = nullptr);

    QPushButton* get_shedule_btn();
    QPushButton* get_friends_btn();
    QPushButton *get_groups_btn();
    QPushButton* get_settings_btn();
    QPushButton* get_logout_btn();
    QPushButton* get_user_avatar_btn();

public slots:
    void SearchButtonPressed();
    void mySettingsButtonPressed();
    void ProverkaAdd();

private:
    QVBoxLayout mainLayout;
    QCalendarWidget Calendar;
    navbar* m_navbar;
    std::vector<TaskCard*> taskCards;

    QVBoxLayout friendsScrollLayout;
    painter* friendsScrollWidget;
    QScrollArea* friendsScroll;



signals:

};

#endif // SCHEDULEPAGE_H
