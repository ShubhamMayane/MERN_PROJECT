
import React from "react";

//importing a child components of app component
import Adduserform from "./AddUserForm";
import Updateuserform from "./UpdateUserForm";
import Userdetails from "./UserDetails";




import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//importing userdefined css
import "./Css/app.css"

function App()
{

    return (

        <div className="center">
            <h1>MERN CRUD APPLICAITON</h1>
            <br />
          
                <BrowserRouter>
                    <Routes>
                            <Route path="/" element={ <Userdetails />}></Route>
                            <Route path="/addUser" element={ <Adduserform />}></Route>
                            <Route path="/updateUser/:id" element={ <Updateuserform />}></Route>

                    </Routes>

                </BrowserRouter>


        </div>

    )
}

export default App;