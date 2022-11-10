#ifndef AUTHORIZATION_H
#define AUTHORIZATION_H

#include <stylehelper.h>
#include <painter.h>

class authorization : public painter
{
    Q_OBJECT

public:
    explicit authorization(QWidget* parent = nullptr);
    ~authorization();
    QPushButton* get_enter_button();
    QPushButton* get_registration_button();

private:
    QLabel* m_page_title;
    QLabel* m_icon_label;

    QLineEdit* m_login;
    QLineEdit* m_password;
    QPushButton* m_enter_button;
    QPushButton* m_registration_button;

    void set_interface_style();

private slots:
    void on_enter_button_pressed();
    void on_enter_button_released();
    void on_registration_button_pressed();
    void on_regstration_button_released();
};

#endif // AUTHORIZATION_H
