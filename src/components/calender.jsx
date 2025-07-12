import { useState } from "react";
import {startOfMonth,endOfWeek,startOfWeek,addDays,format,isSameMonth} from 'date-fns'

// const CalendarPage =()=>{
//     return(
//     <div className="min-h-screen flex items-center justify-center bg-green-300">
//         <h1 className="text-3xl font-bold">Welcome to calendar page</h1>
//     </div>
//     ); 
// };

// above one was created as place holder if the login was succecssfull.

//setting usestate.
const CalendarPage=()=>{
    const [currentMonth, setcurrentMonth] = useState(new Date());
    const [selectedDate, setselectedDate] = useState(new Date());

 // shows current month

 const renderHeader= ()=>(
   // prev and next button
   <div className="flex justify-between items-center mb-4">
        <button className="text-white bg-black px-3 py-1 rounded"
         onClick={()=>setcurrentMonth(prev=> addDays(prev, -30))}>Prev</button>
        <h2 className="text-x1 font-bold text-center text-white">
            {format(currentMonth,'MMMM yyyy')}
        </h2>
        <button className="text-white bg-black px-3 py-1 rounded"
        onClick={()=>setcurrentMonth(prev=> addDays(prev, 30))}>Next</button>
    </div>
   );
 //to render weekdays
   const renderDays =()=>{
    const days =['sun','mon','tue','wed','thu','fri','sat'];
    return(
        <div className="grid grid-cols-7 text-center text-white font-semibold border-b pb-2 ">
            {days.map((day,index)=>(<div key={index} > {day}</div>))}
        </div>
    );
   };

 
    
return(
    <div className="min-h-screen bg-gray-800 p-6 text-white">
        {renderHeader()}
        {renderDays()}
        </div>
);
};



export default CalendarPage;    