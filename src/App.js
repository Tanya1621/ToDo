import logo from './logo.svg';
import './App.css';
import {AppHeader} from "./components/AppHeader/AppHeader";
import ToDoAreas from "./components/ToDoAreas/ToDoAreas";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

function App() {
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
