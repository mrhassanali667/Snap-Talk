

function getRandomDarkColors(count) {
    const colors = [];
    for (let i = 0; i < count; i++) {

        const r = Math.floor(Math.random() * 100);
        const g = Math.floor(Math.random() * 100);
        const b = Math.floor(Math.random() * 100);

        colors.push(`rgb(${r}, ${g}, ${b})`);
    }
    return colors;
}

const ENV = import.meta.env || process.env || null;

export default ENV;

export {
    getRandomDarkColors,
    ENV
}