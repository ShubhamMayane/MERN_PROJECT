import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";

function Updateuserform()
{   
    const {id}=useParams(); //to access path parameter i.e. id
    console.log(id);

    //defining a state variable to store entered data
    const [Name,setName]=React.useState("");
    const [Email,setEmail]=React.useState("");
    const [Age,setAge]=React.useState("");

    const navigate=useNavigate();

  

        const myFunction = async () => {
            let result= await axios.get("http://localhost:5000/getUser/"+id);
            console.log(result.data);
            setName(result.data.name);
            setEmail(result.data.email);
            setAge(result.data.age);
        };
        
        React.useEffect(() => {
            myFunction();
        },[]);
    

        


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
    
            
    
            let dataToUpdate={
                name:Name,
                email:Email,
                age:Age
            }
            console.log(dataToUpdate);
    
            //axios vaprun post request karayachi aahe
            try{
    
                let result= await axios.put("http://localhost:5000/updateUser/"+id,dataToUpdate);
                console.log(result);
                navigate("/");
    
    
            }catch(err)
            {
                console.log(err)
            }
          
            
         }
    


    return(
        <div>
        <h1>Update User Form</h1>
            {/* 
                //simple form without any css
            <form onSubmit={handleOnSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={Name} onChange={handleOnNameChanged}/>

                    <br />

                    <label>Email</label>
                    <input type="text" name="email" value={Email} onChange={handleOnEmailChanged}/>

                    <br />

                    <label>Age</label>
                    <input type="text" name="age" value={Age} onChange={handleOnAgeChanged}/>

                    <br />

                    <button className="btn btn-success" type="submit">Submit</button>

        </form> */}

        <form onSubmit={handleOnSubmit} >
                <div class="form-group row mb-3">
                    <label class="col-sm-6 col-form-label">Name :</label>
                    <div class="col-sm-6">
                    <input type="text"class="form-control" name="name" value={Name} onChange={handleOnNameChanged} />
                    </div>
                </div>
                <div class="form-group row mb-3">
                    <label for="inputPassword" class="col-sm-6 col-form-label">Email :</label>
                    <div class="col-sm-6">
                    <input type="text" class="form-control" name="email" value={Email} onChange={handleOnEmailChanged} />
                    </div>
                </div>

                <div class="form-group row mb-3">
                    <label for="inputPassword" class="col-sm-6 col-form-label">Age :</label>
                    <div class="col-sm-6">
                    <input type="text" class="form-control" name="age" value={Age} onChange={handleOnAgeChanged} />
                    </div>
                </div>
                <br />

                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-6 col-form-label"></label>
                    <div class="col-sm-6 btnDiv">
                    <button className="btn btn-success" type="submit">Submit</button>
                    </div>
                </div>

               
                </form>


    </div>
    )
}

export default Updateuserform