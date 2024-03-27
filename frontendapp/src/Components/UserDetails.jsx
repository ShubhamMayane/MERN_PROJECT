import axios from "axios";
import React from "react";

import {Link} from "react-router-dom"

//importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function Userdetails()
{

    let [users,setUsers]=React.useState([
        {
            name:"shubham",
            email:"shubham@gmail.com",
            age:25
        }
    ]);

  

    const myFunction = async () => {
        let result= await axios.get("http://localhost:5000/getAllUsers");
        console.log(result.data);
        setUsers(result.data);
        console.log(users);
    };
    
    React.useEffect(() => {
        myFunction();
    },[]);



    async function deleteUser(id)
    {   
        let result=await axios.delete("http://localhost:5000/deleteUser/"+id);
        console.log(result);
        window.location.reload();//to refresh the page or to rerender userDetails component




    }


    return(
        <div>

            <Link to="/addUser" className="btn btn-success">Add user</Link>
           
            
            
            <table className="table mt-3">

                <thead>
                    <tr class="table-info">
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                  
                </thead>
                <tbody>

                    {
                        users.map((element)=>{
                            
                            return(
                            <tr key={element._id}> 
                                <td>{element.name}</td>
                                <td>{element.email}</td>
                                <td>{element.age}</td>
                                <td>
                                    <Link to={"/updateUser/"+element._id} className="btn btn-success">Update</Link>
                                    <button className="btn btn-danger" onClick={()=>{deleteUser(element._id)}}>Delete</button>
                                </td>

                            </tr>
                            );


                        })
                    
                    }

                </tbody>


            </table>


        </div>
    )
}

export default Userdetails;