export const invertColor = (color) => {
    const rgbColor = hexToRgb(color);
    return rgbToHex(255 - rgbColor.r, 255 - rgbColor.g, 255 - rgbColor.b);
}

const rgbToHex = (red, green, blue) => {
    return "#" + colorToHex(red) + colorToHex(green) + colorToHex(blue);
}

const colorToHex = (color) => {
    const hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
