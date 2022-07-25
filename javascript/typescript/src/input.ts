const descriptionInput = document.getElementById('input-description') as HTMLInputElement;

descriptionInput?.addEventListener('input', (event) => {
    console.log(event.currentTarget);
    const input = event.currentTarget as HTMLInputElement;
    // console.log(input.value);
});