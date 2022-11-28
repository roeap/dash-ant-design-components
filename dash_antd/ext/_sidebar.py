from typing import Optional

import dash

import dash_antd as ant

_ROOT_STYLE = {
    "overflow": "auto",
    "height": "100vh",
    "position": "fixed",
    "left": 0,
    "top": 0,
    "bottom": 0,
    "borderInlineEnd": "1px solid rgba(253, 253, 253, 0.12)",
    "overflowX": "hidden",
}


def get_nav_item(page):
    if "icon" in page:
        return {"label": page["title"], "key": page["path"], "path": page["path"], "icon": page["icon"]}
    return {"label": page["title"], "key": page["path"], "path": page["path"]}


def generate_sidebar_layout(primary_color: Optional[str] = None, use_dark_theme: bool = False) -> ant.ConfigProvider:
    nav_items = [get_nav_item(page) for page in dash.page_registry.values()]

    token = {}
    if primary_color is not None:
        token["colorPrimary"] = primary_color

    return ant.ConfigProvider(
        id="app-config",
        use_dark_theme=use_dark_theme,
        token=token,
        children=ant.Layout(
            has_sidebar=True,
            children=[
                ant.Sidebar(
                    style=_ROOT_STYLE,
                    theme="light",
                    children=[
                        ant.Menu(id="page-nav", items=nav_items, selected_keys=["page-1"], style={"marginRight": -2}),
                        ant.Divider("Controls"),
                    ],
                ),
                ant.Layout(
                    style={"marginLeft": 200, "minHeight": "100vh"},
                    children=[
                        ant.Content(
                            dash.page_container,
                            id="page-content",
                            style={"margin": "0", "padding": 0},
                        ),
                    ],
                ),
            ],
        ),
    )
