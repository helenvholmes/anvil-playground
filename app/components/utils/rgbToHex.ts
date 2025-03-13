function componentToHex(c: { toString: (arg0: number) => any }) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

export default function rgbToHex(values: [r: string, g: string, b: string]) {
  const [r, g, b] = values;
  return (
    "#" +
    componentToHex(Number(r)) +
    componentToHex(Number(g)) +
    componentToHex(Number(b))
  );
}
