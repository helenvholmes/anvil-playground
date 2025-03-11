const colors = {
  blues: {
    Blue100: {
      hexCode: "#E0F2FF",
      hsl: "hsl(204, 100%, 90%)",
      description: "darkGuidance",
    },
    Blue200: {
      hexCode: "#B5DEFF",
      hsl: "hsl(204, 100%, 83%)",
      description: "darkGuidance",
    },
    Blue300: {
      hexCode: "#78BBFA",
      hsl: "hsl(211, 93%, 72%)",
      description: "darkGuidance",
    },
    Blue400: {
      hexCode: "#3892F3",
      hsl: "hsl(211, 89%, 58%)",
      description: "darkGuidance",
    },
    Blue500: {
      hexCode: "#0265DC",
      hsl: "hsl(215, 98%, 43%)",
      description: "darkGuidance",
    },
    Blue600: {
      hexCode: "#004491",
      hsl: "hsl(215, 100%, 28%)",
      description: "darkGuidance",
    },
  },

  neutrals: {
    Neutral0: {
      hexCode: "#FFFFFF",
      hsl: "hsl(0, 0%, 100%)",
      description: "lightGuidance",
    },
    Neutral10: {
      hexCode: "#FCFCFC",
      hsl: "hsl(0, 0%, 99%)",
      description: "lightGuidance",
    },
    Neutral20: {
      hexCode: "#FAFAFA",
      hsl: "hsl(0, 0%, 98%)",
      description: "lightGuidance",
    },
    Neutral30: {
      hexCode: "#F7F7F7",
      hsl: "hsl(0, 0%, 97%)",
      description: "lightGuidance",
    },
    Neutral40: {
      hexCode: "#F5F5F5",
      hsl: "hsl(0, 0%, 96%)",
      description: "lightGuidance",
    },
    Neutral50: {
      hexCode: "#EEEEEE",
      hsl: "hsl(0, 0%, 93%)",
      description: "lightGuidance",
    },
    Neutral60: {
      hexCode: "#DFE0E1",
      hsl: "hsl(210, 5%, 87%)",
      description: "lightGuidance",
    },
    Neutral70: {
      hexCode: "#BCBCBD",
      hsl: "hsl(240, 1%, 74%)",
      description: "lightGuidance",
    },
    Neutral80: {
      hexCode: "#949596",
      hsl: "hsl(210, 1%, 59%)",
      description: "lightGuidance",
    },
    Neutral90: {
      hexCode: "#737475",
      hsl: "hsl(210, 1%, 46%)",
      description: "lightGuidance",
    },
    Neutral100: {
      hexCode: "#606162",
      hsl: "hsl(210, 1%, 38%)",
      description: "lightGuidance",
    },
    Neutral200: {
      hexCode: "#444445",
      hsl: "hsl(240, 1%, 26%)",
      description: "lightGuidance",
    },
    Neutral300: {
      hexCode: "#2D2E31",
      hsl: "hsl(225, 5%, 18%)",
      description: "lightGuidance",
    },
    Neutral400: {
      hexCode: "#141414",
      hsl: "hsl(0, 0%, 8%)",
      description: "lightGuidance",
    },
    Neutral500: {
      hexCode: "#040404",
      hsl: "hsl(0, 0%, 2%)",
      description: "lightGuidance",
    },
  },

  reds: {
    Red100: { hexCode: "#FFECE9", description: "darkGuidance" },
    Red200: { hexCode: "#FFB2A0", description: "darkGuidance" },
    Red300: { hexCode: "#FF745F", description: "darkGuidance" },
    Red400: { hexCode: "#F94D32", description: "darkGuidance" },
    Red500: { hexCode: "#E13212", description: "darkGuidance" },
    Red600: { hexCode: "#BF2A00", description: "darkGuidance" },
  },

  yellows: {
    Yellow100: { hexCode: "#FFF9E2", description: "lightGuidance" },
    Yellow200: { hexCode: "#FFF0B1", description: "lightGuidance" },
    Yellow300: { hexCode: "#FFE278", description: "lightGuidance" },
    Yellow400: { hexCode: "#FFC902", description: "lightGuidance" },
    Yellow500: { hexCode: "#FFBE00", description: "lightGuidance" },
    Yellow600: { hexCode: "#DE9500", description: "lightGuidance" },
  },

  greens: {
    Green100: {
      hexCode: "#CEF8E0",
      hsl: "hsl(144, 78%, 85%)",
      description: "darkGuidance",
    },
    Green200: {
      hexCode: "#89ECBC",
      hsl: "hsl(152, 72%, 72%)",
      description: "darkGuidance",
    },
    Green300: {
      hexCode: "#49CC93",
      hsl: "hsl(152, 55%, 54%)",
      description: "darkGuidance",
    },
    Green400: {
      hexCode: "#15A46E",
      hsl: "hsl(156, 78%, 36%)",
      description: "darkGuidance",
    },
    Green500: {
      hexCode: "#007A4D",
      hsl: "hsl(164, 100%, 24%)",
      description: "darkGuidance",
    },
    Green600: {
      hexCode: "#005132",
      hsl: "hsl(164, 100%, 16%)",
      description: "darkGuidance",
    },
  },

  bluegreys: {
    BlueGrey100: { hexCode: "#EAEFF2", description: "darkGuidance" },
    BlueGrey200: { hexCode: "#D0D8DD", description: "darkGuidance" },
    BlueGrey300: { hexCode: "#B4C1C8", description: "darkGuidance" },
    BlueGrey400: { hexCode: "#8C9CA5", description: "darkGuidance" },
    BlueGrey500: { hexCode: "#6A7A85", description: "darkGuidance" },
    BlueGrey600: { hexCode: "#576671", description: "darkGuidance" },
  },

  oranges: {
    Orange100: {
      hexCode: "#FFECCC",
      hsl: "hsl(36, 100%, 90%)",
      description: "darkGuidance",
    },
    Orange200: {
      hexCode: "#FDD291",
      hsl: "hsl(36, 97%, 78%)",
      description: "darkGuidance",
    },
    Orange300: {
      hexCode: "#FFA037",
      hsl: "hsl(33, 100%, 62%)",
      description: "darkGuidance",
    },
    Orange400: {
      hexCode: "#E46F00",
      hsl: "hsl(30, 100%, 45%)",
      description: "darkGuidance",
    },
    Orange500: {
      hexCode: "#B14C00",
      hsl: "hsl(30, 100%, 35%)",
      description: "darkGuidance",
    },
    Orange600: {
      hexCode: "#7A2F00",
      hsl: "hsl(30, 100%, 24%)",
      description: "darkGuidance",
    },
  },

  cyans: {
    Cyan100: { hexCode: "#E3FCFF", description: "darkGuidance" },
    Cyan200: { hexCode: "#B1F3FA", description: "darkGuidance" },
    Cyan300: { hexCode: "#13CEEA", description: "darkGuidance" },
    Cyan400: { hexCode: "#08BFDF", description: "darkGuidance" },
    Cyan500: { hexCode: "#0CA5C0", description: "darkGuidance" },
    Cyan600: { hexCode: "#038299", description: "darkGuidance" },
  },

  purples: {
    Purple100: { hexCode: "#F1EDFF", description: "darkGuidance" },
    Purple200: { hexCode: "#C1B6F2", description: "darkGuidance" },
    Purple300: { hexCode: "#8772E5", description: "darkGuidance" },
    Purple400: { hexCode: "#6954C0", description: "darkGuidance" },
    Purple500: { hexCode: "#4F3A9E", description: "darkGuidance" },
    Purple600: { hexCode: "#422799", description: "darkGuidance" },
  },

  magentas: {
    Magenta100: { hexCode: "#FBEAF5", description: "darkGuidance" },
    Magenta200: { hexCode: "#FAAFE2", description: "darkGuidance" },
    Magenta300: { hexCode: "#D949A9", description: "darkGuidance" },
    Magenta400: { hexCode: "#B52D88", description: "darkGuidance" },
    Magenta500: { hexCode: "#982071", description: "darkGuidance" },
    Magenta600: { hexCode: "#7D165B", description: "darkGuidance" },
  },
};

export default colors;
