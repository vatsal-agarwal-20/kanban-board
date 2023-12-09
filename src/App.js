import { React, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './api/apiData';
import Board from './components/Board';

function App() {

  const dispatch = useDispatch();
  const { tickets } = useSelector((state) => state.dataSlice);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return tickets ? (
    <div className='App'>
      <Navbar />
      <Board />
    </div>
  ) : (
    console.error("Something went wrong")
  );
}

export default App;
