
import { Routes,Route } from 'react-router-dom';
import Login from './components/login'
import CalendarPage from './components/calender';


import './App.css'

const App =()=>{

    return(
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/calendar' element={<CalendarPage/>}/>
    </Routes>

    );
};

export default App;
