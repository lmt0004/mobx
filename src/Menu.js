import React from "react";
import { inject, observer } from "mobx-react";
import './Menu.css'; // Importa el archivo de estilos CSS

class Menu extends React.Component {
    nombreRef = React.createRef();
    fotoRef = React.createRef();

    renderHeader() {
        return (
            <header style={{ backgroundColor: '#3498db', padding: '10px', color: '#fff', display: 'flex', alignItems: 'center' }}>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/015/736/350/small/black-and-white-soccer-ball-png.png" alt="Logo" style={{ width: '70px', height: 'auto', marginRight: '10px' }} />
                <h1>Futbol Con DAW</h1>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/015/736/350/small/black-and-white-soccer-ball-png.png" alt="Logo" style={{ width: '70px', height: 'auto', marginLeft: '10px' }} />
            </header>
        );
    }

    renderFooter() {
        return (
            <footer style={{ backgroundColor: '#3498db', padding: '10px', color: '#fff', textAlign: 'center' }}>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/015/736/350/small/black-and-white-soccer-ball-png.png" alt="Logo Footer" style={{ width: '50px', height: 'auto', marginRight: '10px' }} />
                <p>Datos de Contacto<br />Correo: furbito@correo.com<br />Teléfono: 123-456-7890</p>
            </footer>
        );
    }
    

    render() {
        const { ArepaStore } = this.props;

        return (
            <div className="menu-container">
                {this.renderHeader()}

                <div className="content-container">
                    <p><h1>Añade tus jugadores o escudos Favoritos</h1></p>
                    <h2> Tenemos {ArepaStore.numeroArepas} jugadores y escudos</h2>

                 

                    <form onSubmit={(e) => {
                        e.preventDefault();

                        ArepaStore.agregarArepa({
                            nombre: this.nombreRef.current.value,
                            foto: this.fotoRef.current.value
                        });
                        e.target.reset();
                    }}>
                        <input type="text"
                            placeholder="Nombre del escudo o jugador"
                            required ref={this.nombreRef}></input>

                        <input type="text"
                            placeholder="Inserta URL de la Foto"
                            required ref={this.fotoRef}></input>

                        <button type="submit">Agregar</button>
                    </form>

                    <div className="horizontal-list-container">
                        <ul className="horizontal-list">
                            {ArepaStore.arepas.map((arepa, index) => (
                                <li key={arepa.nombre}>
                                    <h3>{arepa.nombre}</h3>
                                    <img src={arepa.foto} alt={arepa.nombre} className="arepa-image" />
                                    <button onClick={() => ArepaStore.borrar(index)}>Borrar</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {this.renderFooter()}
            </div>
        );
    }


}

export default inject("ArepaStore")(observer(Menu));