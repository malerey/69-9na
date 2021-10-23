
// Elementos del DOM
const tarjeta = document.querySelector("#operaciones")
const filtroTipo = document.querySelector("#filtro-tipo")
const filtroCategoria = document.querySelector("#filtro-categoria")

// Informacion
const operaciones = [
  {
    descripcion: 'Cena con amigos',
    categoria: 'salidas',
    fecha: '25/09/2021',
    monto: 2500,
    tipo: 'gasto',
  },
  {
    descripcion: 'sueldo',
    categoria: 'sueldo',
    fecha: '01/09/2021',
    monto: 50000,
    tipo: 'ganancia',
  },
  {
    descripcion: 'pagar monotributo',
    categoria: 'sueldo',
    fecha: '01/09/2021',
    monto: 40000,
    tipo: 'gasto',
  },
  {
    descripcion: 'Aguinaldo',
    categoria: 'sueldo',
    fecha: '15/09/2021',
    monto: 25000,
    tipo: 'ganancia',
  },
  {
    descripcion: 'Comida para gatos',
    categoria: 'mascotas',
    fecha: '25/09/2021',
    monto: 3000,
    tipo: 'gasto',
  },
  {
    descripcion: 'alquiler',
    categoria: 'alquiler',
    fecha: '25/09/2021',
    monto: 25000,
    tipo: 'gasto',
  },
  {
    descripcion: 'Expensas',
    categoria: 'alquiler',
    fecha: '01/09/2021',
    monto: 5000,
    tipo: 'gasto',
  },
];

// Funciones
const mostrarOperacionesEnHTML = (array) => {
  let acc = ""

  array.map((operacion) => {
    acc = acc + `
    <div class="fila">
      <p>${operacion.descripcion}</p>
      <p>${operacion.categoria}</p>
      <p>${operacion.tipo}</p>
      <p>${operacion.monto}</p>
    </div>
    `
  })

  tarjeta.innerHTML = acc
}



mostrarOperacionesEnHTML(operaciones)


const aplicarFiltros = () => {
  const tipo = filtroTipo.value 
  const filtradoPorTipo = operaciones.filter((operacion) => {
    if (tipo === "todos") {
      return operacion
    }
    return operacion.tipo === tipo
  })
  
  const categoria = filtroCategoria.value 
  const filtradoFinal = filtradoPorTipo.filter((operacion) => {
    if (categoria === "todos") {
      return operacion
    }
    return operacion.categoria === categoria
  })
  

return filtradoFinal 
}

filtroTipo.onchange = () => {
  const arrayFiltrado = aplicarFiltros()
  mostrarOperacionesEnHTML(arrayFiltrado)
}

filtroCategoria.onchange = () => {
 const arrayFiltrado = aplicarFiltros()
  mostrarOperacionesEnHTML(arrayFiltrado)
}

// // const form = document.querySelector("form")

// // form.onsubmit = (e) => {
// //   // este e.preventDefault evita que el formulario se envie 
// //   e.preventDefault()
  
  
// }
