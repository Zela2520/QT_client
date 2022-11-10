#include "friendspage.h"

FriendsPage::FriendsPage(QWidget *parent)
    : painter{parent},
      // компоненты скролла
      friendsScroll(new QScrollArea()),
      friendsScrollWidget(new painter()),
      friendsScrollLayout()
{
    this->setObjectName("friends_page");                  // устанавливаем имя страницы авторизации
    QVBoxLayout* mainLayout = new QVBoxLayout(this);      // создаём layout внутри виджета
    mainLayout->setSpacing(20);                           // если необходимы отступы между виджетами

    // создаём компонеты для странички групп
    m_navbar = new navbar();
    m_search_field = new search_field("Имя друга", "Найти");
    friendsScrollWidget->setLayout(&friendsScrollLayout);
    friendsScrollWidget->setObjectName("friends_widget_scroll_title");
    friendsScroll->setWidget(friendsScrollWidget);
    friendsScroll->setWidgetResizable(true);

    // обработчик добавления друга
    connect(this->m_search_field->get_added_button(), &QPushButton::clicked, this, &FriendsPage::on_added_button_pressed);   // метод добавления titl-ов

    this->set_interface_style();

    // добавляем виджеты в mainlayout
    mainLayout->addWidget(m_navbar);
    mainLayout->addWidget(m_search_field);
    mainLayout->addWidget(friendsScroll);
}

void FriendsPage::set_interface_style()
{
    this->setStyleSheet(stylehelper::friends_background_style());
}

QPushButton *FriendsPage::get_shedule_btn()
{
    return m_navbar->get_shedule_button();
}

QPushButton *FriendsPage::get_friends_btn()
{
    return m_navbar->get_friends_button();
}

QPushButton *FriendsPage::get_groups_btn()
{
    return m_navbar->get_groups_button();
}

QPushButton *FriendsPage::get_settings_btn()
{
    return m_navbar->get_settings_button();
}

QPushButton *FriendsPage::get_logout_btn()
{
    return m_navbar->get_logout_button();
}

QPushButton *FriendsPage::get_user_avatar_btn()
{
    return m_navbar->get_user_avatar_button();
}

void FriendsPage::on_added_button_pressed()
{
    // добавить возможность при создании тайтла задавать имя группы
    int key = friendCards.size();
    FriendCard* temp = new FriendCard();
    friendCards.emplace(key, temp);
    friendsScrollLayout.addWidget(temp);
    // добавим возможность удаления titloв после из добавления
    connect(friendCards[key]->get_delete_group_button(), &QPushButton::clicked, this,
            [this, key](bool checked) {
                delete sender()->parent();
                friendCards.erase(key);
            }
        );
}

void FriendsPage::on_delete_button_pressed()
{
    delete sender()->parent();
}
