import { useState } from "react";
import { TextField,Button,Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function EmployeeInterface(){
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [id,setId]=useState('')
    const [name,setName]=useState('')
    const [city,setCity]=useState('')

    const handleSubmit=()=>{
        var body={id:id,name:name,city:city}
        dispatch({type:'ADD_EMPLOYEE',payload:[id,body]})
    }

    return(
        <div style={{display:'flex',padding:20,justifyContent:'center',alignItems:'center'}}>
            <div style={{display:'flex',padding:20,justifyContent:'center',alignItems:'center'}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField onChange={(e)=>setId(e.target.value)} fullWidth label="Employee Id"/>
                </Grid>
                <Grid item xs={12}>
                    <TextField onChange={(e)=>setName(e.target.value)} fullWidth label="Name"/>
                </Grid>
                <Grid item xs={12}>
                    <TextField onChange={(e)=>setCity(e.target.value)} fullWidth label="City"/>
                </Grid>
                <Grid item xs={6}>
                    <Button onClick={handleSubmit} fullWidth>Submit</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button onClick={()=>navigate('/displayall')} fullWidth>Display</Button>
                </Grid>
            </Grid>
            </div>
        </div>
    )
}