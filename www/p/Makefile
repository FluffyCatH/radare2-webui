build:
	npm install
	$(shell npm bin)/gulp

all: build

run: build
	r2 -q -e http.ui=p -e http.root=$(PWD)/../ -c=H /bin/ls

watch:
	$(shell npm bin)/gulp watch

indent:
	jsfmt -w lib/js/*.js
