const theme = {
  typography: {
    headline: {
      fontFamily: "InterSemiBold",
      fontSize: 30,
      fontWeight: "600",
      lineHeight: 38,
    },
    title: {
      fontFamily: "InterSemiBold",
      fontSize: 16,
      fontWeight: "600",
      lineHeight: 24,
    },
    normal: {
      fontFamily: "InterRegular",
      fontSize: 14,
      fontWeight: "400",
      lineHeight: 20,
    },
  },
  colors: {
    primary: "#fff",
    secondary: "#000",
    primaryBackground: "#fff",
    primaryMuted: "#f0f0f0",
    muted: "gray",
  },
} as const;

export default theme;
