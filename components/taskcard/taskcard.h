#ifndef TASKCARD_H
#define TASKCARD_H

#include <stylehelper.h>
#include <painter.h>

class TaskCard : public painter
{
    Q_OBJECT
public:
    friend class FriendsPage;
    friend class SchedulePage;
    TaskCard(QWidget *parent = nullptr);

protected:
    QHBoxLayout taskCardLayout;
        QPushButton taskTitle;
        QTextEdit taskDecsription;
        QVBoxLayout timeLayout;
            QTimeEdit beginTime;
            QTimeEdit endTime;
        QHBoxLayout taskCardOptionsHLayout;
            QPushButton saveChangesButton;
            QPushButton deleteTaskButton;
            QPushButton completeTaskButton;
};


#endif // TASKCARD_H
