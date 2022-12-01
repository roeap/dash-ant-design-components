from dash import Dash

import dash_antd as ant

from .pages import controls_page, graph_page

app = Dash(__name__, suppress_callback_exceptions=True)

app.layout = ant.ConfigProvider(
    id="app-config",
    use_dark_theme=True,
    # use_compact=True,
    token={"colorPrimary": "green"},
    children=ant.PagesWithSidebar(
        sidebar_width=200,
        menu_theme="dark",
        children=[controls_page, graph_page],
        selected_key="controls",
    ),
)
