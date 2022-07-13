import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import CounterOne from './components/counter/CounterOne'
export default function App() {
  return (
    <Provider store={store}>
      <div>
        <CounterOne />
      </div>
    </Provider>
  );
}
