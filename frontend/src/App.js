import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Add } from "./Add";
import { Update } from "./Update";
import { Books } from "./Books";
import "./style.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/update/:id" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
