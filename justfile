set dotenv-load := false

default:
    @just --list

# Generate components and build the bundle
build:
    poetry run yarn build
    poetry run black .
    poetry run ruff --fix .

# Build the webpack bundle
build-js:
    yarn build:js

# Generate the components
generate:
    yarn build:backends

# Rebuild the bundle on change
watch:
    yarn watch

# Install pip requirements & node modules.
install:
    poetry install
    yarn install
    poetry run pre-commit install --hook-type commit-msg --hook-type pre-commit

# run linters on codebase
lint:
    yarn lint
    poetry run black --check .
    poetry run ruff .

fix:
    poetry run ruff --fix .

# Run demo server
demo:
    yarn demo

# run the example dash app
run:
    python -m example

# forat all source files
format:
    yarn format
    poetry run black .
    poetry run ruff --fix .

# Run component tests
test:
    yarn test

# Remove dist & build directories
clean:
    rm -rf dist
    rm -rf build

# Package the application for distribution using python wheel.
package: clean build
    poetry build

# Publish the package to pypi using twine.
publish: package
    yarn publish
    twine upload dist/*
