'use client';
import axios from "axios";
import React,{useEffect,useState} from "react";
function UserList(){
    const [users,setUsers] = useState("");
    useEffect(()=>{

          axios.get('/api/product/120').then((response)=>{setUsers(response.data.data.id)})

    },[]);
    return (<div>data {users} </div>)
}

export default UserList;