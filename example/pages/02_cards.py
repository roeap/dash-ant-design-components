import dash

import dash_antd as dadc

dash.register_page(path="/cards", title="Cards", icon="ControlOutlined")  # type: ignore

actions = [
    dadc.CardAction(dadc.Icon("StepBackwardOutlined", key="action-1")),
    dadc.CardAction(dadc.Icon("StepBackwardOutlined", key="action-2")),
    dadc.CardAction(dadc.Icon("StepBackwardOutlined", key="action-3")),
]

extras = [dadc.CardExtra(dadc.Button("Hello Extra"))]


layout = [
    dadc.Row(
        [
            dadc.Col(dadc.Card(dadc.Button("Hello World"), title="Basic Card"), span=12),
            dadc.Col(dadc.Card(dadc.Button("Hello World"), hoverable=True, title="Hoverable Card"), span=12),
        ],
        gutter=[6, 6],
        style={"height": "100%"},
    ),
    dadc.Row(
        [
            dadc.Col(dadc.Card([dadc.Button("Hello World")] + actions, title="Card With Actions"), span=12),
            dadc.Col(
                dadc.Card([dadc.Button("Hello World")] + actions + extras, title="Card With Actions and extras"),
                span=12,
            ),
        ],
        gutter=[6, 6],
        style={"height": "100%"},
    ),
]
