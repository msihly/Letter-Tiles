const snapToGrid = (x, y, offset = 36) => [{ x }, { y }].map(axis => Math.round((Object.values(axis)[0] - offset) / offset) * offset + offset);

export default snapToGrid;