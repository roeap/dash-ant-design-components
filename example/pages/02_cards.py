import dash
from dash import html

import dash_antd as dadc

dash.register_page(path="/cards", title="Cards", icon="ControlOutlined")  # type: ignore


layout = html.Div(
    [
        dadc.Card(dadc.Button("Hello World"), hoverable=True, title="Card Title"),
        dadc.Card(dadc.Button("Hello World"), hoverable=True, title="Card Title"),
    ],
)
