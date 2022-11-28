from dash import Dash

from dash_antd.ext import generate_sidebar_layout

app = Dash(__name__, use_pages=True)
app.layout = generate_sidebar_layout(primary_color="green")
