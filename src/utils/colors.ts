const Colors = (() => {
  const colorMap = new Map<string, string>()
  const colorSet: string[] = [
    "#45ADA8",
    "#547980",
    "#83AF9B",
    "#594F4F",
    "#C06C84",
    "#A7226E",
    "#66A5AD",
    "#355C7D",
    "#2A363B",
    "#FC913A",
    "#E84A5F",
    "#FF3E50"
  ];
  let currentColorIndex = 0;

  const fn = {
    getTextColor(text: string): string {
      if (colorMap.has(text)) {
        return colorMap.get(text) as string
      }
      const color = fn._getColor();
      colorMap.set(text, color);
      return color;
    },
    _getColor(): string {
      const color = colorSet[currentColorIndex];
      currentColorIndex = (currentColorIndex + 1) % colorSet.length;
      return color;

    },
  }

  return {
    getTextColor: fn.getTextColor,
  }
})();

export default Colors