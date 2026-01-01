// src/theme.ts
import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#0f172a",
            paper: "#020617",
        },
        text: {
            primary: "#ffffff",
            secondary: "rgba(255,255,255,0.7)",
        },
        primary: {
            main: "#3b82f6",
        },
    },
    typography: {
        h2: {
            fontWeight: 700,
            lineHeight: 1.1,
        },
        h6: {
            lineHeight: 1.6,
        },
    },
});
