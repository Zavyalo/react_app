import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {PageSelectSet} from "./pages/pageSelectSet/PageSelectSet";
import {PageViewSet} from "./pages/pageViewSet/PageViewSet";
import {PageCreateSet} from "./pages/pageCreateSet/PageCreateSet";
import { FormCreateSet } from "./components/formCreateSet/FormCreateSet";
import { FormCreateCard } from './components/FormCreateCard/FormCreateCard';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageSelectSet/>} />
        <Route path="/set/:id" element={<PageViewSet/>} />
        <Route path="/admin" element={<PageCreateSet/>} >
          <Route path='createset' element={<FormCreateSet/>}/>
          <Route path='createcard' element={<FormCreateCard />}/>
        </Route>
        <Route path="*" element={<PageSelectSet/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
