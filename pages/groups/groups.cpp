#include "groups.h"

groups::groups(QWidget* parent) : painter(parent)
{
    this->setObjectName("groups_page");                  // устанавливаем имя страницы авторизации
    QVBoxLayout* groups_layout = new QVBoxLayout(this);  // создаём layout внутри страницы авторизации (лучше создать вертикальный layout)
    groups_layout->setSpacing(20);
//    groups_layout->setContentsMargins(0, 30, 0, 400);

    // создаём компонеты для странички групп
    this->m_navbar = new navbar;
    this->m_search_field = new search_field("Имя группы", "Создать группу");
    m_scroll = new QScrollArea;
    m_scroll->setWidgetResizable(true);                                     // для стилизация и возможности изменения размеров через qss

    // формируем скролл
    m_groups_scroll_widget = new painter;                                   // создадим Widget. в котором будет распологаться скролл
    m_groups_scroll_layout = new QVBoxLayout;                               // создадим layout, в котором будет располагаться скролл
    m_groups_scroll_widget->setObjectName("groups_widget_scroll_title");
    m_groups_scroll_widget->setLayout(m_groups_scroll_layout);              // установим layout, в котором будет располагаться скролл
    m_scroll->setWidget(m_groups_scroll_widget);                            // поскольку класс виджет не имеет своего скролла, установим ему виджет

    connect(this->m_search_field->get_added_button(), &QPushButton::clicked, this, &groups::on_added_button_pressed);   // метод добавления titl-ов

    this->set_interface_style();                                            // стилизуем страницу групп

    // эти два элемента в один вертикальный layout
    groups_layout->addWidget(m_navbar);                     // добавляем navbar на страничку групп
    groups_layout->addWidget(m_search_field);               // добавляем search_field на страничку групп

    // скролл в другой вертикальный layout
    groups_layout->addWidget(m_scroll);                                                     // добавляем m_scroll
}

groups::~groups() {
    // удаляем все titl-ы
    for (size_t i = 0; i < m_title_list.size(); ++i) {
        delete sender()->parent();
        m_title_list.erase(i);
    }
}

QPushButton *groups::get_shedule_btn()
{
    return m_navbar->get_shedule_button();
}

QPushButton *groups::get_friends_btn()
{
    return m_navbar->get_friends_button();
}

QPushButton *groups::get_groups_btn()
{
    return m_navbar->get_groups_button();
}

QPushButton *groups::get_settings_btn()
{
    return m_navbar->get_settings_button();
}

QPushButton *groups::get_logout_btn()
{
    return m_navbar->get_logout_button();
}

QPushButton *groups::get_user_avatar_btn()
{
    return m_navbar->get_user_avatar_button();
}

void groups::set_interface_style()
{
    this->setStyleSheet(stylehelper::group_background_style());
}

void groups::on_delete_button_pressed()
{
    delete sender()->parent();
}

void groups::on_added_button_pressed()
{
    // добавить возможность при создании тайтла задавать имя группы
    size_t key = m_title_list.size();
    group_title* temp = new group_title();
    m_title_list.emplace(key, temp);
    m_groups_scroll_layout->addWidget(temp);

    // добавим возможность удаления titloв после из добавления
    connect(m_title_list[key]->get_delete_group_button(), &QPushButton::clicked, this,
            [this, key](bool checked) {
                delete sender()->parent();
                m_title_list.erase(key);
        }
    );
}
