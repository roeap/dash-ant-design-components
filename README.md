# Dash Ant Design Components

Ant Design components for Plotly Dash.

> The `dash-ant-design-components` are build in pure TypeScript. Generating dash components
> from typeSCript is currently only supported on the dev branch of plotly Dash.

## Install

The `dash-ant-design-components` are at a very early stage and not yet published to pip.
To install, clone this repository, and run the build scripts. Then use the generated wheel
to install in your python environment.

```shell
just build
```

## Development

### Getting Started

1. Create a new python environment:

   ```shell
   python -m venv venv
   . venv/bin/activate
   ```

   _Note: venv\Scripts\activate for windows_

2. Install python dependencies:
   ```shell
   pip install -r requirements.txt
   ```
3. Install npm packages:
   1. Optional: use [nvm](https://github.com/nvm-sh/nvm) to manage node version:
      ```shell
      nvm install
      nvm use
      ```
   2. Install:
      ```shell
      npm install
      ```
4. Build:
   ```shell
   npm run build
   ```

### Component Code

### Publish

If publish on npm:

```shell
npm build
npm publish
```

### Justfile

Alternatively, use the provided [just](https://github.com/casey/just) commands:

1. Create a Python environment from previous step 1 and install:
   ```shell
   just install
   ```
2. Build
   ```shell
   just build
   ```
3. Publish
   ```shell
   just publish
   ```
4. See all commands with `just -l`
