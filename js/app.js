// Referencias de elementos del DOM
const slider = document.getElementById('length-slider');
const lengthDisplay = document.getElementById('length-display');
const passwordDisplay = document.getElementById('password-display');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');
const copyMsg = document.getElementById('copy-msg');

const chkUpper = document.getElementById('uppercase');
const chkLower = document.getElementById('lowercase');
const chkNumbers = document.getElementById('numbers');
const chkSymbols = document.getElementById('symbols');

const strengthText = document.getElementById('strength-text');
const strengthBars = document.querySelectorAll('.strength-bar');

// Diccionarios de caracteres
const characterSets = {
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lower: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
};

// Función para el fondo del slider usando códigos hex equivalentes a Tailwind
function updateSliderBackground() {
    const min = slider.min;
    const max = slider.max;
    const value = slider.value;
    const percentage = ((value - min) / (max - min)) * 100;
    // #34d399 es el hex equivalente de text-emerald-400, #000 es negro para el fondo
    slider.style.background = `linear-gradient(to right, #34d399 ${percentage}%, #000000 ${percentage}%)`;
}

slider.addEventListener('input', (e) => {
    lengthDisplay.innerText = e.target.value;
    updateSliderBackground();
});

// Inicializar fondo de la barra
updateSliderBackground();

// Funcionalidad para copiar
copyBtn.addEventListener('click', () => {
    const password = passwordDisplay.innerText;
    if (!password || password === "P4$5W0rD!" || password === "SELECT OPTIONS") return;

    navigator.clipboard.writeText(password).then(() => {
        copyMsg.classList.remove('opacity-0');
        setTimeout(() => {
            copyMsg.classList.add('opacity-0');
        }, 2000);
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
});

// Event listener password generation
generateBtn.addEventListener('click', () => {
    const length = parseInt(slider.value, 10);
    const activeSets = [];

    if (chkUpper.checked) activeSets.push(characterSets.upper);
    if (chkLower.checked) activeSets.push(characterSets.lower);
    if (chkNumbers.checked) activeSets.push(characterSets.number);
    if (chkSymbols.checked) activeSets.push(characterSets.symbol);

    if (activeSets.length === 0 || length === 0) {
        passwordDisplay.innerText = "SELECT OPTIONS";
        passwordDisplay.classList.add('text-neutral-500', 'opacity-50');
        updateStrengthIndicators(0);
        return;
    }

    let passwordArray = [];

    activeSets.forEach(set => {
        passwordArray.push(set[Math.floor(Math.random() * set.length)]);
    });

    const combinedPool = activeSets.join('');
    while (passwordArray.length < length) {
        passwordArray.push(combinedPool[Math.floor(Math.random() * combinedPool.length)]);
    }

    passwordArray = passwordArray.sort(() => Math.random() - 0.5);

    passwordDisplay.innerText = passwordArray.join('');
    passwordDisplay.classList.remove('text-neutral-500', 'opacity-50');
    passwordDisplay.classList.add('text-neutral-200');

    calculatePasswordStrength(length, activeSets.length);
});

// Cálculo de fuerza
function calculatePasswordStrength(length, selectedTypesCount) {
    // Si solo elige 1 tipo de carácter, es débil sin importar la longitud
    if (selectedTypesCount === 1) {
        updateStrengthIndicators(1);
        return;
    }

    let score = 1; // Base score (al ser mayor de 8 y tener al menos 2 tipos)

    if (length >= 12) score += 1;
    if (selectedTypesCount >= 3) score += 1;
    if (selectedTypesCount === 4 && length >= 14) score += 1;

    updateStrengthIndicators(score);
}

// Pintar barras
function updateStrengthIndicators(score) {
    strengthBars.forEach(bar => {
        bar.className = 'w-2.5 h-7 border-2 border-neutral-200 strength-bar bg-transparent';
    });
    strengthText.innerText = "";

    let colorClasses = "";
    let textLabel = "";

    switch (score) {
        case 1:
            colorClasses = "bg-red-500 border-red-500";
            textLabel = "TOO WEAK!";
            break;
        case 2:
            colorClasses = "bg-orange-500 border-orange-500";
            textLabel = "WEAK";
            break;
        case 3:
            colorClasses = "bg-yellow-400 border-yellow-400";
            textLabel = "MEDIUM";
            break;
        case 4:
            colorClasses = "bg-emerald-400 border-emerald-400";
            textLabel = "STRONG";
            break;
        default:
            return;
    }

    strengthText.innerText = textLabel;

    for (let i = 0; i < score; i++) {
        strengthBars[i].className = `w-2.5 h-7 border-2 ${colorClasses} strength-bar`;
    }
}