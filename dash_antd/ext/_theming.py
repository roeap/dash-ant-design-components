from __future__ import annotations

from dataclasses import dataclass, fields
from typing import Any


def parse_tokens(raw: dict[str, Any]) -> Colors:
    field_names = {field.name for field in fields(Colors)}
    converted = {key.replace("-", "_"): value for key, value in raw.items() if not key.startswith("_")}
    return Colors(**{k: v for k, v in converted.items() if k in field_names})


@dataclass(frozen=True)
class Model:
    fontFamily: str
    fontSize: int
    lineWidth: int
    lineType: str
    motionUnit: float
    motionBase: int
    motionEaseOutCirc: str
    motionEaseInOutCirc: str
    motionEaseOut: str
    motionEaseInOut: str
    motionEaseOutBack: str
    motionEaseInBack: str
    motionEaseInQuint: str
    motionEaseOutQuint: str
    borderRadius: int
    sizeUnit: int
    sizeStep: int
    sizePopupArrow: int
    controlHeight: int
    zIndexBase: int
    zIndexPopupBase: int
    opacityImage: int
    wireframe: bool

    sizeXXL: int
    sizeXL: int
    sizeLG: int
    sizeMD: int
    sizeMS: int
    size: int
    sizeSM: int
    sizeXS: int
    sizeXXS: int
    controlHeightSM: int
    controlHeightXS: int
    controlHeightLG: int
    motionDurationFast: str
    motionDurationMid: str
    motionDurationSlow: str
    fontSizes: list[int]
    lineHeights: list[float]
    lineWidthBold: int
    borderRadiusXS: int
    borderRadiusSM: int
    borderRadiusLG: int
    borderRadiusOuter: int

    fontSizeSM: int
    fontSizeLG: int
    fontSizeXL: int
    fontSizeHeading1: int
    fontSizeHeading2: int
    fontSizeHeading3: int
    fontSizeHeading4: int
    fontSizeHeading5: int
    fontSizeIcon: int
    lineHeight: float
    lineHeightLG: float
    lineHeightSM: float
    lineHeightHeading1: float
    lineHeightHeading2: float
    lineHeightHeading3: float
    lineHeightHeading4: float
    lineHeightHeading5: float
    controlOutlineWidth: int
    controlInteractiveSize: int
    controlItemBgHover: str
    controlItemBgActive: str
    controlItemBgActiveHover: str
    controlItemBgActiveDisabled: str
    controlTmpOutline: str
    controlOutline: str
    fontWeightStrong: int
    opacityLoading: float
    linkDecoration: str
    linkHoverDecoration: str
    linkFocusDecoration: str
    controlPaddingHorizontal: int
    controlPaddingHorizontalSM: int
    paddingXXS: int
    paddingXS: int
    paddingSM: int
    padding: int
    paddingMD: int
    paddingLG: int
    paddingXL: int
    paddingContentHorizontalLG: int
    paddingContentVerticalLG: int
    paddingContentHorizontal: int
    paddingContentVertical: int
    paddingContentHorizontalSM: int
    paddingContentVerticalSM: int
    marginXXS: int
    marginXS: int
    marginSM: int
    margin: int
    marginMD: int
    marginLG: int
    marginXL: int
    marginXXL: int
    boxShadow: str
    boxShadowSecondary: str
    screenXS: int
    screenXSMin: int
    screenXSMax: int
    screenSM: int
    screenSMMin: int
    screenSMMax: int
    screenMD: int
    screenMDMin: int
    screenMDMax: int
    screenLG: int
    screenLGMin: int
    screenLGMax: int
    screenXL: int
    screenXLMin: int
    screenXLMax: int
    screenXXL: int
    screenXXLMin: int
    screenXXLMax: int
    boxShadowPopoverArrow: str
    boxShadowCard: str
    boxShadowDrawerRight: str
    boxShadowDrawerLeft: str
    boxShadowDrawerUp: str
    boxShadowDrawerDown: str
    boxShadowTabsOverflowLeft: str
    boxShadowTabsOverflowRight: str
    boxShadowTabsOverflowTop: str
    boxShadowTabsOverflowBottom: str


@dataclass(frozen=True)
class Colors:
    blue: str
    purple: str
    cyan: str
    green: str
    magenta: str
    pink: str
    red: str
    orange: str
    yellow: str
    volcano: str
    geekblue: str
    gold: str
    lime: str
    colorPrimary: str
    colorSuccess: str
    colorWarning: str
    colorError: str
    colorInfo: str
    colorTextBase: str
    colorBgBase: str
    blue_1: str
    blue_2: str
    blue_3: str
    blue_4: str
    blue_5: str
    blue_6: str
    blue_7: str
    blue_8: str
    blue_9: str
    blue_10: str
    purple_1: str
    purple_2: str
    purple_3: str
    purple_4: str
    purple_5: str
    purple_6: str
    purple_7: str
    purple_8: str
    purple_9: str
    purple_10: str
    cyan_1: str
    cyan_2: str
    cyan_3: str
    cyan_4: str
    cyan_5: str
    cyan_6: str
    cyan_7: str
    cyan_8: str
    cyan_9: str
    cyan_10: str
    green_1: str
    green_2: str
    green_3: str
    green_4: str
    green_5: str
    green_6: str
    green_7: str
    green_8: str
    green_9: str
    green_10: str
    magenta_1: str
    magenta_2: str
    magenta_3: str
    magenta_4: str
    magenta_5: str
    magenta_6: str
    magenta_7: str
    magenta_8: str
    magenta_9: str
    magenta_10: str
    pink_1: str
    pink_2: str
    pink_3: str
    pink_4: str
    pink_5: str
    pink_6: str
    pink_7: str
    pink_8: str
    pink_9: str
    pink_10: str
    red_1: str
    red_2: str
    red_3: str
    red_4: str
    red_5: str
    red_6: str
    red_7: str
    red_8: str
    red_9: str
    red_10: str
    orange_1: str
    orange_2: str
    orange_3: str
    orange_4: str
    orange_5: str
    orange_6: str
    orange_7: str
    orange_8: str
    orange_9: str
    orange_10: str
    yellow_1: str
    yellow_2: str
    yellow_3: str
    yellow_4: str
    yellow_5: str
    yellow_6: str
    yellow_7: str
    yellow_8: str
    yellow_9: str
    yellow_10: str
    volcano_1: str
    volcano_2: str
    volcano_3: str
    volcano_4: str
    volcano_5: str
    volcano_6: str
    volcano_7: str
    volcano_8: str
    volcano_9: str
    volcano_10: str
    geekblue_1: str
    geekblue_2: str
    geekblue_3: str
    geekblue_4: str
    geekblue_5: str
    geekblue_6: str
    geekblue_7: str
    geekblue_8: str
    geekblue_9: str
    geekblue_10: str
    gold_1: str
    gold_2: str
    gold_3: str
    gold_4: str
    gold_5: str
    gold_6: str
    gold_7: str
    gold_8: str
    gold_9: str
    gold_10: str
    lime_1: str
    lime_2: str
    lime_3: str
    lime_4: str
    lime_5: str
    lime_6: str
    lime_7: str
    lime_8: str
    lime_9: str
    lime_10: str
    colorText: str
    colorTextSecondary: str
    colorTextTertiary: str
    colorTextQuaternary: str
    colorFill: str
    colorFillSecondary: str
    colorFillTertiary: str
    colorFillQuaternary: str
    colorBgLayout: str
    colorBgContainer: str
    colorBgElevated: str
    colorBgSpotlight: str
    colorBorder: str
    colorBorderSecondary: str
    colorPrimaryBg: str
    colorPrimaryBgHover: str
    colorPrimaryBorder: str
    colorPrimaryBorderHover: str
    colorPrimaryHover: str
    colorPrimaryActive: str
    colorPrimaryTextHover: str
    colorPrimaryText: str
    colorPrimaryTextActive: str
    colorSuccessBg: str
    colorSuccessBgHover: str
    colorSuccessBorder: str
    colorSuccessBorderHover: str
    colorSuccessHover: str
    colorSuccessActive: str
    colorSuccessTextHover: str
    colorSuccessText: str
    colorSuccessTextActive: str
    colorErrorBg: str
    colorErrorBgHover: str
    colorErrorBorder: str
    colorErrorBorderHover: str
    colorErrorHover: str
    colorErrorActive: str
    colorErrorTextHover: str
    colorErrorText: str
    colorErrorTextActive: str
    colorWarningBg: str
    colorWarningBgHover: str
    colorWarningBorder: str
    colorWarningBorderHover: str
    colorWarningHover: str
    colorWarningActive: str
    colorWarningTextHover: str
    colorWarningText: str
    colorWarningTextActive: str
    colorInfoBg: str
    colorInfoBgHover: str
    colorInfoBorder: str
    colorInfoBorderHover: str
    colorInfoHover: str
    colorInfoActive: str
    colorInfoTextHover: str
    colorInfoText: str
    colorInfoTextActive: str
    colorBgMask: str
    colorWhite: str
    colorLink: str
    colorLinkHover: str
    colorLinkActive: str
    colorFillContent: str
    colorFillContentHover: str
    colorFillAlter: str
    colorBgContainerDisabled: str
    colorBorderBg: str
    colorSplit: str
    colorTextPlaceholder: str
    colorTextDisabled: str
    colorTextHeading: str
    colorTextLabel: str
    colorTextDescription: str
    colorTextLightSolid: str
    colorHighlight: str
    colorBgTextHover: str
    colorBgTextActive: str
    colorIcon: str
    colorIconHover: str
    colorErrorOutline: str
    colorWarningOutline: str
