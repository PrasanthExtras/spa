import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { Routes,Route } from 'react-router-dom';
import { store } from './store/store';
import { Provider } from 'react-redux';
import CarList from './components/Home/CarList';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/list' element={<CarList/>}></Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
