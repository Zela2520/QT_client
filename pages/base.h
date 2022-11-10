#ifndef BASE_H
#define BASE_H

#include <QMainWindow>
#include <QStackedWidget>
#include <QNetworkAccessManager>
#include <QNetworkReply>
#include <iostream>

#include "authorization.h"
#include "groups.h"
#include "registration.h"
#include "friendspage.h"
#include "schedulepage.h"
#include "settings.h"

enum pages_numbers {
    e_authorization = 0,
    e_groups = 1,
    e_registration = 2,
    e_friends = 3,
    e_shedule = 4,
    e_settings = 5

};

class Base : public QMainWindow
{
    Q_OBJECT

public:
    explicit Base(QWidget *parent = nullptr);
    ~Base();

private:
    QStackedWidget* m_screens;

    authorization* authorization_page;
    RegistrationPage* registration_page;
    FriendsPage* friends_page;
    groups* groups_page;
    SchedulePage* shedule_page;
    settings* settings_page;

    // сеть
    QNetworkAccessManager* loginNetworkManager;

private slots:
    void on_auth_page_clicked();
    void on_groups_page_clicked();
    void on_registration_page_clicked();
    void on_friends_page_clicked();
    void on_shedule_page_clicked();
    void on_settings_page_clicked();

    // регистрация
    void loginHttpResult(QNetworkReply* loginReply);
    void onLoginEnterButtonClicked();


};
#endif // BASE_H
