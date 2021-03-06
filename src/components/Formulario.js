import React, { useState } from 'react';
import Error from '../components/Error';
import PropTypes from 'prop-types';

const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {

    const [ error, guardarError ] = useState(false);

    // Extraer ciudad y país
    const { ciudad, pais } = busqueda;

    // Coloca los elementos en el state
    const handleChange = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (ciudad.trim() === '' || pais === '') {
            guardarError(true);
            return;
        }
        guardarError(false);

        // Enviar los datos
        guardarConsultar(true);
    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            { error ? <Error mensaje="Hubo un error, todos los campos son obligatorios" /> : null}
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad:</label>
            </div>
            <div className="input-field col s12">
                <select 
                    className=""
                    name="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">-- Selecciona un País --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">País:</label>
            </div>
            <div className="input-field col s12">
                <button
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4 boton-enviar"
                >Enviar</button>
            </div>
        </form>
    );
}

Formulario.propTypes = {
    busqueda: PropTypes.object.isRequired,
    guardarBusqueda: PropTypes.func.isRequired,
    guardarConsultar: PropTypes.func.isRequired,
}

export default Formulario;