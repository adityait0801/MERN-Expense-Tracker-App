import { useState } from "react";

const SignUp =() => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit =async() => {
        const payload = {
            name, 
            email, 
            password
        }
        
        try
        {
            const data = await("http://localhost:7100/signup", {
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
            console.log(error);
        }
    }

    return ( 
    <div>
        <div>
            <img
            className="absolute w-full h-full" 
            src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600"/>
        </div>
        <div className="w-3/12 absolute p-12 rounded-lg bg-black my-16 mx-auto right-0 left-0 text-white bg-opacity-75">
            <h1 className="font-bold text-3xl py-4">Sign Up</h1>
            <input type="name" 
            placeholder="Enter Full Name"
            className="p-4 my-2 w-full bg-gray-700"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            />
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
            <button 
            className="p-4 my-4 w-full rounded-lg bg-green-700"
            onClick={handleSubmit}
            >
            Submit
            </button>
        </div>
    </div>
)}

export default SignUp;