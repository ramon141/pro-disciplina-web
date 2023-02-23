export const classes = {
  root: {
    height: 57,
    backgroundColor: "#02121D",
    padding: "0px 27px",
    zIndex: (theme) => theme.zIndex.drawer + 1,
    boxShadow: "none",
  },
  rootGrid: {
    height: "100%",
    color: "white",
  },
  left: {
    fontFamily: "Comfortaa",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "36px",
    color: "#FFFFFF",
  },
  right: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 12,
  },
  inputPropsSearch: {
    height: 25,
    borderRadius: 15,
  },
  inputSearch: {
    root: {
      height: "20px",
    },
    input: {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#16DB65",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#16DB65",
      },
    },
  },
};
