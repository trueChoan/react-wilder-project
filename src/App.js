import "./App.css";
import WilderList from "./components/WilderList";


function App() {
	return (
		<div >
			<header>
				<div className="container">
					<h1>Wilders Book</h1>
				</div>
			</header>
			<main className="container">
				<h2>Wilders</h2>
        <section className="card-row">

<WilderList />
</section>

			</main>
			<footer>
				<div className="container">
					<p>&copy; 2022 Wild Code School</p>
				</div>
			</footer>
		</div>
	);
}

export default App;
