import { BrowserRouter } from 'react-router-dom';
import MyRoutes from '../components/MyRoutes';

import '../css/App.css';

const App = function App() {

	return (
		<div id="app">
			<main className="SiteBox">
				<BrowserRouter>
					<MyRoutes />
				</BrowserRouter>
			</main>
		</div>
	);
};

export default App;
