import React from "react";


import axios from "axios";

import {useNavigate } from "react-router-dom";

import "./Css/addUserForm.css";


function Adduserform()
{
    //creatig  a state varaible to store the data entered in each input tag

    const [Name,setName]=React.useState("");
    const [Email,setEmail]=React.useState("");
    const [Age,setAge]=React.useState("");

    const navigate=useNavigate();


    function handleOnNameChanged(event)
    {
        let value=event.target.value;
        console.log(value);
        setName(value);
    }

    function handleOnEmailChanged(event)
    {
        let value=event.target.value;
        console.log(value);
        setEmail(value);
    }

    function handleOnAgeChanged(event)
    {
        let value=event.target.value;
        console.log(value);
        setAge(value);
    }



    async function handleOnSubmit(event)
    {
        console.log("inside  handleOnSubmit ");
        event.preventDefault();

        

        let dataToInsert={
            name:Name,
            email:Email,
            age:Age
        }
        console.log(dataToInsert);

        //axios vaprun post request karayachi aahe
        try{

            let result= await axios.post("http://localhost:5000/createUser",dataToInsert);
            console.log(result);
            navigate("/");


        }catch(err)
        {
            console.log(err)
        }
      
        
     }



    return(
        <div className="mainDiv">
            <h2>Add User Form</h2>
                {/* <form onSubmit={handleOnSubmit}>
                        <label>Name</label>
                        <input type="text" name="name" onChange={handleOnNameChanged} />

                        <br />

                        <label>Email</label>
                        <input type="text" name="email" onChange={handleOnEmailChanged}/>

                        <br />

                        <label>Age</label>
                        <input type="text" name="age" onChange={handleOnAgeChanged} />

                        <br />

                        <button className="btn btn-success" type="submit">Submit</button>

                </form> */}

                <form onSubmit={handleOnSubmit} >
                <div class="form-group row mb-3">
                    <label class="col-sm-6 col-form-label">Name :</label>
                    <div class="col-sm-6">
                    <input type="text"class="form-control" name="name" onChange={handleOnNameChanged} />
                    </div>
                </div>
                <div class="form-group row mb-3">
                    <label for="inputPassword" class="col-sm-6 col-form-label">Email :</label>
                    <div class="col-sm-6">
                    <input type="text" class="form-control" name="email" onChange={handleOnEmailChanged} />
                    </div>
                </div>

                <div class="form-group row mb-3">
                    <label for="inputPassword" class="col-sm-6 col-form-label">Age :</label>
                    <div class="col-sm-6">
                    <input type="text" class="form-control" name="age" onChange={handleOnAgeChanged} />
                    </div>
                </div>
                <br />

                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-6 col-form-label"></label>
                    <div class="col-sm-6 btnDiv">
                    <button className="btn btn-success  " type="submit">Submit</button>
                    </div>
                </div>

               
                </form>


        </div>
    )
}

export default Adduserform;