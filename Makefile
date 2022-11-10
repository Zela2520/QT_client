.PHONY: all build rebuild check memcheck clean

all: check memcheck build


clean:
	rm -rf build

check:
	./run_linters.sh

memcheck:
	./run_memtest.sh

build:
	./run_build.sh

rebuild: clean build
