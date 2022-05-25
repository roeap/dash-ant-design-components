import dash

import dash_antd as dadc
from example.metadata import get_component_metadata

dash.register_page(path="/", title="Basic Controls", icon="ControlOutlined")  # type: ignore


button_content = [
    dadc.Tag("Experimental", color="orange"),
    dadc.Space(
        style={"marginBottom": 25},
        children=[
            dadc.Button("Primary", type="primary"),
            dadc.Button("Default"),
            dadc.Button("Dashed", type="dashed"),
            dadc.Button("Text", type="text"),
            dadc.Button("Link", type="link"),
            dadc.Button("Disabled", disabled=True),
            dadc.Button("Danger", danger=True),
            dadc.Button("Primary Danger", danger=True, type="primary"),
            dadc.Button("OK", shape="circle", type="primary"),
            dadc.Button("OK", shape="round", type="primary"),
        ],
    ),
]

input_content = [
    dadc.Tag("Experimental", color="orange"),
    dadc.Space(
        style={"marginBottom": 25},
        children=[
            dadc.Input(placeholder="input hint"),
            dadc.Input(addon_before="https://", addon_after=".com"),
            dadc.Input(placeholder="status warning", status="warning"),
            dadc.Input(placeholder="status error", status="error"),
            dadc.Input(placeholder="borderless", bordered=False),
            dadc.Input(placeholder="clearable", allow_clear=True),
        ],
    ),
]

input_number_content = [
    dadc.Tag("Experimental", color="orange"),
    dadc.Space(
        style={"marginBottom": 25},
        children=[
            dadc.InputNumber(value=10, step=10),
            dadc.InputNumber(addon_after="m"),
            dadc.InputNumber(addon_after="m", status="warning"),
            dadc.InputNumber(addon_after="m", status="error"),
        ],
    ),
]

checkbox_content = [
    dadc.Tag("Experimental", color="orange"),
    dadc.Space(
        style={"marginBottom": 25},
        children=[
            dadc.Checkbox("checked", checked=True),
            dadc.Checkbox("indeterminate", indeterminate=True),
            dadc.Checkbox("unchecked", checked=False),
            dadc.Checkbox("disabled", checked=False, disabled=True),
        ],
    ),
]

select_options = [{"label": f"Option {i}", "value": f"option-{i}"} for i in range(10)]

select_content = [
    dadc.Tag("Experimental", color="orange"),
    dadc.Space(
        style={"marginBottom": 25},
        children=[
            dadc.Select(options=select_options, style={"width": 100}),
            dadc.Select(options=select_options, style={"width": 250}, mode="multiple"),
            dadc.Select(options=select_options, style={"width": 250}, mode="tags"),
        ],
    ),
]

date_picker_content = [
    dadc.Tag("Experimental", color="orange"),
    dadc.Space(
        style={"marginBottom": 25},
        children=[
            dadc.DatePicker(),
            dadc.DatePicker(bordered=False),
            dadc.DatePicker(show_time=True, show_now=True),
            dadc.DatePicker(status="error"),
            dadc.DatePicker(status="warning"),
        ],
    ),
]

date_range_picker_content = [
    dadc.Tag("Experimental", color="orange"),
    dadc.Space(
        style={"marginBottom": 25},
        children=[
            dadc.DateRangePicker(),
            dadc.DateRangePicker(bordered=False),
            dadc.DateRangePicker(show_time=True, show_now=True),
            dadc.DateRangePicker(status="error"),
            dadc.DateRangePicker(status="warning"),
        ],
    ),
]

time_picker_content = [
    dadc.Tag("Experimental", color="orange"),
    dadc.Space(
        style={"marginBottom": 25},
        children=[
            dadc.TimePicker(),
            dadc.TimePicker(bordered=False),
            dadc.TimePicker(status="error"),
            dadc.TimePicker(status="warning"),
        ],
    ),
]

time_range_picker_content = [
    dadc.Tag("Experimental", color="orange"),
    dadc.Space(
        style={"marginBottom": 25},
        children=[
            dadc.TimeRangePicker(),
            dadc.TimeRangePicker(bordered=False),
            dadc.TimeRangePicker(status="error"),
            dadc.TimeRangePicker(status="warning"),
        ],
    ),
]

radio_content = [
    dadc.Tag("Experimental", color="orange"),
    dadc.Space(
        style={"marginBottom": 25},
        children=[
            dadc.Radio("checked", checked=True),
            dadc.Radio("unchecked", checked=False),
            dadc.Radio("unchecked", checked=False, disabled=True),
        ],
    ),
]

radio_button_content = [
    dadc.Tag("Experimental", color="orange"),
    dadc.Space(
        style={"marginBottom": 25},
        children=[
            dadc.RadioButton("checked", checked=True),
            dadc.RadioButton("unchecked", checked=False),
            dadc.RadioButton("disabled", checked=False, disabled=True),
            dadc.RadioButton("checked", checked=True),
        ],
    ),
]

radio_group_options = [
    {"label": "Apple", "value": "Apple"},
    {"label": "Pear", "value": "Pear"},
    {"label": "Orange", "value": "Orange", "disabled": True},
]

radio_group_content = [
    dadc.Tag("Experimental", color="orange"),
    dadc.Space(
        style={"marginBottom": 25},
        children=[
            dadc.RadioGroup(options=radio_group_options),
            dadc.RadioGroup(options=radio_group_options, option_type="button", button_style="outline"),
            dadc.RadioGroup(options=radio_group_options, option_type="button", button_style="solid"),
        ],
    ),
]

slider_content = [
    dadc.Tag("Experimental", color="orange"),
    dadc.Space(
        style={"marginBottom": 25},
        children=[
            dadc.Slider(style={"width": 100}),
            dadc.Slider(range=True, style={"width": 100}),
            dadc.Slider(style={"width": 100}),
        ],
    ),
]

switch_content = [
    dadc.Tag("Experimental", color="orange"),
    dadc.Space(
        style={"marginBottom": 25},
        children=[
            dadc.Switch(checked=True),
            dadc.Switch(checked=False),
        ],
    ),
]

tag_content = [
    dadc.Tag("Experimental", color="orange"),
    dadc.Space(
        style={"marginBottom": 25},
        children=[
            dadc.Tag("tag-1"),
            dadc.Tag("green", color="green"),
            dadc.Tag("icon", icon="UpCircleOutlined"),
            dadc.Tag("closable", closable=True, color="orange"),
        ],
    ),
]

checkable_tag_content = [
    dadc.Tag("Experimental", color="orange"),
    dadc.Space(
        style={"marginBottom": 25},
        children=[
            dadc.CheckableTag("checked", checked=True),
            dadc.CheckableTag("unchecked"),
        ],
    ),
]


def get_component_props(folder, name):
    metadata = get_component_metadata(f"src/ts/components/{folder}/{name}.tsx")
    return {"title": metadata["displayName"], "sub_title": metadata["description"], "ghost": False}


layout = dadc.Space(
    direction="vertical",
    style={"width": "100%"},
    children=[
        dadc.PageHeader(button_content, **get_component_props("button", "Button")),
        dadc.PageHeader(input_content, **get_component_props("input", "Input")),
        dadc.PageHeader(input_number_content, **get_component_props("input", "InputNumber")),
        dadc.PageHeader(select_content, **get_component_props("select", "Select")),
        dadc.PageHeader(checkbox_content, **get_component_props("checkbox", "Checkbox")),
        dadc.PageHeader(date_picker_content, **get_component_props("datepicker", "DatePicker")),
        dadc.PageHeader(date_range_picker_content, **get_component_props("datepicker", "DateRangePicker")),
        dadc.PageHeader(time_picker_content, **get_component_props("datepicker", "TimePicker")),
        dadc.PageHeader(time_range_picker_content, **get_component_props("datepicker", "TimeRangePicker")),
        dadc.PageHeader(radio_content, **get_component_props("radio", "Radio")),
        dadc.PageHeader(radio_button_content, **get_component_props("radio", "RadioButton")),
        dadc.PageHeader(radio_group_content, **get_component_props("radio", "RadioGroup")),
        dadc.PageHeader(slider_content, **get_component_props("slider", "Slider")),
        dadc.PageHeader(switch_content, **get_component_props("switch", "Switch")),
        dadc.PageHeader(tag_content, **get_component_props("tag", "Tag")),
        dadc.PageHeader(checkable_tag_content, **get_component_props("tag", "CheckableTag")),
    ],
)
