const lightTheme = {
  palette: {
    mode: "light",
    primary: {
      main: "#515fcff2",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    text: {
      primary: "#333",
    },
    spacing: 8, 
    zIndex: {
      appBar: 1100,
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 800,
          fontSize: "0.75rem",
        },
      },
    },
    MUIDataTableFilter: {
      styleOverrides: {
        root: {
          width: "450px",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "160px",
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          "--Grid-columnSpacing": "75px",
        },
      },
    },
  },
} as const;

export default lightTheme;
