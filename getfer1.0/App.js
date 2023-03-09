import Navigation from './Navigation';
import { store } from './src/store'; // Importa el store de Redux
import { Provider } from 'react-redux'; // Importa el componente Provider de React-Redux

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

