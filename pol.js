class persona {
    constructor(nombre, edad, sexo) {
                this.nombre = nombre;
                this.edad = edad;
                this.sexo = sexo;
            }

            llamar() {
                document.getElementById('nombre').innerText = this.nombre;
                document.getElementById('edad').innerText = this.edad;
                document.getElementById('sexo').innerText = this.sexo;
            }
        }
const per = new persona("Pedro", 20, "Masculino");
per.llamar();
