import dash_antd as ant
from example.metadata import get_component_metadata


button_content = [
    ant.Space(
        style={"marginBottom": 25},
        children=[
            ant.Button("Primary", type="primary"),
            ant.Button("Default"),
            ant.Button("Dashed", type="dashed"),
            ant.Button("Text", type="text"),
            ant.Button("Link", type="link"),
            ant.Button("Disabled", disabled=True),
            ant.Button("Danger", danger=True),
            ant.Button("Primary Danger", danger=True, type="primary"),
            ant.Button("OK", shape="circle", type="primary"),
            ant.Button("OK", shape="round", type="primary"),
        ],
    ),
]

input_content = [
    ant.Space(
        style={"marginBottom": 25},
        children=[
            ant.Input(placeholder="input hint"),
            ant.Input(addon_before="https://", addon_after=".com"),
            ant.Input(placeholder="status warning", status="warning"),
            ant.Input(placeholder="status error", status="error"),
            ant.Input(placeholder="borderless", bordered=False),
            ant.Input(placeholder="clearable", allow_clear=True),
        ],
    ),
]

input_number_content = [
    ant.Space(
        style={"marginBottom": 25},
        children=[
            ant.InputNumber(value=10, step=10),
            ant.InputNumber(addon_after="m"),
            ant.InputNumber(addon_after="m", status="warning"),
            ant.InputNumber(addon_after="m", status="error"),
        ],
    ),
]

checkbox_content = [
    ant.Space(
        style={"marginBottom": 25},
        children=[
            ant.Checkbox("checked", checked=True),
            ant.Checkbox("indeterminate", indeterminate=True),
            ant.Checkbox("unchecked", checked=False),
            ant.Checkbox("disabled", checked=False, disabled=True),
        ],
    ),
]

select_options = [{"label": f"Option {i}", "value": f"option-{i}"} for i in range(10)]

select_content = [
    ant.Space(
        style={"marginBottom": 25},
        children=[
            ant.Select(options=select_options, style={"width": 100}),
            ant.Select(options=select_options, style={"width": 100}, placeholder="placeholder text"),
            ant.Select(options=select_options, style={"width": 250}, mode="multiple"),
            ant.Select(options=select_options, style={"width": 250}, mode="tags"),
        ],
    ),
]

date_picker_content = [
    ant.Space(
        style={"marginBottom": 25},
        children=[
            ant.DatePicker(),
            ant.DatePicker(bordered=False),
            ant.DatePicker(show_time=True, show_now=True),
            ant.DatePicker(status="error"),
            ant.DatePicker(status="warning"),
        ],
    ),
]

date_range_picker_content = [
    ant.Space(
        style={"marginBottom": 25},
        children=[
            ant.DateRangePicker(),
            ant.DateRangePicker(bordered=False),
            ant.DateRangePicker(show_time=True, show_now=True),
            ant.DateRangePicker(status="error"),
            ant.DateRangePicker(status="warning"),
        ],
    ),
]

time_picker_content = [
    ant.Space(
        style={"marginBottom": 25},
        children=[
            ant.TimePicker(),
            ant.TimePicker(bordered=False),
            ant.TimePicker(status="error"),
            ant.TimePicker(status="warning"),
        ],
    ),
]

time_range_picker_content = [
    ant.Space(
        style={"marginBottom": 25},
        children=[
            ant.TimeRangePicker(),
            ant.TimeRangePicker(bordered=False),
            ant.TimeRangePicker(status="error"),
            ant.TimeRangePicker(status="warning"),
        ],
    ),
]

radio_content = [
    ant.Space(
        style={"marginBottom": 25},
        children=[
            ant.Radio("checked", checked=True),
            ant.Radio("unchecked", checked=False),
            ant.Radio("unchecked", checked=False, disabled=True),
        ],
    ),
]

radio_button_content = [
    ant.Space(
        style={"marginBottom": 25},
        children=[
            ant.RadioButton("checked", checked=True),
            ant.RadioButton("unchecked", checked=False),
            ant.RadioButton("disabled", checked=False, disabled=True),
            ant.RadioButton("checked", checked=True),
        ],
    ),
]

radio_group_options = [
    {"label": "Apple", "value": "Apple"},
    {"label": "Pear", "value": "Pear"},
    {"label": "Orange", "value": "Orange", "disabled": True},
]

radio_group_content = [
    ant.Space(
        style={"marginBottom": 25},
        children=[
            ant.RadioGroup(options=radio_group_options),
            ant.RadioGroup(options=radio_group_options, option_type="button", button_style="outline"),
            ant.RadioGroup(options=radio_group_options, option_type="button", button_style="solid"),
        ],
    ),
]

slider_content = [
    ant.Space(
        style={"marginBottom": 25},
        children=[
            ant.Slider(style={"width": 100}),
            ant.Slider(range=True, style={"width": 100}),
            ant.Slider(style={"width": 100}),
        ],
    ),
]

switch_content = [
    ant.Space(
        style={"marginBottom": 25},
        children=[
            ant.Switch(checked=True),
            ant.Switch(checked=False),
        ],
    ),
]

tag_content = [
    ant.Space(
        style={"marginBottom": 25},
        children=[
            ant.Tag("tag-1"),
            ant.Tag("green", color="green"),
            ant.Tag("icon", icon="UpCircleOutlined"),
            ant.Tag("closable", closable=True, color="orange"),
        ],
    ),
]

checkable_tag_content = [
    ant.Space(
        style={"marginBottom": 25},
        children=[
            ant.CheckableTag("checked", checked=True),
            ant.CheckableTag("unchecked"),
        ],
    ),
]

alert_content = [
    ant.Space(
        style={"marginBottom": 25},
        children=[
            ant.Alert(message="info"),
            ant.Alert(message="warning", type="warning"),
            ant.Alert(message="error", type="error"),
            ant.Alert(message="success", type="success"),
            ant.Alert(
                message="closable", type="success", closable=True, icon=ant.Icon("ForwardOutlined"), show_icon=True
            ),
        ],
    ),
]

config_provider_content = [
    ant.Space(
        style={"marginBottom": 25},
        children=[
            ant.ConfigProvider([ant.Button("Primary", type="primary"), ant.Input()], use_dark_theme=True),
            ant.ConfigProvider([ant.Button("Primary", type="primary"), ant.Input()], use_compact=True),
            ant.ConfigProvider([ant.Button("Primary", type="primary"), ant.Input()]),
        ],
    ),
]

segmented_content = [
    ant.Space(
        style={"marginBottom": 25},
        children=[
            ant.Segmented(options=["one", "two", "three"]),
        ],
    ),
]


def get_component_props(folder: str, name):
    path = f"src/ts/components/{folder}/{name}.tsx" if folder else f"src/ts/components/{name}.tsx"
    metadata = get_component_metadata(path)
    return {"title": metadata["displayName"], "extra": ant.Tag("Experimental", color="orange")}


controls_page = ant.Page(
    page_key="controls",
    children=ant.Space(
        direction="vertical",
        style={"width": "100%", "paddingLeft": 24, "paddingRight": 24, "paddingBottom": 24},
        size="large",
        children=[
            ant.Card(button_content, **get_component_props("button", "Button")),
            ant.Card(input_content, **get_component_props("input", "Input")),
            ant.Card(input_number_content, **get_component_props("input", "InputNumber")),
            ant.Card(select_content, **get_component_props("select", "Select")),
            ant.Card(checkbox_content, **get_component_props("checkbox", "Checkbox")),
            ant.Card(date_picker_content, **get_component_props("datepicker", "DatePicker")),
            ant.Card(date_range_picker_content, **get_component_props("datepicker", "DateRangePicker")),
            ant.Card(time_picker_content, **get_component_props("datepicker", "TimePicker")),
            ant.Card(time_range_picker_content, **get_component_props("datepicker", "TimeRangePicker")),
            ant.Card(radio_content, **get_component_props("radio", "Radio")),
            ant.Card(radio_button_content, **get_component_props("radio", "RadioButton")),
            ant.Card(radio_group_content, **get_component_props("radio", "RadioGroup")),
            ant.Card(slider_content, **get_component_props("", "Slider")),
            ant.Card(switch_content, **get_component_props("", "Switch")),
            ant.Card(tag_content, **get_component_props("tag", "Tag")),
            ant.Card(checkable_tag_content, **get_component_props("tag", "CheckableTag")),
            ant.Card(alert_content, **get_component_props("alert", "Alert")),
            ant.Card(config_provider_content, **get_component_props("", "ConfigProvider")),
            ant.Card(segmented_content, **get_component_props("", "Segmented")),
        ],
    ),
)
