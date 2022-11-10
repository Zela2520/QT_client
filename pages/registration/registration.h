#ifndef REGISTRATION_H
#define REGISTRATION_H


#include <painter.h>
#include <stylehelper.h>

#include "input.h"
#include <QStackedWidget>

class Base;

class RegistrationPage : public painter
{
    Q_OBJECT
public:
    friend class Base;
    explicit RegistrationPage(QWidget *parent = nullptr);

    QPushButton* getBackButton();
    QPushButton* getEnterButton();

    Input* getLoginInput();
    Input* getPasswordInput();
    Input* getPasswordInputRepeat();

private:
    QGridLayout regPageLayout;
    QPushButton backButton;
    QLabel headerText;
    QLabel descriptionText;
    Input* loginInput;
    Input* passwordInput;
    Input* passwordInputRepeat;
    QPushButton enterButton;

};

#endif // REGISTRATION_H
