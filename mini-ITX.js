const mb = () => // Mini ITX
    cube([0.5, 6.7, 6.7]).translate([.2, .2, .2]);

const box = (size) => {
    const wall = 0.1;
    const inn = size - 2 * wall;
    return cube([size, size, size])
    .subtract(
        cube([inn, inn, inn])
        .translate([wall, wall, wall])
    )
    .setColor([1, 0, 0, .1])
};

// SFX PSU
const psu = () =>
    cube([2.5, 4.92, 3.94])
    .setColor([1, 0, 0, 0.5]);

const main = () => union(
    mb(),
    psu().translate([4.4, .3, 3]),
    box(7.1)
)
