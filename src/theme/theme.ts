import { createTheme } from "@mui/material";

export const theme = createTheme({
  colorSchemes: {
    dark: window.matchMedia("(prefers-color-scheme: dark)").matches,
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          borderWidth: "1px",
        },
      },
    },
  },
});
