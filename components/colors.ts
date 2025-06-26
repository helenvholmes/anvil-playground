const darkGuidance = "Works with white text or background";
const lightGuidance = "Works with black text or background";

const colors = {
  blues: {
    Blue100: {
      hexCode: "#E0F2FF",
      hsl: "hsl(204, 100%, 90%)",
      token: "Blue100",
      description: lightGuidance,
    },
    Blue200: {
      hexCode: "#B5DEFF",
      hsl: "hsl(204, 100%, 83%)",
      token: "Blue200",
      description: lightGuidance,
    },
    Blue300: {
      hexCode: "#78BBFA",
      hsl: "hsl(211, 93%, 72%)",
      token: "Blue300",
      description: lightGuidance,
    },
    Blue400: {
      hexCode: "#3892F3",
      hsl: "hsl(211, 89%, 58%)",
      token: "Blue400",
      description: darkGuidance,
    },
    Blue500: {
      hexCode: "#0265DC",
      hsl: "hsl(215, 98%, 43%)",
      token: "Blue500",
      description: darkGuidance,
    },
    Blue600: {
      hexCode: "#004491",
      hsl: "hsl(215, 100%, 28%)",
      token: "Blue600",
      description: darkGuidance,
    },
  },

  neutrals: {
    Neutral0: {
      hexCode: "#FFFFFF",
      hsl: "hsl(0, 0%, 100%)",
      token: "Neutral0",
      description: lightGuidance,
    },
    Neutral10: {
      hexCode: "#FCFCFC",
      hsl: "hsl(0, 0%, 99%)",
      token: "Neutral10",
      description: lightGuidance,
    },
    Neutral20: {
      hexCode: "#FAFAFA",
      hsl: "hsl(0, 0%, 98%)",
      token: "Neutral20",
      description: lightGuidance,
    },
    Neutral30: {
      hexCode: "#F7F7F7",
      hsl: "hsl(0, 0%, 97%)",
      token: "Neutral30",
      description: lightGuidance,
    },
    Neutral40: {
      hexCode: "#F5F5F5",
      hsl: "hsl(0, 0%, 96%)",
      token: "Neutral40",
      description: lightGuidance,
    },
    Neutral50: {
      hexCode: "#EEEEEE",
      hsl: "hsl(0, 0%, 93%)",
      token: "Neutral50",
      description: lightGuidance,
    },
    Neutral60: {
      hexCode: "#DFE0E1",
      hsl: "hsl(210, 5%, 87%)",
      token: "Neutral60",
      description: lightGuidance,
    },
    Neutral70: {
      hexCode: "#BCBCBD",
      hsl: "hsl(240, 1%, 74%)",
      token: "Neutral70",
      description: lightGuidance,
    },
    Neutral80: {
      hexCode: "#949596",
      hsl: "hsl(210, 1%, 59%)",
      token: "Neutral80",
      description: darkGuidance,
    },
    Neutral90: {
      hexCode: "#737475",
      hsl: "hsl(210, 1%, 46%)",
      token: "Neutral90",
      description: darkGuidance,
    },
    Neutral100: {
      hexCode: "#606162",
      hsl: "hsl(210, 1%, 38%)",
      token: "Neutral100",
      description: darkGuidance,
    },
    Neutral200: {
      hexCode: "#444445",
      hsl: "hsl(240, 1%, 26%)",
      token: "Neutral200",
      description: darkGuidance,
    },
    Neutral300: {
      hexCode: "#2D2E31",
      hsl: "hsl(225, 5%, 18%)",
      token: "Neutral300",
      description: darkGuidance,
    },
    Neutral400: {
      hexCode: "#141414",
      hsl: "hsl(0, 0%, 8%)",
      token: "Neutral400",
      description: darkGuidance,
    },
    Neutral500: {
      hexCode: "#040404",
      hsl: "hsl(0, 0%, 2%)",
      token: "Neutral500",
      description: darkGuidance,
    },
  },

  reds: {
    Red100: { hexCode: "#FFECE9", description: lightGuidance, token: "Red100" },
    Red200: { hexCode: "#FFB2A0", description: lightGuidance, token: "Red200" },
    Red300: { hexCode: "#FF745F", description: lightGuidance, token: "Red300" },
    Red400: { hexCode: "#F94D32", description: darkGuidance, token: "Red400" },
    Red500: { hexCode: "#E13212", description: darkGuidance, token: "Red500" },
    Red600: { hexCode: "#BF2A00", description: darkGuidance, token: "Red600" },
  },

  yellows: {
    Yellow100: {
      hexCode: "#FFF9E2",
      description: lightGuidance,
      token: "Yellow100",
    },
    Yellow200: {
      hexCode: "#FFF0B1",
      description: lightGuidance,
      token: "Yellow200",
    },
    Yellow300: {
      hexCode: "#FFE278",
      description: lightGuidance,
      token: "Yellow300",
    },
    Yellow400: {
      hexCode: "#FFC902",
      description: lightGuidance,
      token: "Yellow400",
    },
    Yellow500: {
      hexCode: "#FFBE00",
      description: lightGuidance,
      token: "Yellow500",
    },
    Yellow600: {
      hexCode: "#DE9500",
      description: lightGuidance,
      token: "Yellow600",
    },
  },

  greens: {
    Green100: {
      hexCode: "#CEF8E0",
      hsl: "hsl(144, 78%, 85%)",
      description: lightGuidance,
      token: "Green100",
    },
    Green200: {
      hexCode: "#89ECBC",
      hsl: "hsl(152, 72%, 72%)",
      description: lightGuidance,
      token: "Green200",
    },
    Green300: {
      hexCode: "#49CC93",
      hsl: "hsl(152, 55%, 54%)",
      description: lightGuidance,
      token: "Green300",
    },
    Green400: {
      hexCode: "#15A46E",
      hsl: "hsl(156, 78%, 36%)",
      description: darkGuidance,
      token: "Green400",
    },
    Green500: {
      hexCode: "#007A4D",
      hsl: "hsl(164, 100%, 24%)",
      description: darkGuidance,
      token: "Green500",
    },
    Green600: {
      hexCode: "#005132",
      hsl: "hsl(164, 100%, 16%)",
      description: darkGuidance,
      token: "Green600",
    },
  },

  bluegreys: {
    BlueGrey100: {
      hexCode: "#EAEFF2",
      description: lightGuidance,
      token: "BlueGrey100",
    },
    BlueGrey200: {
      hexCode: "#D0D8DD",
      description: lightGuidance,
      token: "BlueGrey200",
    },
    BlueGrey300: {
      hexCode: "#B4C1C8",
      description: lightGuidance,
      token: "BlueGrey300",
    },
    BlueGrey400: {
      hexCode: "#8C9CA5",
      description: darkGuidance,
      token: "BlueGrey400",
    },
    BlueGrey500: {
      hexCode: "#6A7A85",
      description: darkGuidance,
      token: "BlueGrey500",
    },
    BlueGrey600: {
      hexCode: "#576671",
      description: darkGuidance,
      token: "BlueGrey600",
    },
  },

  oranges: {
    Orange100: {
      hexCode: "#FFECCC",
      hsl: "hsl(36, 100%, 90%)",
      description: lightGuidance,
      token: "Orange100",
    },
    Orange200: {
      hexCode: "#FDD291",
      hsl: "hsl(36, 97%, 78%)",
      description: lightGuidance,
      token: "Orange200",
    },
    Orange300: {
      hexCode: "#FFA037",
      hsl: "hsl(33, 100%, 62%)",
      description: lightGuidance,
      token: "Orange300",
    },
    Orange400: {
      hexCode: "#E46F00",
      hsl: "hsl(30, 100%, 45%)",
      description: darkGuidance,
      token: "Orange400",
    },
    Orange500: {
      hexCode: "#B14C00",
      hsl: "hsl(30, 100%, 35%)",
      description: darkGuidance,
      token: "Orange500",
    },
    Orange600: {
      hexCode: "#7A2F00",
      hsl: "hsl(30, 100%, 24%)",
      description: darkGuidance,
      token: "Orange600",
    },
  },

  cyans: {
    Cyan100: {
      hexCode: "#E3FCFF",
      description: lightGuidance,
      token: "Cyan100",
    },
    Cyan200: {
      hexCode: "#B1F3FA",
      description: lightGuidance,
      token: "Cyan200",
    },
    Cyan300: {
      hexCode: "#13CEEA",
      description: lightGuidance,
      token: "Cyan300",
    },
    Cyan400: {
      hexCode: "#08BFDF",
      description: lightGuidance,
      token: "Cyan400",
    },
    Cyan500: {
      hexCode: "#0CA5C0",
      description: lightGuidance,
      token: "Cyan500",
    },
    Cyan600: {
      hexCode: "#038299",
      description: darkGuidance,
      token: "Cyan600",
    },
  },

  purples: {
    Purple100: {
      hexCode: "#F1EDFF",
      description: lightGuidance,
      token: "Purple100",
    },
    Purple200: {
      hexCode: "#C1B6F2",
      description: lightGuidance,
      token: "Purple200",
    },
    Purple300: {
      hexCode: "#8772E5",
      description: darkGuidance,
      token: "Purple300",
    },
    Purple400: {
      hexCode: "#6954C0",
      description: darkGuidance,
      token: "Purple400",
    },
    Purple500: {
      hexCode: "#4F3A9E",
      description: darkGuidance,
      token: "Purple500",
    },
    Purple600: {
      hexCode: "#422799",
      description: darkGuidance,
      token: "Purple600",
    },
  },

  magentas: {
    Magenta100: {
      hexCode: "#FBEAF5",
      description: lightGuidance,
      token: "Magenta100",
    },
    Magenta200: {
      hexCode: "#FAAFE2",
      description: lightGuidance,
      token: "Magenta200",
    },
    Magenta300: {
      hexCode: "#D949A9",
      description: darkGuidance,
      token: "Magenta300",
    },
    Magenta400: {
      hexCode: "#B52D88",
      description: darkGuidance,
      token: "Magenta400",
    },
    Magenta500: {
      hexCode: "#982071",
      description: darkGuidance,
      token: "Magenta500",
    },
    Magenta600: {
      hexCode: "#7D165B",
      description: darkGuidance,
      token: "Magenta600",
    },
  },
};

export default colors;
