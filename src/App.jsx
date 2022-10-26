import './App.css';
import React, { useState } from 'react';

function App() {
	const [sumar, setSumar] = useState('');

	return (
		<div className='App'>
			<h1>React App de nuevo!!</h1>
			<form
			// onSubmit={(evento) => {
			// 	evento.preventDefault();
			// 	setSumar(evento.target.numberA.value);
			// 	//setSumar(evento.target.numberB.value);
			// }}
			>
				<div>
					<label htmlFor=''>ingresa el primer valor</label>
					<input
						type='number'
						//onChange={HandleInput}
						name='numberA'
						onChange={(evento) => setSumar(evento.target.value)}
					/>
				</div>
				<div>
					<label htmlFor=''>ingresa el primer valor</label>
					<input
						type='number'
						//onChange={HandleInput}
						name='numberB'
					/>
				</div>
				<div>
					<button type='submit'>
						<span>Sumar</span>
					</button>
				</div>
				<p>los valores ingresados son: {sumar}</p>
			</form>
		</div>
	);
}

export default App;
