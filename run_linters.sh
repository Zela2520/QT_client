#!/usr/bin/env bash

set -o pipefail

function print_header() {
    echo -e "\n***** ${1} *****"
}

function check_log() {
    LOG=$( { ${1}; } 2>&1 )
    STATUS=$?
    echo "$LOG"
    if echo "$LOG" | grep -q -E "${2}"
    then
        exit 1
    fi

    if [ $STATUS -ne 0 ]
    then
        exit $STATUS
    fi
}

print_header "RUN cppcheck"
check_log "cppcheck  main.cpp my_static/*.cpp pages/*.cpp pages/**/*.cpp components/**/*.cpp --enable=all --check-config --inconclusive --error-exitcode=1  -I my_static -I pages -I pages/authorization -I pages/friendspage -I pages/groups -I pages/registration -I pages/schedulepage -I pages/settings -I components/friendcard -I components/group_title -I components/information_field -I components/input  -I components/navbar -I components/navbar_2 -I components/search_field -I components/taskcard --suppress=missingIncludeSystem"

# print_header "RUN cpplint"
# check_log "cpplint --extensions=cpp "Can't open for reading"

print_header "SUCCESS"