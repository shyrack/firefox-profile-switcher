import { createTheme } from "@mui/material";

export const theme = createTheme({
  colorSchemes: {
    dark:
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches,
  },
});
