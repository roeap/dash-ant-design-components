// import React from "react";
// import { DashComponentProps, StyledComponentProps } from "../../types";
// import { DatePicker, DatePickerProps } from "antd";
// import moment from "moment";
//
// const { RangePicker: AntRangePicker } = DatePicker;
//
// type Props = {
//     /**
//      * If allow to remove input content with clear icon
//      */
//     allow_clear?: boolean;
//     /**
//      * Whether has border style
//      */
//     bordered?: boolean;
//     /**
//      * Disables all checkboxes within the group
//      */
//     disabled?: boolean;
//     /**
//      * The open state of picker
//      */
//     open?: boolean;
//     /**
//      * The placeholder of date input
//      */
//     placeholder?: [string, string];
//     /**
//      * The position where the selection box pops up
//      */
//     placement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
//     /**
//      * Whether to provide an additional time selection
//      */
//     show_time?: boolean;
//     /**
//      * 	Whether to show 'Now' button on panel when show_time is set
//      */
//     show_now?: boolean;
//     /**
//      * To determine the size of the input box, the height of large and small,
//      * are 40px and 24px respectively, while default size is 32px
//      */
//     size?: "large" | "middle" | "small";
//     /**
//      * Set validation status
//      */
//     status?: "error" | "warning";
//     /**
//      * The selected start date / datetime
//      */
//     start?: string;
//     /**
//      * The selected start date / datetime
//      */
//     end?: string;
// } & DashComponentProps &
//     StyledComponentProps;
//
// /**
//  * Select Date or DateTime
//  */
// const DateRangePicker = (props: Props) => {
//     const {
//         allow_clear,
//         disabled,
//         start,
//         end,
//         show_time,
//         show_now,
//         setProps,
//         ...otherProps
//     } = props;
//
//     const handleOpenChange: DatePickerProps["onOpenChange"] = (open) => {
//         if (!disabled && setProps) {
//             setProps({ open });
//         }
//     };
//
//     const handleChange = (
//         _dates: [moment.Moment, moment.Moment],
//         dateStrings: [string, string]
//     ) => {
//         if (!disabled && setProps) {
//             const [startStr, endStr] = dateStrings;
//             setProps({ start: startStr, end: endStr });
//         }
//     };
//
//     return (
//         <AntRangePicker
//             allowClear={allow_clear}
//             value={[moment(start), moment(end)]}
//             showTime={show_time}
//             showNow={show_now}
//             onChange={handleChange}
//             onOpenChange={handleOpenChange}
//             {...otherProps}
//         />
//     );
// };
//
// DateRangePicker.defaultProps = {};
//
// export default DateRangePicker;
