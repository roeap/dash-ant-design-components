import dash

import dash_antd as dadc
from example.plugin import multi_page

app = dash.Dash(__name__, plugins=[multi_page])


def get_nav_item(page):
    if "icon" in page:
        return {"label": page["title"], "key": page["path"], "path": page["path"], "icon": page["icon"]}
    return {"label": page["title"], "key": page["path"], "path": page["path"]}


nav_items = [get_nav_item(page) for page in dash.page_registry.values()]  # type: ignore


app.layout = dadc.Layout(
    has_sidebar=True,
    children=[
        dadc.Sidebar(
            style={
                "overflow": "auto",
                "height": "100vh",
                "position": "fixed",
                "left": 0,
                "top": 0,
                "bottom": 0,
                "borderRight": "1px solid rgba(0,0,0,.06)",
            },
            theme="light",
            children=[dadc.Menu(id="page-nav", items=nav_items, selected_keys=["page-1"]), dadc.Divider("Controls")],
        ),
        dadc.Layout(
            style={"marginLeft": 200, "height": "100vh"},
            children=[
                dadc.Header(style={"borderBottom": "1px solid rgba(0,0,0,.06)", "background": "white"}),
                dadc.Content(
                    multi_page.page_container,
                    id="page-content",
                    style={"margin": "24px 16px 0", "overflow": "auto"},
                ),
                dadc.Footer("Dash Ant Design Components", style={"textAlign": "center"}),
            ],
        ),
    ],
)
