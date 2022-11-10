cmake_minimum_required(VERSION 3.5)

project(NewMeeUpClient VERSION 0.1 LANGUAGES CXX)

set(CMAKE_INCLUDE_CURRENT_DIR ON)

set(CMAKE_AUTOUIC ON)
set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTORCC ON)

set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(QT NAMES Qt6 Qt5 COMPONENTS Widgets REQUIRED)
find_package(Qt${QT_VERSION_MAJOR} COMPONENTS Widgets REQUIRED)
find_package(Qt6 REQUIRED COMPONENTS Network)



include_directories(pages components/information_field pages/settings components/taskcard components/friendcard components/input components/navbar_2 pages/friendspage pages/schedulepage pages/registration pages/groups pages/authorization components components/group_title components/navbar components/search_field my_static my_static/css my_static/img)

set(PROJECT_SOURCES
        main.cpp
        components/information_field/information_field.cpp
        components/information_field/information_field.h
        pages/settings/settings.cpp
        pages/settings/settings.h
        components/taskcard/taskcard.cpp
        components/taskcard/taskcard.h
        components/friendcard/friendcard.cpp
        components/friendcard/friendcard.h
        components/input/input.cpp
        components/input/input.h
        components/navbar_2/navbar_2.cpp
        components/navbar_2/navbar_2.h
        pages/friendspage/friendspage.cpp
        pages/friendspage/friendspage.h
        pages/schedulepage/schedulepage.cpp
        pages/schedulepage/schedulepage.h
        pages/registration/registration.cpp
        pages/registration/registration.h
        pages/groups/groups.cpp
        pages/groups/groups.h
        components/search_field/search_field.cpp
        components/search_field/search_field.h
        components/group_title/group_title.cpp
        components/group_title/group_title.h
        components/navbar/navbar.cpp
        components/navbar/navbar.h
        static.qrc
        my_static/stylehelper.cpp
        my_static/stylehelper.h
        pages/painter.cpp
        pages/painter.h
        pages/authorization/authorization.cpp
        pages/authorization/authorization.h
        pages/base.cpp
        pages/base.h
)

if(${QT_VERSION_MAJOR} GREATER_EQUAL 6)
    qt_add_executable(NewMeeUpClient
        MANUAL_FINALIZATION
        ${PROJECT_SOURCES}
    )
# Define target properties for Android with Qt 6 as:
#    set_property(TARGET NewMeeUpClient APPEND PROPERTY QT_ANDROID_PACKAGE_SOURCE_DIR
#                 ${CMAKE_CURRENT_SOURCE_DIR}/android)
# For more information, see https://doc.qt.io/qt-6/qt-add-executable.html#target-creation
else()
    if(ANDROID)
        add_library(NewMeeUpClient SHARED
            ${PROJECT_SOURCES}
        )
# Define properties for Android with Qt 5 after find_package() calls as:
#    set(ANDROID_PACKAGE_SOURCE_DIR "${CMAKE_CURRENT_SOURCE_DIR}/android")
    else()
        add_executable(NewMeeUpClient
            ${PROJECT_SOURCES}
        )
    endif()
endif()

target_link_libraries(NewMeeUpClient PRIVATE Qt${QT_VERSION_MAJOR}::Widgets)
target_link_libraries(NewMeeUpClient PRIVATE Qt6::Network)

set_target_properties(NewMeeUpClient PROPERTIES
    MACOSX_BUNDLE_GUI_IDENTIFIER my.example.com
    MACOSX_BUNDLE_BUNDLE_VERSION ${PROJECT_VERSION}
    MACOSX_BUNDLE_SHORT_VERSION_STRING ${PROJECT_VERSION_MAJOR}.${PROJECT_VERSION_MINOR}
    MACOSX_BUNDLE TRUE
    WIN32_EXECUTABLE TRUE
)

if(QT_VERSION_MAJOR EQUAL 6)
    qt_finalize_executable(NewMeeUpClient)
endif()
