import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	const person = {
		name: 'Mohammad Noman',
		job: 'student',
	};

	const subject = {
		sub: 'Data Structure',
		price: 559,
	};

	const { name, job } = person;
	const { sub, price } = subject;

	const style = {
		color: 'lightblue',
		backgroundColor: 'crimson',
		padding: '5px',
		boxShadow: '5px 5px 10px gray',
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>React Core Concepts</h1>
				<p>First Part</p>
				<h5 className="" style={style}>
					{name + ' ' + job}
				</h5>
				<h6 style={{ backgroundColor: 'lightsalmon', padding: '5px' }}>Book: {sub + ' ' + price}</h6>
				<p>Sum: {(10 + 20) * 40 - 500}</p>
				<button className="btn btn-danger">Test Button</button>
				<br />
				<p>Second Part</p>
				<Person></Person>
				<Person></Person>
				<Person></Person>
				<Person></Person>
			</header>
		</div>
	);
};

const Person = () => {
	const personStyle = {
		border: '4px solid yellow',
		borderRadius: '10px',
		margin: '10px',
		padding: '10px',
		backgroundColor: 'cornflowerblue',
		boxShadow: '5px 5px 10px tomato',
	};
	return (
		<div style={personStyle}>
			<h2>Name : Mohammad Faruque</h2>
			<h4>Hero of the year</h4>
		</div>
	);
};

export default App;