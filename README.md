# Dash Ant Design Components

<p align="center">
<a href="https://github.com/roeap/dash-ant-design-components/actions"><img alt="Actions Status" src="https://github.com/roeap/dash-ant-design-components/actions/workflows/test.yaml/badge.svg"></a>
<a href="https://codecov.io/gh/roeap/dash-ant-design-components">
  <img src="https://codecov.io/gh/roeap/dash-ant-design-components/branch/main/graph/badge.svg?token=DNVIU3FXL5"/>
</a>
<a href="https://github.com/psf/black/blob/main/LICENSE"><img alt="License: MIT" src="https://black.readthedocs.io/en/stable/_static/license.svg"></a>
<a href="https://pypi.org/project/dash-antd/"><img alt="PyPI" src="https://img.shields.io/pypi/v/dash-antd"></a>
<a href="https://github.com/psf/black"><img alt="Code style: black" src="https://img.shields.io/badge/code%20style-black-000000.svg"></a>
</p>

Ant Design components for Plotly Dash.

## Install

to install in your python environment.

```shell
poetry add dash-antd
```

or via pip.

```shell
pip install dash-antd
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

### Example app

An example app is contained in the `example` folder. To run it execute:

```sh
just run
```
