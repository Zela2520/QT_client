#ifndef FRIENDCARD_H
#define FRIENDCARD_H

#include <stylehelper.h>
#include <painter.h>

class FriendCard : public painter
{
    Q_OBJECT
public:
    friend class FriendsPage;
    explicit FriendCard(QWidget *parent = nullptr);
    ~FriendCard();
    QPushButton* get_user_avatar_button();
    QPushButton* get_delete_group_button();

private:
    QHBoxLayout friendCardLayout;
    QLabel friendAvatarLabel;
    QPixmap friendAvatarPicture;
    QVBoxLayout friendCardOptionsVLayout;
    QPushButton nameButton;
    QPushButton writeMessageButton;
    QPushButton addToGroupButton;
    QHBoxLayout friendCardOptionsHLayout;
    QPushButton deleteFriendButton;
};

#endif // FRIENDCARD_H
