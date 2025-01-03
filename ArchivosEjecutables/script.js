// VARIABLES PARA LOS DÍAS Y MESES DEL AÑO DENTRO DE UN CALENDARIO...

const diasCalendario = document.getElementById("calendar-days");
const mesesDelAno = document.getElementById("month-year");
const botonMesAnterior = document.getElementById("previous-month");
const botonMesSiguiente = document.getElementById("next-month");

let fechaActual = new Date();

function renderCalendar(date)
{
    const ano = date.getFullYear();
    const mes = date.getMonth();

    // SE DESPLIEGAN EL PRIMER Y EL ÚLTIMO DÍA DEL MES...

    const primerDia = new Date(ano, mes, 1);
    const ultimoDia = new Date(ano, mes + 1, 0);

    // DETERMINA AL COMENZAR EL DÍA DE LA SEMANA...

    const diaComienzo = primerDia.getDay();

    // ELIMINA LOS DÍAS ANTERIORES DEL CALENDARIO...

    diasCalendario.innerHTML = "";

    // AJUSTA LOS MESES Y EL AÑO...

    mesesDelAno.textContent = `${date.toLocaleString("default", {mes: "long",})} ${ano}`;

    // RELLENA LOS DÍAS VACÍOS AL COMIENZO...

    for (let i = 0; i < diaComienzo; i++)
    {
        const celdaVacia = document.createElement("div");
        diasCalendario.appendChild(celdaVacia);
    }

    // RELLENA LOS DÍAS DEL MES...

    for (let day = 1; day <= ultimoDia.getDate(); day++)
    {
        const diaCelda = document.createElement("div");
        diaCelda.textContent = day;

        // FECHA ACTUAL EXCEDIDA...

        if (day === new Date().getDate() && mes === new Date().getMonth() && ano === new Date().getFullYear())
        {
            diaCelda.classList.add("today");
        }

        diasCalendario.appendChild(diaCelda);
    }
}

// EVENT LISTENERS FOR NAVIGATION BUTTONS...

botonMesAnterior.addEventListener("click", () => {fechaActual.setMonth(fechaActual.getMonth() - 1);
    renderCalendar(fechaActual);
})

botonMesSiguiente.addEventListener("click", () => {fechaActual.setMonth(fechaActual.getMonth() + 1);
    renderCalendar(fechaActual);
})

// INICIALIZA EL CALENDARIO...

renderCalendar(fechaActual);