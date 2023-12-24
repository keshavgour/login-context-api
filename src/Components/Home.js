import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function Home(){
    const { username } = useContext(AuthContext)
    return(
        <div>
            <h1>Hello {username}</h1>
        </div>
    )
}

export default Home;