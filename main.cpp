#include "base.h"

#include <QApplication>
#include <QFile>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);

    QFile file(":/css/my_static/css/style.css");
    file.open(QFile::ReadOnly);
    a.setStyleSheet(file.readAll());

    Base w;
    w.show();
    return a.exec();
}
