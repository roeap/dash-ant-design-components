from dataclasses import fields

from dash import Input, Output, callback, register_page

import dash_antd as ant
from dash_antd.ext import parse_tokens

register_page(__name__, title="Cards", icon="ControlOutlined")

actions = [
    ant.Icon("StepBackwardOutlined", key="action-1"),
    ant.Icon("StepBackwardOutlined", key="action-2"),
    ant.Icon("StepBackwardOutlined", key="action-3"),
]

extra = ant.Button("Hello Extra")


layout = [
    ant.Row(
        id="card-tokens",
        gutter=[24, 24],
        style={"height": "100%", "padding": 24},
        children=[
            ant.Col(ant.Card(ant.Button("Hello World"), hoverable=True, title="Hoverable Card"), span=12),
            ant.Col(
                ant.Card(
                    [ant.Button("Hello World")],
                    actions=actions,
                    title="Card With Actions",
                ),
                span=12,
            ),
            ant.Col(
                ant.Card(
                    [ant.Button("Hello World")],
                    actions=actions,
                    extra=extra,
                    title="Card With Actions and extras",
                ),
                span=12,
            ),
            ant.Col(ant.Card(ant.Button("Hello World")), span=12),
            ant.Col(ant.Card(ant.Button("Hello World"), hoverable=True), span=12),
        ],
    ),
]


@callback(Output("card-tokens", "children"), Input("app-config", "active_tokens"))
def tokens(active_tokens: dict[str, str]):
    parsed = parse_tokens(active_tokens)

    cols = []
    for field in fields(parsed):
        cols.append(ant.Col(ant.Card(title=field.name, body_style={"background": getattr(parsed, field.name)}), span=3))

    return cols
