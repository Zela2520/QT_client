#ifndef GROUP_TITLE_H
#define GROUP_TITLE_H

#include <stylehelper.h>
#include <painter.h>

class group_title : public painter
{
    Q_OBJECT
    friend class groups; // возможно понадобиться подружить ещё и с Base
public:
    explicit group_title(QWidget* parrent = nullptr);
    ~group_title();

    QPushButton* get_user_avatar_button();
    QPushButton* get_delete_group_button();

    void delete_title();

private:
    QPushButton* m_user_avatar;
    QPushButton* m_group_name;
    QLabel* m_group_description;
    QPushButton* m_modify_group_btn;
    QPushButton* m_invite_group_btn;
    QPushButton* m_delete_group_btn;

    // можно каждому titl-у добавить id, который будет выступать в роли ключа в словаре

    void set_interface_style();

private slots:
    // аватарка
    void on_user_avatar_button_pressed();
    void on_user_avatar_button_released();
    // имя группы
    void on_group_title_name_btn_pressed();
    void on_group_title_name_btn_released();
    // изменение группы
    void on_modify_group_btn_pressed();
    void on_modify_group_btn_released();
    // приглашение в группу
    void on_invite_group_btn_pressed();
    void on_invite_group_btn_released();
    // удаление группы
    void on_delete_group_btn_pressed();
    void on_delete_group_btn_released();
};

#endif // GROUP_TITLE_H
