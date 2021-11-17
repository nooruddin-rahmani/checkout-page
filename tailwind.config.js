module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        18: "1.125rem",
        350: "21.875rem",
        489: "30.563rem",
        122: "7.672rem",
        124: "8rem",
        26: "1.679rem",
        58: "3.634rem",
        30: "1.916rem",
        90: "4.5rem",
        19: "1.212rem",
        20: "1.212rem",
        87: "6rem",
        25: "1.563rem",
        166: "10.375rem",
        54: "3.375rem",
        46: "11.563rem",
        94: "5.905rem",
        465: "29.063rem",
        383: "23.938rem",
        300: "18.75rem",
        56: "3.5rem",
        535: "33.438rem",
      },
      fontSize: {
        xxs: "0.625rem",
        sx: "1.188rem",
      },
      backgroundColor: (theme) => ({
        "gray-250": "#F2F2F2",
        "gray-550": "#E0E0E0",
        orange: "#F2994A",
      }),
      textColor: {
        orange: "#F2994A",
      },
      width: {
        "fit-content": "fit-content",
      },
    },
    fontFamily: {
      mont: "Montserrat",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
