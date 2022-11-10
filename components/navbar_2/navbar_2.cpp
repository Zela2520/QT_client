#include "navbar_2.h"

Navbar::Navbar(QWidget *parent)
    : painter{parent},
    navigationBarLayout(this),
    myScheduleButton("Мое расписание"),
    myFriendsButton("Мои друзья"),
    myGropusButton("Мои группы"),
    mySettingsButton("Настройки"),
    myAvatarLabel(),
    myAvatarPicture(":img/duck.jpeg")
{
    myScheduleButton.setObjectName("myScheduleButton");
    myFriendsButton.setObjectName("myScheduleButton");
    myGropusButton.setObjectName("myGropusButton");
    mySettingsButton.setObjectName("mySettingsButton");

    QBitmap map(50, 50);
    map.fill(Qt::color0);
    QPainter painter(&map);
    painter.setBrush(Qt::color1);
    painter.drawRoundedRect( 0, 0, 50, 50, 25, 25);
    QPixmap scaled = myAvatarPicture.scaled(50, 50, Qt::IgnoreAspectRatio, Qt::SmoothTransformation);
    scaled.setMask(map);
    myAvatarLabel.setPixmap(scaled);


    navigationBarLayout.addWidget(&myScheduleButton);
    navigationBarLayout.addWidget(&myFriendsButton);
    navigationBarLayout.addWidget(&myGropusButton);
    navigationBarLayout.addWidget(&mySettingsButton);
    navigationBarLayout.addWidget(&myAvatarLabel);
    myAvatarLabel.setMaximumWidth(50);

}

void Navbar::onSettingsButtonClicked() {

    QMessageBox::information(this, "друг не найден", "я из навбара");
}
