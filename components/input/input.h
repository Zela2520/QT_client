#ifndef INPUT_H
#define INPUT_H

#include <stylehelper.h>
#include <painter.h>

class Input : public painter

{
    Q_OBJECT

public:
    friend class RegistrationPage;
    Input(QWidget *parent);
    Input(QString labelText, QString styleSheet = " ");

    QLineEdit* getLoginInput();

protected:
    QHBoxLayout layout;
    QLabel loginLabel;
    QLineEdit* loginInput;



};

#endif // INPUT_H
