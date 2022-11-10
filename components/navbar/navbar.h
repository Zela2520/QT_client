#ifndef NAVBAR_H
#define NAVBAR_H

#include <painter.h>
#include <stylehelper.h>
#include <QHBoxLayout>

class navbar : public painter
{
    Q_OBJECT
    friend class groups; // возможно понадобиться подружить ещё и с Base
public:
    explicit navbar(QWidget* parrent = nullptr);
    ~navbar();

    QPushButton* get_shedule_button();
    QPushButton* get_friends_button();
    QPushButton* get_groups_button();
    QPushButton* get_settings_button();
    QPushButton* get_logout_button();
    QPushButton* get_user_avatar_button();

private:
    QPushButton* m_shedule_button;
    QPushButton* m_friends_button;
    QPushButton* m_groups_button;
    QPushButton* m_settings_button;
    QPushButton* m_logout_button;
    QPushButton* m_user_avatar;

    void set_interface_style();

private slots:
    // расписание
    void on_shedule_button_pressed();
    void on_shedule_button_released();
    // друзья
    void on_friends_button_pressed();
    void on_friends_button_released();
    // группы
    void on_groups_button_pressed();
    void on_groups_button_released();
    // настройки
    void on_settings_button_pressed();
    void on_settings_button_released();
    // выход
    void on_logout_button_pressed();
    void on_logout_button_released();
    // пользовательская аватарка
    void on_user_avatar_button_pressed();
    void on_user_avatar_button_released();
};

#endif // NAVBAR_H
