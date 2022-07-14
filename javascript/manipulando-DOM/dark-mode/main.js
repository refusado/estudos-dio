let changeMode  = document.getElementById('change-mode-btn');
let spanModeT   = document.getElementById('span-mode-text');
let spanModeB   = document.getElementById('span-mode-btn');
console.log(spanModeT);
let isDark      = false;

changeMode.addEventListener('click', () => {
    if (isDark) {
        spanModeT.innerText = 'escuro';
        spanModeB.innerText = 'escuro';
        document.documentElement.style.setProperty('--primary-color', 'var(--white)');
        document.documentElement.style.setProperty('--secondary-color', 'var(--black)');
        
        isDark = false;
    }
    else {
        spanModeT.innerText = 'claro';
        spanModeB.innerText = 'claro';
        document.documentElement.style.setProperty('--primary-color', 'var(--black)');
        document.documentElement.style.setProperty('--secondary-color', 'var(--white)');

        isDark = true;
    }
});