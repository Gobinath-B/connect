/** @format */

import { createTheme } from "@mui/material";

export const theme = createTheme({
     components: {
          MuiButton: {
               styleOverrides: {
                    root: {
                         borderRadius: "8px",
                         boxShadow: "none",
                    },
               },
          },
     },
});
