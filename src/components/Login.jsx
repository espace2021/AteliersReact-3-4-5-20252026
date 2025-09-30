import { useState } from "react";
import Swal from 'sweetalert2'
  
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification des identifiants
    if (username === "user" && password === "password") {
       Swal.fire({
        icon: "success",
        text: "Connection made successfully"
       });
    }
     else {
       Swal.fire({
        icon: "error",
        title: "Connection Error",
        text: "Wrong credentials!"
      });
    }
  };

  return (
   <div>
    <br />
    <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="login">Login</label>
    
                <input 
                    className="form-control"
                    type="text" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} 
                />
            </div>
    
           <div className="form-group">
            <label htmlFor="password">Password</label>
             
                <input 
                    className="form-control" 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
        
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      
         
    </form>
</div>
  );
}

export default Login;

