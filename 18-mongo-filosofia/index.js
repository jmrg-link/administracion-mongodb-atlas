let nombres = ['Laura','Juan','Fernando','María']
let apellidos = ['Fernández','González','Pérez','López']
let pacientes = []
for (i=0; i < 100; i++) {
    pacientes.push({
        nombre: nombres[Math.floor(Math.random()*nombres.length)],
        apellido1: apellidos[Math.floor(Math.random()*apellidos.length)],
        apellido2: apellidos[Math.floor(Math.random()*apellidos.length)],
    })
}