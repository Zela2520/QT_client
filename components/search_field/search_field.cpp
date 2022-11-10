#include "search_field.h"

search_field::search_field(QString placeholder_text, QString added_btn_text, QWidget* parent) : painter(parent)
{
    this->setObjectName("search_field");
    QHBoxLayout* search_field_layout = new QHBoxLayout(this);
    search_field_layout->setSpacing(50);

    // создаём поисковую строку
    this->m_name = new QLineEdit;
    m_name->setObjectName("line_search_field");
    m_name->setMinimumWidth(600);
    m_name->setObjectName("login");
    QPalette pal = m_name->palette();
    pal.setColor(QPalette::PlaceholderText, QColor(0, 0, 0, 100));
    m_name->setPalette(pal);
    m_name->setPlaceholderText(placeholder_text);

    // создаём кнопку добавления группы
    this->m_added_button = new QPushButton(added_btn_text);
    m_added_button->setObjectName("added_group_btn");
    m_added_button->setMinimumWidth(150);
    connect(m_added_button, &QPushButton::pressed, this, &search_field::on_added_button_pressed);
    connect(m_added_button, &QPushButton::released, this, &search_field::on_added_button_released);

    this->set_interface_style();

    search_field_layout->addWidget(m_name, 1);
    search_field_layout->addWidget(m_added_button, 2);
}

search_field::~search_field()
{

}

QPushButton *search_field::get_added_button()
{
    return m_added_button;
}

void search_field::set_interface_style()
{
    this->setStyleSheet(stylehelper::search_field_background_style());
}

void search_field::on_added_button_pressed()
{
    m_added_button->setStyleSheet(stylehelper::on_added_btn_pushed_style());
}

void search_field::on_added_button_released()
{
    m_added_button->setStyleSheet(stylehelper::added_btn_style());
    m_added_button->setStyleSheet(stylehelper::added_btn_hover_style());
}
