'use client';
import axios from "axios";
import React,{useEffect,useState} from "react";
function UserList(){
    const [users,setUsers] = useState("");
    useEffect(async()=>{
        
        const getdata = async()=>{
            data = await axios.get('/api/product/120')
            console.log(data.data)
            setUsers(data.data.id)
        }
        await getdata();
    },[]);
    return (<div>data {users} </div>)
}

export default UserList;