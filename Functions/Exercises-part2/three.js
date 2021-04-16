function distance([[{x1, y1}, {x2, y2}], [{x3, y3}, {x4, y4}]]) {
    distBetween1 = Math.sqrt((x2-x1)**2 + (y2-y1)**2);
    distBetween2 = Math.sqrt((x4-x3)**2 + (y4-y3)**2);
    console.log(distBetween1, distBetween2);
}

distance([
    [{x1: 2, y1: 3}, {x2: 1, y2: 4}],
    [{x3: -1, y3: 2}, {x4: 2, y4: -3}],
]);