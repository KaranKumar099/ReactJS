import { useContext } from "react"
import UserContext from "../Context/UserContext"

function Profile(){
    const {user}=useContext(UserContext);
    console.log(user);
    if(!user)   return <h1>"Input the empty fields!!"</h1>
    return (
        <h1>Welcome {user}</h1>
    )
}
export default Profile