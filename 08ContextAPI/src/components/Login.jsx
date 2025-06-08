import { useContext, useState } from "react"
import UserContext from "../Context/UserContext";

function Login(){
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");

    const {setUser}=useContext(UserContext);

    const handleSubmit =(e)=>{
        e.preventDefault();
        setUser(username);
    }

    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center">
                <div className="w-fit p-10 flex flex-col items-center gap-4 bg-blue-300">
                    <h1 className="text-xl">User Credentials</h1>
                    <div>
                        Username :{" "}
                        <input 
                            type="email" 
                            value={username}
                            placeholder="Enter Email/Username"
                            className="p-2 rounded-lg outline-1"
                            onChange={(e)=>{setUsername(e.target.value)}}
                        />
                    </div>
                    <div>
                        Password :{" "} 
                        <input 
                            type="password" 
                            value={password}
                            placeholder="Enter Password"
                            className="p-2 rounded-lg outline-1"
                            onChange={(e)=>{setPassword(e.target.value)}}
                        />
                    </div>
                    <button type="submit" 
                        className="outline-1 bg-orange-500 py-1 px-4 rounded cursor-pointer"
                        onClick={handleSubmit}
                        >Submit</button>
                </div>
            </div>
        </>
    )
}

export default Login