const THEMES = new Map([
    ["Light", {
        "--accent-color": {
            hue: 212,
            saturation: 79,
            lightness: 37
        },
        "--accent-fill-color": {
            hue: 0,
            saturation: 0,
            lightness: 90
        },
        "--background-color": {
            hue: 0,
            saturation: 0,
            lightness: 85
        },
        "--foreground-color": {
            hue: 0,
            saturation: 0,
            lightness: 70
        },
        "--text-color": {
            hue: 0,
            saturation: 0,
            lightness: 6
        },
        "--tile-background-color": {
            hue: 212,
            saturation: 79,
            lightness: 37
        },
        "--tile-text-color": {
            hue: 0,
            saturation: 0,
            lightness: 84
        },
    }],
    ["Dark", {
        "--accent-color": {
            hue: 212,
            saturation: 79,
            lightness: 37
        },
        "--accent-fill-color": {
            hue: 0,
            saturation: 0,
            lightness: 90
        },
        "--background-color": {
            hue: 0,
            saturation: 0,
            lightness: 12
        },
        "--foreground-color": {
            hue: 0,
            saturation: 0,
            lightness: 6
        },
        "--text-color": {
            hue: 0,
            saturation: 0,
            lightness: 90
        },
        "--tile-background-color": {
            hue: 0,
            saturation: 0,
            lightness: 85
        },
        "--tile-text-color": {
            hue: 0,
            saturation: 0,
            lightness: 12
        },
    }],
    ["Red", {
        "--accent-color": {
            hue: 1,
            saturation: 95,
            lightness: 25
        },
        "--accent-fill-color": {
            hue: 0,
            saturation: 0,
            lightness: 90
        },
        "--background-color": {
            hue: 1,
            saturation: 50,
            lightness: 65
        },
        "--foreground-color": {
            hue: 1,
            saturation: 95,
            lightness: 25
        },
        "--text-color": {
            hue: 0,
            saturation: 0,
            lightness: 90
        },
        "--tile-background-color": {
            hue: 0,
            saturation: 90,
            lightness: 35
        },
        "--tile-text-color": {
            hue: 0,
            saturation: 0,
            lightness: 90
        },
    }],
    ["Orange", {
        "--accent-color": {
            hue: 25,
            saturation: 100,
            lightness: 35
        },
        "--accent-fill-color": {
            hue: 0,
            saturation: 0,
            lightness: 90
        },
        "--background-color": {
            hue: 25,
            saturation: 85,
            lightness: 65
        },
        "--foreground-color": {
            hue: 25,
            saturation: 100,
            lightness: 35
        },
        "--text-color": {
            hue: 0,
            saturation: 0,
            lightness: 90
        },
        "--tile-background-color": {
            hue: 30,
            saturation: 90,
            lightness: 45
        },
        "--tile-text-color": {
            hue: 0,
            saturation: 0,
            lightness: 90
        },
    }],
    ["Yellow", {
        "--accent-color": {
            hue: 50,
            saturation: 85,
            lightness: 50
        },
        "--accent-fill-color": {
            hue: 0,
            saturation: 0,
            lightness: 6
        },
        "--background-color": {
            hue: 50,
            saturation: 85,
            lightness: 75
        },
        "--foreground-color": {
            hue: 50,
            saturation: 85,
            lightness: 50
        },
        "--text-color": {
            hue: 0,
            saturation: 0,
            lightness: 10
        },
        "--tile-background-color": {
            hue: 55,
            saturation: 85,
            lightness: 55
        },
        "--tile-text-color": {
            hue: 0,
            saturation: 0,
            lightness: 6
        },
    }],
    ["Green", {
        "--accent-color": {
            hue: 115,
            saturation: 95,
            lightness: 25
        },
        "--accent-fill-color": {
            hue: 0,
            saturation: 0,
            lightness: 90
        },
        "--background-color": {
            hue: 115,
            saturation: 50,
            lightness: 65
        },
        "--foreground-color": {
            hue: 115,
            saturation: 95,
            lightness: 25
        },
        "--text-color": {
            hue: 0,
            saturation: 0,
            lightness: 90
        },
        "--tile-background-color": {
            hue: 120,
            saturation: 90,
            lightness: 40
        },
        "--tile-text-color": {
            hue: 0,
            saturation: 0,
            lightness: 90
        },
    }],
    ["Blue", {
        "--accent-color": {
            hue: 210,
            saturation: 95,
            lightness: 25
        },
        "--accent-fill-color": {
            hue: 0,
            saturation: 0,
            lightness: 90
        },
        "--background-color": {
            hue: 210,
            saturation: 50,
            lightness: 65
        },
        "--foreground-color": {
            hue: 210,
            saturation: 95,
            lightness: 25
        },
        "--text-color": {
            hue: 0,
            saturation: 0,
            lightness: 90
        },
        "--tile-background-color": {
            hue: 235,
            saturation: 90,
            lightness: 60
        },
        "--tile-text-color": {
            hue: 0,
            saturation: 0,
            lightness: 90
        },
    }],
    ["Purple", {
        "--accent-color": {
            hue: 300,
            saturation: 95,
            lightness: 25
        },
        "--accent-fill-color": {
            hue: 0,
            saturation: 0,
            lightness: 90
        },
        "--background-color": {
            hue: 300,
            saturation: 50,
            lightness: 65
        },
        "--foreground-color": {
            hue: 300,
            saturation: 95,
            lightness: 25
        },
        "--text-color": {
            hue: 0,
            saturation: 0,
            lightness: 90
        },
        "--tile-background-color": {
            hue: 300,
            saturation: 75,
            lightness: 55
        },
        "--tile-text-color": {
            hue: 0,
            saturation: 0,
            lightness: 90
        },
    }],
]);

export const themeToStyle = (theme) => {
    let style = {};
    for (let [cssVar, hsl] of Object.entries(theme)) {
        style[cssVar] = `hsl(${hsl.hue}, ${hsl.saturation}%, ${hsl.lightness}%)`;
    }
    return style;
};

export default THEMES;