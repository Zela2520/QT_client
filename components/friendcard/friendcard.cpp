#include "friendcard.h"

FriendCard::FriendCard(QWidget *parent):
    painter(parent),
    friendCardLayout(this),
    friendAvatarLabel(),
    friendAvatarPicture(":/img/my_static/img/avatar_luffy.png"),
    friendCardOptionsVLayout(),
    nameButton("Имя пользователя"),
    writeMessageButton("написать сообщение"),
    addToGroupButton("добавить в группу"),
    friendCardOptionsHLayout(),
    deleteFriendButton()
{
    friendAvatarLabel.setObjectName("avatarPicture");
    nameButton.setObjectName("name");
    deleteFriendButton.setObjectName("deleteButton");
    writeMessageButton.setObjectName("optionButton");
    addToGroupButton.setObjectName("optionButton");
    this->setObjectName("FriendCard");


    friendAvatarLabel.setMaximumWidth(100);

    // бордер-радиус
    QBitmap map(100, 100);
    map.fill(Qt::color0);
    QPainter painter(&map);
    painter.setBrush(Qt::color1);
    painter.drawRoundedRect( 0, 0, 100, 100, 50, 50);
    QPixmap scaled = friendAvatarPicture.scaled(100, 100, Qt::IgnoreAspectRatio, Qt::SmoothTransformation);
    scaled.setMask(map);
    friendAvatarLabel.setPixmap(scaled);


    friendCardLayout.addWidget(&friendAvatarLabel, Qt::AlignLeft);
    friendCardLayout.addLayout(&friendCardOptionsVLayout);
        friendCardOptionsVLayout.addWidget(&nameButton, Qt::AlignLeft | Qt::AlignTop);
        friendCardOptionsVLayout.addWidget(&writeMessageButton, Qt::AlignLeft | Qt::AlignTop);
        friendCardOptionsVLayout.addWidget(&addToGroupButton, Qt::AlignLeft | Qt::AlignTop);
        friendCardOptionsVLayout.setAlignment(Qt::AlignLeft);

    friendCardLayout.setAlignment(Qt::AlignCenter);
    friendCardLayout.setSizeConstraint(QLayout::SetDefaultConstraint);




    friendCardLayout.addLayout(&friendCardOptionsHLayout);
        friendCardOptionsHLayout.setAlignment(Qt::AlignRight);
        friendCardOptionsHLayout.addWidget(&deleteFriendButton, Qt::AlignCenter);
        deleteFriendButton.setMaximumWidth(50);

}

FriendCard::~FriendCard()
{

}

QPushButton *FriendCard::get_user_avatar_button()
{
    return &nameButton;
}

QPushButton *FriendCard::get_delete_group_button()
{
    return &deleteFriendButton;
}
