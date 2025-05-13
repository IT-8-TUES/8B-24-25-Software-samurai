// Основна интерактивност за мускулите
document.querySelectorAll('.muscle').forEach(muscle => {
    muscle.addEventListener('click', () => {
        const muscleName = muscle.getAttribute('data-muscle');
        alert(`Упражнения за ${muscleName}:\n1. Упражнение 1\n2. Упражнение 2\n3. Упражнение 3`);
        // Тук можеш да добавиш код за показване на упражнения в модален прозорец или друга секция
    });
});