import './App.css';
import Form from './Components/Form';
import React, { useState } from 'react';
import Table from './Components/Table';

function App () {
	const [ table, setTable ] = useState([]);
	const addToTable = (fname, lname, email) => {
		const newTable = {
			fname: fname,
			lname: lname,
			email: email
		};
		setTable([ ...table, newTable ]);
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<Form addToTable={addToTable} />
				<Table table={table} />
			</header>
		</div>
	);
}

export default App;
