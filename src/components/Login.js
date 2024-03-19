import { useState } from "react";

const Login =()=> {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async() => {
        const payload = {
            email, 
            password
        }

        try{
        const data = await fetch("http://localhost:7100/user/login", {
            method : "POST", 
            headers : {
                "content-type" : "application/json",
            }, 
            body : JSON.stringify(payload)
        })

        const json = await data.json();
        console.log(json);
    }

        catch(error)
        {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+"-"+errorMessage);
         };
    }

    return (<div>
        <div >
            <img 
            className="absolute w-full h-full"
            src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <div className="w-3/12 absolute p-12 rounded-lg bg-black my-16 mx-auto right-0 left-0 text-white bg-opacity-75">
            <h1 className="font-bold text-3xl py-4">Sign In</h1>
            <input type="text" 
            placeholder="Enter Email Address"
            className="p-4 my-2 w-full bg-gray-700"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
            <input type="password" 
            placeholder="Enter Password" 
            className="p-4 my-2 w-full bg-gray-700"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            /> 
            <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
            <button 
            className="p-4 my-4 w-full rounded-lg bg-green-700"
            onClick={handleSubmit}
            >
            Submit
            </button>
            </div>
        </div>
    </div>)
}

export default Login;