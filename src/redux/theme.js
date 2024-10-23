import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        value:
            typeof window !== "undefined"
                ? localStorage.getItem("theme")
                : "light" || "light",
    },
    reducers: {
        toggleTheme: (state) => {
            state.value == "light"
                ? (state.value = "dark")
                : (state.value = "light");
            localStorage.setItem("theme", state.value);
        },
        setLight: (state) => {
            state.value = "light";
            localStorage.setItem("theme", state.value);
        },
        setDark: (state) => {
            state.value = "dark";
            localStorage.setItem("theme", state.value);
        },
    },
});

export const { toggleTheme, setDark, setLight } = themeSlice.actions;

export default themeSlice.reducer;
