from typing import Optional

import dash

import dash_antd as dadc

_ROOT_STYLE = {
    "overflow": "auto",
    "height": "100vh",
    "position": "fixed",
    "left": 0,
    "top": 0,
    "bottom": 0,
    "borderRight": "1px solid rgba(0,0,0,.06)",
}


def get_nav_item(page):
    if "icon" in page:
        return {"label": page["title"], "key": page["path"], "path": page["path"], "icon": page["icon"]}
    return {"label": page["title"], "key": page["path"], "path": page["path"]}


def generate_sidebar_layout(primary_color: Optional[str] = None) -> dadc.ConfigProvider:
    nav_items = [get_nav_item(page) for page in dash.page_registry.values()]

    token = {}
    if primary_color is not None:
        token["colorPrimary"] = primary_color

    return dadc.ConfigProvider(
        id="config-provider",
        use_dark_theme=True,
        token=token,
        children=dadc.Layout(
            has_sidebar=True,
            children=[
                dadc.Sidebar(
                    style=_ROOT_STYLE,
                    theme="light",
                    children=[
                        dadc.Menu(id="page-nav", items=nav_items, selected_keys=["page-1"]),
                        dadc.Divider("Controls"),
                    ],
                ),
                dadc.Layout(
                    style={"marginLeft": 200, "minHeight": "100vh"},
                    children=[
                        dadc.Content(
                            dash.page_container,
                            id="page-content",
                            style={"margin": "0", "padding": 0},
                        ),
                    ],
                ),
            ],
        ),
    )
