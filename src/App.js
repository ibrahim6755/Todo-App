import './App.css';
import { useDispatch , useSelector } from 'react-redux';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';

function App() {

  const {counter} = useSelector(state=>state)
  const dispatch = useDispatch()


  return (
    <div className='w-50 mx-auto'>
      <Navbar/>
    <TodoForm/>
    <TodoList/>
    </div>
  );
}

export default App;
