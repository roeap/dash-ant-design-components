import dash

import dash_antd as dadc

dash.register_page(__name__, title="Cards", icon="ControlOutlined")

actions = [
    dadc.Icon("StepBackwardOutlined", key="action-1"),
    dadc.Icon("StepBackwardOutlined", key="action-2"),
    dadc.Icon("StepBackwardOutlined", key="action-3"),
]

extra = dadc.Button("Hello Extra")


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
            dadc.Col(
                dadc.Card(
                    [dadc.Button("Hello World")],
                    actions=actions,
                    title="Card With Actions",
                ),
                span=12,
            ),
            dadc.Col(
                dadc.Card(
                    [dadc.Button("Hello World")],
                    actions=actions,
                    extra=extra,
                    title="Card With Actions and extras",
                ),
                span=12,
            ),
        ],
        gutter=[6, 6],
        style={"height": "100%"},
    ),
]
