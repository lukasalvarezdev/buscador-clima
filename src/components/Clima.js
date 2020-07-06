import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({resultado}) => {

    const {name, main} = resultado;

    if (!name) return null;

    const temperatura = main.temp - 273.15, 
        temperaturaMin = main.temp_min - 273.15,
        temperaturaMax = main.temp_max - 273.15;

    return ( 
        <div className="card-panel white-col s12">
            <div className="black-text">
                <h2>El clima de {name} es:</h2>
                <p className="temperatura">{temperatura.toFixed(2)}°</p>
                <span>La temperatura mínima fue de: {temperaturaMin.toFixed(2)}°</span> <br />
                <span>La temperatura máxima fue de: {temperaturaMax.toFixed(2)}°</span>
            </div>
        </div>
    );
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}
 
export default Clima;