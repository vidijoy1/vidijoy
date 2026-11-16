function validateVideoOrder(name, recipient, message, photos) {
    if (!name || !recipient || !message) {
        throw new Error("Completează toate câmpurile!");
    }

    if (!photos || photos.length < 1) {
        throw new Error("Încarcă cel puțin o fotografie!");
    }

    return {
        name,
        recipient,
        message,
        photos,
        status: "ready"
    };
}

window.VidiJoy = {
    validateVideoOrder
};
