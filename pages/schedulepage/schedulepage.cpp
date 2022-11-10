#include "schedulepage.h"

SchedulePage::SchedulePage(QWidget *parent)
    : painter{parent},
      mainLayout(this),
      m_navbar(new navbar()),
      friendsScroll(new QScrollArea()),
      friendsScrollWidget(new painter()),
      friendsScrollLayout(),
      taskCards(std::vector<TaskCard*>())
{


//    m_navbar.myScheduleButton.setObjectName("active");
    mainLayout.addWidget(m_navbar);
    mainLayout.addWidget(&Calendar);



        friendsScrollWidget->setLayout(&friendsScrollLayout);
        friendsScroll->setWidget(friendsScrollWidget);
        friendsScroll->setWidgetResizable(true);

    mainLayout.addWidget(friendsScroll);

    for (int i = 0; i < 3; ++i) {
        TaskCard* friend1 = new TaskCard();
        taskCards.push_back(friend1);
        friendsScrollLayout.addWidget(friend1);
    }


}

QPushButton *SchedulePage::get_shedule_btn()
{
    return m_navbar->get_shedule_button();
}

QPushButton *SchedulePage::get_friends_btn()
{
    return m_navbar->get_friends_button();
}

QPushButton *SchedulePage::get_groups_btn()
{
    return m_navbar->get_groups_button();
}

QPushButton *SchedulePage::get_settings_btn()
{
    return m_navbar->get_settings_button();
}

QPushButton *SchedulePage::get_logout_btn()
{
    return m_navbar->get_logout_button();
}

QPushButton *SchedulePage::get_user_avatar_btn()
{
    return m_navbar->get_user_avatar_button();
}

void SchedulePage::SearchButtonPressed()
{
    QLayoutItem* child;
    QMessageBox::information(this, "друг не найден", "друг не найден");
}

void SchedulePage::mySettingsButtonPressed()
{
    QMessageBox::information(this, "друг не найден", "проверка");
    int i = 0;
    while (this->friendsScrollLayout.count() != 0) {
        delete taskCards[i++];

    }
    taskCards.clear();

}

void SchedulePage::ProverkaAdd() {
    for (int i = 0; i < 3; ++i) {
        TaskCard* friend1 = new TaskCard();
        taskCards.push_back(friend1);
        friendsScrollLayout.addWidget(friend1);
    }
}

