// Fecha de inicio - Cambia esta fecha a la que desees
const startDate = new Date('2024-02-14T00:00:00');

function updateCountdown() {
    const now = new Date();
    const diff = now - startDate;

    // Calcular años, meses, días, horas, minutos y segundos
    const totalMinutes = Math.floor(diff / 1000 / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    
    // Calcular años completos
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    
    // Ajustar si los días son negativos
    if (days < 0) {
        months--;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
    }
    
    // Ajustar si los meses son negativos
    if (months < 0) {
        years--;
        months += 12;
    }
    
    // Calcular horas, minutos y segundos del día actual
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Actualizar el DOM
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Actualizar inmediatamente
updateCountdown();

// Actualizar cada segundo
setInterval(updateCountdown, 1000);
