import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AboutScreen } from "./AboutScreen";
import { LoginScreen } from "./LoginScreen"
import { HomeScreen } from "./HomeScreen"
import { NavBar } from "./NavBar"
//import { MainApp } from "./MainApp";


export const AppRouter = () => {
    return(

        <div>

            <NavBar />

           
                <Routes>

                    
                        <Route exact path="/" element={<HomeScreen />} />
                        <Route exact path="/about" element={<AboutScreen />} />
                        <Route exact path="/login" element={<LoginScreen />} />

                        <Route 
                            path="*"
                            element={<HomeScreen to="/" replace />}
                        />
                    
                </Routes>
            
        </div>

    )
}