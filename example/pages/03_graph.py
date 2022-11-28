import plotly.express as px
from dash import Input, Output, callback, dcc, register_page

import dash_antd as dadc

register_page(__name__, title="Graph", icon="ControlOutlined")

df = px.data.iris()  # iris is a pandas DataFrame


layout = dadc.Layout(
    style={"height": "100vh"},
    children=dadc.Content(
        dcc.Graph(id="full-page-plot", responsive=True, style={"height": "100%"}),
        style={"flex": "1)"},
    ),
)


@callback(Output("full-page-plot", "figure"), Input("config-provider", "use_dark_theme"))
def plot(use_dark_theme: bool):
    fig = px.scatter(df, x="sepal_width", y="sepal_length", template="plotly_dark" if use_dark_theme else None)
    fig.update_layout({"autosize": True})
    return fig
