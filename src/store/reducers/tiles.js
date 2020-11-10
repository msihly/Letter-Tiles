import * as types from "../actions/types";

export default function tiles(state = [], action) {
    switch (action.type) {
        case types.TILE_CREATED: {
            const { id, content, classes, left, top } = action.payload;
            return [...state, { id, content, classes, left, top }];
        } case types.TILE_DELETED: {
            return state.filter(tile => tile.id !== action.payload.id);
        } case types.TILES_DELETED: {
            return [];
        } case types.TILE_UPDATED: {
            const { id, content, classes, left, top } = action.payload;
            return state.map(tile => tile.id === id ? { ...tile, content, classes, left, top } : tile);
        } default: {
            return state;
        }
    }
}