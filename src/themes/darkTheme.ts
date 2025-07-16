const darkTheme = {
  palette: {
    mode: "dark",
    primary: {
      main: "#4c7c65",
    },
    background: {
      default: "#414141",
      paper: "#343434",
    },
    text: {
      primary: "#ffffff",
    },
    spacing: 8, // 1 spacing unit = 8px. You can use theme.spacing(n)
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

export default darkTheme;
