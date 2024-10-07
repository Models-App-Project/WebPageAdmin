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
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
