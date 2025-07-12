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
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Clinic staff login</h2>

                 {error && <p>{error}</p>}

                 <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>

                 <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>

                 <button type="submit">login</button>
            </form>
        </div>
    );
};

export default Login;