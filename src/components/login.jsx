import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate=useNavigate();


    const handleSubmit =(e)=>{
        e.preventDefault();
        email=== 'email@1.com' && password === '12345'? navigate('/calendar')
        :setError('invalid email or password');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm space-y-4 ">
                <h2 className="text=2xl font-bold text-center">Clinic staff login</h2>

                 {error && <p className="text-rose-500 text-center text-sm">{error}</p>}

                 <input className="w-full px-4 py-2 rounded"
                        type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>

                 <input className="w-full px-4 py-2 rounded"
                        type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>

                 <button className="w-full bg-pink-500 text-white py-2 rounded hover:bg-blue-300"
                         type="submit">login</button>
            </form>
        </div>
    );
};

export default Login;