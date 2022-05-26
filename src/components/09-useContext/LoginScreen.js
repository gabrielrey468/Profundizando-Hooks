import React from "react";
import { UserContext } from "./UserContext";
import { useContext } from "react";

export const LoginScreen = () => {

    const {setUser} = useContext(UserContext)

    return(

        <div>

            <h1>LoginScreen</h1>
            <hr/>

            <button className="btn btn-primary"
                    onClick={ () => setUser({
                        id: 1234,
                        name: 'Gabriel',
                        email: 'Gabrielrey@gmail.com'
                    }) }
            >
                Login
            </button>


        </div>

    )
}