/*// Importa las funciones y clases necesarias de MobX
import { makeObservable, observable, action, computed, reaction } from "mobx";

// Define la clase ArepaStore
class ArepaStore {
  // Declara un campo observable llamado 'arepas' e inicialízalo con un array vacío
  arepas = [];

  // Constructor de la clase
  constructor() {
    // Hace que la instancia de la clase sea observable y define observabilidad para campos y métodos específicos
    makeObservable(this, {
      arepas: observable,
      agregarArepa: action,
      borrar: action,
      numeroArepas: computed,
    });
   

    // Recupera las 'arepas' almacenadas en el localStorage, si existen
    const localArepas = localStorage.getItem('arepas');
    if (localArepas) {
      // Convierte las 'arepas' de formato JSON a un array y asigna el resultado al campo 'arepas'
      this.arepas = JSON.parse(localArepas);
    }
  }

  // Método que agrega una 'arepa' al array 'arepas'
  agregarArepa = (arepa) => {
    this.arepas.push(arepa);
  }
   //BOTON PARA BORRAR AREPAS
   borrar = () =>{
    this.arepas = [];
    } ;

  // Getter computado que devuelve la cantidad de 'arepas' en el array
  get numeroArepas() {
    return this.arepas.length;
  }
}



// Crea una instancia de la clase ArepaStore
const arepaStore = new ArepaStore();

// Establece una reacción para actualizar el localStorage cuando el array 'arepas' cambia
reaction(
  // Observa la representación en formato JSON del array 'arepas'
  () => JSON.stringify(arepaStore.arepas),
  // Callback que se ejecuta cuando cambia el contenido del array 'arepas'
  (arepasStr) => {
    // Almacena la representación en formato JSON en el localStorage con la clave 'arepas'
    localStorage.setItem('arepas', arepasStr);
  }
);

// Exporta la instancia de ArepaStore para su uso en otras partes de la aplicación
export default arepaStore;*/
import { makeObservable, observable, action, computed, reaction } from "mobx";

// Define la clase ArepaStore
class ArepaStore {
  // Declara un campo observable llamado 'arepas' e inicialízalo con un array vacío
  arepas = [];

  // Constructor de la clase
  constructor() {
    // Hace que la instancia de la clase sea observable y define observabilidad para campos y métodos específicos
    makeObservable(this, {
      arepas: observable,
      agregarArepa: action,
      borrar: action,
      numeroArepas: computed,
    });
   
    // Recupera las 'arepas' almacenadas en el localStorage, si existen
    const localArepas = localStorage.getItem('arepas');
    if (localArepas) {
      // Convierte las 'arepas' de formato JSON a un array y asigna el resultado al campo 'arepas'
      this.arepas = JSON.parse(localArepas);
    }
  }

  // Método que agrega una 'arepa' al array 'arepas'
  agregarArepa = (arepa) => {
    this.arepas.push(arepa);
  }

  // BOTON PARA BORRAR UNA AREPA POR ÍNDICE
  borrar = (index) => {
    if (index >= 0 && index < this.arepas.length) {
      // Elimina el elemento en el índice proporcionado
      this.arepas.splice(index, 1);
    }
  };

  // Getter computado que devuelve la cantidad de 'arepas' en el array
  get numeroArepas() {
    return this.arepas.length;
  }
}

// Crea una instancia de la clase ArepaStore
const arepaStore = new ArepaStore();

// Establece una reacción para actualizar el localStorage cuando el array 'arepas' cambia
reaction(
  // Observa la representación en formato JSON del array 'arepas'
  () => JSON.stringify(arepaStore.arepas),
  // Callback que se ejecuta cuando cambia el contenido del array 'arepas'
  (arepasStr) => {
    // Almacena la representación en formato JSON en el localStorage con la clave 'arepas'
    localStorage.setItem('arepas', arepasStr);
  }
);

// Exporta la instancia de ArepaStore para su uso en otras partes de la aplicación
export default arepaStore;
