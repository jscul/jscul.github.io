// the length/height/width of a tile
export const L = 32;

/**
 * Tranform an isometric position to cartesian.
 * @param {*} x
 * @param {*} y
 * @param {*} z
 */
export const cartesian = (x, y, z) => [x * 0.5 - y, x * 0.5 + y, z];

/**
 * Tranform an cartesian position to isometric.
 * @param {*} x
 * @param {*} y
 * @param {*} z
 */
export const isometric = (x, y, z) => [x - y, (x + y) * 0.5];

export const tile = (x, y, z) => {};
