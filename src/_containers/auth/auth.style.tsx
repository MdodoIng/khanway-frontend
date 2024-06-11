// import {StylesConfig} from "react-select";

export const selectStyles: any = {
    input: (styles: any) => ({...styles, color: "#FFFFFF" }),
    control: (styles: any) => ({...styles, backgroundColor: "#1f2d3d", border: "#2c4056", boxShadow: "none", color: "#ffffff", cursor: "pointer"}),
    menu: (styles: any) => ({...styles, backgroundColor: "#1f2d3d", border: "#2c4056", boxShadow: "none", color: "#FFFFFF", cursor: "pointer"}),
    singleValue: (styles: any) => ({...styles, color: "#FFFFFF", cursor: "pointer"}),
    dropdownIndicator: (styles: any) => ({...styles, color: "#FFFFFF", cursor: "pointer"}),
    option: (styles: any, isFocused: boolean) => {
        return {
            ...styles,
            backgroundColor: isFocused ? "#2c4056" : "#1f2d3d",
            color: isFocused ? "#fff" : "#fff",
            cursor: "pointer"
        }
    }
}