"use strict";
const descriptionInput = document.getElementById('input-description');
descriptionInput === null || descriptionInput === void 0 ? void 0 : descriptionInput.addEventListener('input', (event) => {
    console.log(event.currentTarget);
    const input = event.currentTarget;
});
