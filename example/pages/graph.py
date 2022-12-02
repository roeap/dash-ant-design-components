import plotly.express as px
from dash import Input, Output, callback, dcc

import dash_antd as ant
from dash_antd.ext import parse_tokens

df = px.data.iris()


graph_page = ant.Page(
    page_key="graph",
    children=[ts_plot := dcc.Graph(responsive=True, style={"height": "100%"})],
)


@callback(Output(ts_plot, "figure"), Input("app-config", "use_dark_theme"), Input("app-config", "active_tokens"))
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
