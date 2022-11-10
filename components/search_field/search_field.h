#ifndef SEARCH_FIELD_H
#define SEARCH_FIELD_H

#include <stylehelper.h>
#include <painter.h>

class search_field : public painter
{
    Q_OBJECT
    friend class groups; // возможно понадобиться подружить ещё и с Base
public:
    explicit search_field(QString placeholder_text = nullptr, QString added_btn_text = nullptr, QWidget* parrent = nullptr);
    ~search_field();

    QPushButton* get_added_button();

private:
    QLineEdit* m_name;
    QPushButton* m_added_button;

    void set_interface_style();

private slots:
    // кнопка добавления
    void on_added_button_pressed();
    void on_added_button_released();

};

#endif // SEARCH_FIELD_H
