set dotenv-load := false

# Generate components and build the bundle
build:
    yarn build
    black .
    isort .

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

lint:
    yarn lint
    poetry run black --check .
    poetry run isort --check --diff .

# Run demo server
demo:
    yarn demo

# forat all source files
format:
    yarn format
    poetry run black .
    poetry run isort .

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
