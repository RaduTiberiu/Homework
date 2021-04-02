const capacitateCilindrica = prompt("Introduceti capacitatea cilindrica a motorului.")

if (isNaN(capacitateCilindrica)) {
    console.log("Introduceti un numar valid.")
}

if (capacitateCilindrica <= 1600) {
    console.log(`Aveti de platit ${capacitateCilindrica / 200 * 8} lei.`);
} else if (capacitateCilindrica <= 2000) {
    console.log(`Aveti de platit ${capacitateCilindrica / 200 * 20} lei.`);
} else if (capacitateCilindrica <= 2600) {
    console.log(`Aveti de platit ${capacitateCilindrica / 200 * 79} lei.`);
} else if (capacitateCilindrica <= 3000) {
    console.log(`Aveti de platit ${capacitateCilindrica / 200 * 159} lei.`);
} else {
    console.log(`Aveti de platit ${capacitateCilindrica / 200 * 320} lei.`);
}