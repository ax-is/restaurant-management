import { useState } from "react";
import RegisterRestaurant from "./RegisterRestaurant";

function RegisterRestaurantFirst() {
    const [display, setDisplay] = useState(false);
    const onClose=()=>{
        setDisplay(false);
    }
    return (
        <div className="register-rest-first">
            <h1>Register A Restaurant First!</h1>
            <button onClick={() => setDisplay(true)} className="register-rest-button">Register Restaurant</button>
            {display ? <RegisterRestaurant onClose={onClose} /> : <></>}
        </div>
    )
}
export default RegisterRestaurantFirst;