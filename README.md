# Dash Ant Design Components

Ant Design components for Plotly Dash.

> The `dash-ant-design-components` are build in pure TypeScript. Generating dash components
> from typeSCript is currently only supported on the dev branch of Plotly Dash.

## Install

The `dash-ant-design-components` are at a very early stage and not yet published to pip.
To install, clone this repository, and run the build scripts. Then use the generated wheel
to install in your python environment.

```shell
just build
```

## Development

We use [just](https://github.com/casey/just) as command runner, if you prefer not to install
just, have a look at the `justfile` for detailed commands.

To manage python dependencies, we utilize [poetry](python-poetry.org/).

### Getting Started

Install python and node dependencies.

```sh
just install
```

Build the Dash packages.

```sh
just build
```

See all commands with `just -l`
