from dash import Dash

import dash_antd as ant

app = Dash(__name__)

app.layout = ant.PagesWithSidebar(
    sidebar_width=200,
    children=[
        ant.Page(ant.Button("content"), controls=ant.Button("controls"), page_key="page-1"),
        ant.Page(ant.Button("content-2"), controls=ant.Button("controls-2"), page_key="page-2"),
    ],
    selected_key="page-1",
)
