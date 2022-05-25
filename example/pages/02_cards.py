import dash

import dash_antd as dadc

dash.register_page(path="/cards", title="Cards", icon="ControlOutlined")  # type: ignore


layout = dadc.Row(
    [
        dadc.Col(dadc.Card(dadc.Button("Hello World"), title="Basic Card"), span=12, style={"padding": 6}),
        dadc.Col(
            dadc.Card(dadc.Button("Hello World"), hoverable=True, title="Hoverable Card"), span=12, style={"padding": 6}
        ),
    ],
    style={"height": "100%"},
)
