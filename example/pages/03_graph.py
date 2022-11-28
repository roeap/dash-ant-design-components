import plotly.express as px
from dash import Input, Output, callback, dcc, register_page

import dash_antd as ant
from dash_antd.ext import parse_tokens

register_page(__name__, title="Graph", icon="ControlOutlined")

df = px.data.iris()  # iris is a pandas DataFrame


layout = ant.Layout(
    style={"height": "100vh"},
    children=ant.Content(
        dcc.Graph(id="full-page-plot", responsive=True, style={"height": "100%"}),
        style={"flex": "1)"},
    ),
)


@callback(
    Output("full-page-plot", "figure"), Input("app-config", "use_dark_theme"), Input("app-config", "active_tokens")
)
def plot(use_dark_theme: bool, active_tokens):
    colors = parse_tokens(active_tokens)
    fig = px.scatter(
        df,
        x="sepal_width",
        y="sepal_length",
        color_discrete_sequence=[colors.colorPrimary],
        template="plotly_dark" if use_dark_theme else "plotly_white",
    )
    fig.update_layout({"autosize": True})
    return fig
