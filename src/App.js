import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {

	const [ error, guardarError ] = useState(false);
    const [ busqueda, guardarBusqueda ] = useState({
        ciudad: '',
        pais: ''
	});
	const [ consultar, guardarConsultar ] = useState(false);
	const [ resultado, guardarResultado ] = useState({});
	
	const { ciudad, pais } = busqueda;

	useEffect( () => {
		if ( consultar ) {
			const consultarAPI = async () => {
				const apiKey = '42804caccd72340e451498c9ce9b1e99';
				const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`;

				const res = await fetch(url);
				const resJSON = await res.json();
				guardarResultado(resJSON);
				guardarConsultar(false);
	
				// Valida si se encontró la ciudad
				if (resJSON.cod === '404') {
					guardarError(true);
				} else {
					guardarError(false);
				}
			}
			consultarAPI();
		}
	}, [consultar, ciudad, pais]);

	let componente;
	if ( error ) {
		componente = <Error mensaje="Hubo un error, no se encontró la ciudad"/>;
	} else {
		componente = <Clima resultado={resultado} />;
	}

	return (
		<Fragment>
			<Header 
				titulo="Cotiza el clima de tu ciudad"
			/>

			<div className="contenedor-form">
				<div className="container">
					<div className="row">
						<div className="col m6 s12">
							<Formulario
								busqueda={busqueda}
								guardarBusqueda={guardarBusqueda}
								guardarConsultar={guardarConsultar}
							/>
						</div>
						<div className="col m6 s12">
							{componente}
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default App;
