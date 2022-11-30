import logo from './logo.svg';
import './App.css';
import {AppHeader} from "./components/AppHeader/AppHeader";
import ToDoAreas from "./components/ToDoAreas/ToDoAreas";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {initActions} from "./services/slice";

function App() {
  const dispatch = useDispatch();
  const items = useSelector(store => store.todo.actions);
  useEffect(() => {
    fetch('http://localhost:8000/', {
      method: 'GET',
    }).then(res => res.json())
        .then (res => {
          console.log(res);
          dispatch(initActions(res))
        })
    .catch(err => console.log(`this is error ${err}`))
  }, [items])
  return (
    <div className="App">
      <AppHeader></AppHeader>
        <DndProvider backend={HTML5Backend}>
        <ToDoAreas/>
        </DndProvider>
    </div>
  );
}

export default App;
