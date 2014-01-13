BIN = node_modules/.bin
SRCDIR = ./src
TESTDIR = ./test

MOCHA = $(BIN)/mocha
SJS = $(BIN)/sjs

all: test

test: build-test
	@$(MOCHA) --reporter spec --recursive --colors

build-test:
	@$(SJS) --module $(SRCDIR)/coco.js $(TESTDIR)/coco_test.sjs -o $(TESTDIR)/coco_test.js
