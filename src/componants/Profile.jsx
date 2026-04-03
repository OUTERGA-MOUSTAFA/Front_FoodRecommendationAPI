import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Profile(){
    const {user} = useContext(AppContext);
    return <>
        <h2>Profile de {user.name}</h2>
        <p>Email: {user.email}</p>
    </>
}