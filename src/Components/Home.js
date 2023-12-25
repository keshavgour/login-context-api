import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function Home(){
   // const { username, email } = useContext(AuthContext)
   const {formData, setFormData}= useContext(AuthContext);
    return(
        <div>
            <h1>Hello, {formData.username}</h1>
           <h2>Email: {formData.email}</h2> 
        </div>
    )
}

export default Home;