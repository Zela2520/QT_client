#include "registration.h"

#include <string>
#include <iostream>

RegistrationPage::RegistrationPage(QWidget *parent)
    : painter{parent},
      regPageLayout(this),
      backButton("назад"),
      headerText("регистрация"),
      descriptionText("Введите логин и пароль, чтобы мы могли узнать вас на других устройствах"),
      loginInput(new Input("логин")),
      passwordInput(new Input("пароль")),
      passwordInputRepeat(new Input("повторите пароль")),
      enterButton(new Input("зарегистрироваться"))
{

    this->setObjectName("registration");

    loginInput->loginInput->addAction(QIcon(":/img/my_static/img/detelefriendicon.svg"), QLineEdit::LeadingPosition);


    passwordInput->loginInput->addAction(QIcon(":/img/my_static/img/passwordinputicon.svg"), QLineEdit::LeadingPosition);
    passwordInput->loginInput->setEchoMode(QLineEdit::Password);

    passwordInputRepeat->loginInput->addAction(QIcon(":/img/my_static/img/passwordinputicon.svg"), QLineEdit::LeadingPosition);
    passwordInputRepeat->loginInput->setEchoMode(QLineEdit::Password);
    loginInput->setMinimumWidth(500);
    passwordInput->setMinimumWidth(500);
    passwordInputRepeat->setMinimumWidth(500);
    regPageLayout.addWidget(&backButton, 0, 0, 1, 11, Qt::AlignLeft);
    regPageLayout.addWidget(&headerText, 1, 0, 1, 11, Qt::AlignCenter);
    regPageLayout.addWidget(&descriptionText, 2, 0, 3, 11, Qt::AlignTop | Qt::AlignHCenter);


    regPageLayout.addWidget(loginInput, 4, 0, 7, 11, Qt::AlignCenter);
    regPageLayout.addWidget(passwordInput, 8, 0, 10, 11, Qt::AlignCenter);
    regPageLayout.addWidget(passwordInputRepeat, 12, 0, 14, 11, Qt::AlignCenter);
    regPageLayout.addWidget(&enterButton, 15, 0, 16, 11, Qt::AlignCenter);
}

QPushButton *RegistrationPage::getBackButton()
{
    return &backButton;
}

QPushButton *RegistrationPage::getEnterButton()
{
    return &enterButton;
}

Input *RegistrationPage::getLoginInput()
{
    return loginInput;
}

Input *RegistrationPage::getPasswordInput()
{
    return passwordInput;
}

Input *RegistrationPage::getPasswordInputRepeat()
{
    return passwordInputRepeat;
}
