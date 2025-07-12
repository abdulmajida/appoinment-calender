import { useState,useEffect,} from "react";

const AppointmentsModal = ({ date, onClose, onSave, existingAppointments = [] }) => {

    const [patient, setPatient] = useState('');
    const [doctor, setDoctor] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(!patient||!doctor||!time)return;

        const newAppointment={patient,doctor,time};
        onSave(newAppointment);
    };
    return(<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <form className="bg-white text-black p-6 rounded-lg shadow-md w-full max-w-sm space-y-4"
              onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold text-center">
                {date ? `Appointment-${date.toDateString()}`:'AddAppointment'}
            </h2>
            <div>
                <label className="block mb-1">Patient</label>
                <input className="w-full border px-3 py-2 rounded"
                     type="text" value={patient} onChange={(e)=>setPatient(e.target.value)}/>
            </div>
            <div>
                <label className="block mb-1">Doctor</label>
                <input className="w-full border px-3 py-2 rounded"
                     type="text" value={doctor} onChange={(e)=>setDoctor(e.target.value)}/>
            </div>
            <div>
                <label className="block mb-1">Time</label>
                <input className="w-full border px-3 py-2 rounded"
                     type="time" value={time} onChange={(e)=>setTime(e.target.value)}/>
            </div>
            <div className="flex justify-end space-x-2 mt-4">
                <button className="px-4 py-2 bg-gray-300 rounded"
                        type="button" onClick={onClose} >
                    cancel
                    </button>
                <button  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                       type="submit">save</button>    
            </div>
        </form>
    </div>

    );


};

export default AppointmentsModal;