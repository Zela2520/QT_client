#include "input.h"

Input::Input(QString labelText, QString styleSheet) :
    painter(nullptr),
    loginLabel(labelText),
    loginInput(new QLineEdit),
    layout(this)
{

    layout.addWidget(&loginLabel);
    layout.addWidget(loginInput);
}

QLineEdit *Input::getLoginInput()
{
    return loginInput;
}

Input::Input(QWidget *parent) : painter(parent)
{}
