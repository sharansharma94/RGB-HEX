import { rgbToHex, hexToRgb } from "../index";

describe("`rgbToHex`", () => {
  it('should convert (255, 255, 255) to "#FFFFFF"', () => {
    expect(rgbToHex(255, 255, 255)).toEqual("#FFFFFF");
  });

  it('`rgbToHex` converts (0, 0, 0) to "#000000"', () => {
    expect(rgbToHex(0, 0, 0)).toEqual("#000000");
  });
});

describe("`hexToRgb`", () => {
  it('should convert "#FFFFFF" to (255, 255, 255)', () => {
    expect(hexToRgb("#FFFFFF")).toEqual([255, 255, 255]);
  });

  it('should convert "#000000" to (0, 0, 0)', () => {
    expect(hexToRgb("#000000")).toEqual([0, 0, 0]);
  });

  it('should convert "#FFF" to (255, 255, 255)', () => {
    expect(hexToRgb("#FFF")).toEqual([255, 255, 255]);
  });

  it('should convert "#000" to (0, 0, 0)', () => {
    expect(hexToRgb("#000")).toEqual([0, 0, 0]);
  });

  it('should covert "ff1231" to (255,18,49)', () => {
    expect(hexToRgb("#ff1231")).toEqual([255, 18, 49]);
  });

  it('should covert "#6437de" to (100, 55, 222', () => {
    expect(hexToRgb("#6437de")).toEqual([100, 55, 222]);
  });

  it("should throw an error when given an invalid hexadecimal color value", () => {
    expect(() => hexToRgb("#XYZ")).toThrow(Error);
  });
});
