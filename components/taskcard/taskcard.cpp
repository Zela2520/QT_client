#include "taskcard.h"

TaskCard::TaskCard(QWidget *parent):
    painter(parent),
    taskCardLayout(this),
    taskTitle("Заголовок задачи"),
    taskDecsription("Описание задачи и что нужно сделать"),
    beginTime(QTime(1,0)),
    endTime(QTime(9,10))
{
    this->setObjectName("TaskCard");

    taskCardLayout.addWidget(&taskTitle, Qt::AlignLeft);
    taskTitle.setMaximumWidth(200);

    taskCardLayout.addWidget(&taskDecsription, Qt::AlignLeft);
    taskDecsription.setMaximumWidth(350);

    taskCardLayout.addLayout(&timeLayout);
        beginTime.setMaximumWidth(80);
        endTime.setMaximumWidth(80);
        timeLayout.addWidget(&beginTime);
        timeLayout.addWidget(&endTime);

    taskCardLayout.setAlignment(Qt::AlignLeft);
    taskCardLayout.setSizeConstraint(QLayout::SetDefaultConstraint);
}
