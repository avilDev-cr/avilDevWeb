// Definir la altura de la figura
const height = 7;

// Crear la mitad superior de la figura
for (let i = 1; i <= height; i += 2) {
    const spaces = (height - i) / 2;
    const stars = i;
    console.log(" ".repeat(spaces) + "*".repeat(stars) + " ".repeat(spaces));
}

// Crear la mitad inferior de la figura
for (let i = height - 2; i >= 1; i -= 2) {
    const spaces = (height - i) / 2;
    const stars = i;
    console.log(" ".repeat(spaces) + "*".repeat(stars) + " ".repeat(spaces));
}
