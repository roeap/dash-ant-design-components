import dash

import dash_antd as dadc

dash.register_page(path="/cards", title="Cards", icon="ControlOutlined")  # type: ignore

actions = [
    dadc.CardAction(dadc.Icon("StepBackwardOutlined", key="action-1")),
    dadc.CardAction(dadc.Icon("StepBackwardOutlined", key="action-2")),
    dadc.CardAction(dadc.Icon("StepBackwardOutlined", key="action-3")),
]


layout = dadc.Row(
    [
        dadc.Col(dadc.Card(dadc.Button("Hello World"), title="Basic Card"), span=12, style={"padding": 6}),
        dadc.Col(
            dadc.Card(dadc.Button("Hello World"), hoverable=True, title="Hoverable Card"), span=12, style={"padding": 6}
        ),
        dadc.Col(
            dadc.Card([dadc.Button("Hello World")] + actions, title="Card With Actions"),
            span=12,
            style={"padding": 6},
        ),
    ],
    style={"height": "100%"},
)
