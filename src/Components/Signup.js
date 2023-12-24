import { useState, useEffect } from "react";
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


function Signup() {

    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    //     fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    //   .then(response => response.json())
    //   .then(json => setData(json))
    }, [])

 return(
    <TableContainer>
       <Table>
        <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
         
             {data.map((user) => {
                return <TableRow>
                     <TableCell>{user.id}</TableCell>
                     <TableCell>{user.name}</TableCell>
                     <TableCell>{user.email}</TableCell>
                </TableRow>
 })}   
       
          </TableBody>
          </Table>

          </TableContainer>
    )
}

export default Signup;