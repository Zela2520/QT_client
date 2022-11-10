#ifndef NAVBAR_2_H
#define NAVBAR_2_H

#include <stylehelper.h>
#include <painter.h>

class Navbar : public painter
{
    Q_OBJECT
public:
    friend class FriendsPage;
    friend class SchedulePage;
    friend class RegistrationPage;
    friend class Base;
    explicit Navbar(QWidget *parent = nullptr);

public slots:
    void onSettingsButtonClicked();

protected:
    QHBoxLayout navigationBarLayout;
        QPushButton myScheduleButton;
        QPushButton myFriendsButton;
        QPushButton myGropusButton;
        QPushButton mySettingsButton;
        QLabel myAvatarLabel;
            QPixmap myAvatarPicture;

signals:
    void settingsButtonClicked();

};

#endif // NAVBAR_2_H
