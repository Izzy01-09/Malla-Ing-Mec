
const materias = [
  {
    semestre: 1,
    materias: [
      { codigo: "452004", nombre: "Algoritmo y Programación", creditos: 2 },
      { codigo: "452007", nombre: "Aprendizaje Autónomo", creditos: 1 },
      { codigo: "452001", nombre: "Cálculo I", creditos: 3 },
      { codigo: "452006", nombre: "Competencias Comunicativas I", creditos: 2 },
      { codigo: "452002", nombre: "Geometría", creditos: 3 },
      { codigo: "452005", nombre: "Introducción a la Ingeniería Mecánica", creditos: 2 },
      { codigo: "452003", nombre: "Química General y Lab", creditos: 3 }
    ]
  },
  {
    semestre: 10,
    materias: [
      { codigo: "452066", nombre: "Proyecto de Grado", creditos: 3 },
      { codigo: "452063", nombre: "Electiva de Profundización I", creditos: 3 },
      { codigo: "452065", nombre: "Electiva de Profundización II", creditos: 3 },
      { codigo: "452067", nombre: "Gerencia para Ingenieros", creditos: 1 },
      { codigo: "452064", nombre: "CIM", creditos: 3 },
      { codigo: "452061", nombre: "Seminario de Grado", creditos: 1 }
    ]
  }
];

let totalCreditos = 160;

function crearMalla() {
  const contenedor = document.getElementById('contenedor-semestres');
  materias.forEach((bloque) => {
    const div = document.createElement('div');
    div.className = 'semestre';
    div.innerHTML = `<h2>Semestre ${bloque.semestre}</h2>`;
    bloque.materias.forEach((materia) => {
      const matDiv = document.createElement('div');
      matDiv.className = 'materia';
      matDiv.innerHTML = `
        <label>
          <input type="checkbox" data-creditos="${materia.creditos}" onchange="actualizar()"/>
          ${materia.nombre} (${materia.creditos} créditos)
        </label>
      `;
      div.appendChild(matDiv);
    });
    contenedor.appendChild(div);
  });
}

function actualizar() {
  const checks = document.querySelectorAll('input[type="checkbox"]');
  let suma = 0;
  checks.forEach((c) => {
    if (c.checked) suma += parseInt(c.dataset.creditos);
  });
  let porcentaje = ((suma / totalCreditos) * 100).toFixed(1);
  document.getElementById('creditos').textContent = `Créditos aprobados: ${suma} / ${totalCreditos}`;
  document.getElementById('porcentaje').textContent = `Avance: ${porcentaje}%`;

  document.getElementById('alerta-saber').textContent = suma >= totalCreditos * 0.75
    ? "✅ Puedes presentar la Prueba Saber Pro"
    : "";
  document.getElementById('alerta-seminario').textContent = suma >= 128
    ? "✅ Puedes inscribir Seminario de Grado"
    : "";
}

crearMalla();
