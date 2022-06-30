// import { useEffect } from "react"
import { useLocalStorage } from "./useLocalStorage";

export const User = ({name, email, edadCustomer}) => {

    const [showEmail, setShowEmail] = useLocalStorage("showLocal", false);
    const handleEmail = () => setShowEmail(!showEmail)

    // useEffect(

    //     ()=> {

    //         if(showEmail) {
    //             alert("Esta mostrando correo...")
    //         }
    //         return
    //     }
    // ,[showEmail])

    return (
        <li>
            {name}: {edadCustomer}
            <button onClick={handleEmail}>Mostrar email</button>
            {showEmail && <div>{email}</div>}
        </li>
    )
}
