import { useEffect, useState } from "react";
import Add_user from "./add_user";
import axios from "axios";
const View_user = () => {
    const [user, setUser] = useState([])
    function getUser() {
        axios.get('http://localhost:5001/getUser').then((result) => {
            console.log(result.data.users)
            setUser(result.data.users)
        })
    }
   
    

    useEffect(() => {
        getUser()
    }, [])
    return (

        <>
            <Add_user />
            <div className="view_User">
            <h1>View user</h1>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Delete</th>
                    <th>Update</th>

                </tr>
                {
                    user.map((item,index) => (
                        <tr>
                            <td>{index} </td>
                            <td>{item.username} </td>
                            <td>{item.email} </td>
                            <td>{item.password} </td>
                            <td><button>Delete</button></td>
                            <td><button>Update</button></td>
                        </tr>
                    ))
                }
            </table>
            </div>
        </>
    )
}

export default View_user;