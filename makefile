.PHONY: test

NODE_ENV ?= development

install-sedy:
	cd sedy && make install

install-installer:
	cd installer && make install

install: install-sedy install-installer
	npm install

run-sedy:
	cd sedy && make run

run-installer:
	cd installer && make run

deploy:
	cd sedy && NODE_ENV=production make deploy

test:
	cd sedy && make test-unit test-e2e

publish-installer:
	cd installer && NODE_ENV=production make build
	rm -rf docs/
	mv installer/build docs/
	echo "The installer is built"
	echo "You can now add and commit the docs/ files on the master branch"
