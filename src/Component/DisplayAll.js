import { useSelector,useDispatch } from "react-redux"
import MaterialTable from "@material-table/core"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField,Grid } from "@mui/material";

export default function DisplayAll()
{   
    const [id,setId]=useState('')
    const [name,setName]=useState('')
    const [city,setCity]=useState('')
    const [open,setOpen]=useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [refresh,setRefresh]=useState(false)
    const employee=useSelector((state)=>state.employeeData)
    var emp = Object.values(employee)
    console.log("VALUES",emp)

    const handleDelete=(rowData)=>{
        dispatch({type:"DEL_EMP",payload:[rowData.id]})
        setRefresh(!refresh)
    }

    const handleClose=()=>{
        setOpen(false)
    }

    const handleEdit=(rowData)=>{
        setId(rowData.id)
        setName(rowData.name)
        setCity(rowData.city)
        setOpen(true)
    }

    const handleEditData=()=>{
        var body={id:id,name:name,city:city}
        dispatch({type:"EDIT_EMPLOYEE",payload:[id,body]})
        setRefresh(!refresh)
    }

    const showDialog=()=>{
        return(<div>
            <Dialog open={open}>
                <DialogTitle>
                    Edit Employee
                </DialogTitle>
                <DialogContent>
                <div style={{display:'flex',padding:20,justifyContent:'center',alignItems:'center'}}>
                    <div style={{display:'flex',padding:20,justifyContent:'center',alignItems:'center'}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField value={id} onChange={(e)=>setId(e.target.value)} fullWidth label="Employee Id"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField value={name} onChange={(e)=>setName(e.target.value)} fullWidth label="Name"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField value={city} onChange={(e)=>setCity(e.target.value)} fullWidth label="City"/>
                            </Grid>
                            <Grid item xs={6}>
                                <Button onClick={handleEditData} fullWidth>Submit</Button>
                            </Grid>
                            
                        </Grid>
                    </div>
                </div>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>)
    }

    const showAllEmployee=()=>{
            return (
              <MaterialTable
                title="Simple Action Preview"
                columns={[
                  { title: 'ID', field: 'id' },
                  { title: 'Name', field: 'name' },
                  { title: 'City', field: 'city' },
                 
                ]}
                data={emp}
                actions={[
                  {
                    icon: 'delete',
                    tooltip: 'Delete Employee',
                    onClick: (event, rowData) => handleDelete(rowData)
                  },
                  {
                    icon: 'edit',
                    tooltip: 'Edit Employee',
                    onClick: (event, rowData) => handleEdit(rowData)
                  },
                  {
                    icon: 'add',
                    tooltip: 'Add Employee',
                    isFreeAction: true,
                    onClick: (event) => navigate('/employeeinterface')
                  }
                ]}
              />
            )
    }

return(<div style={{display:'flex',padding:20,justifyContent:'center',alignItems:'center'}}>
    <div style={{display:'flex',padding:20,justifyContent:'center',alignItems:'center'}}>
        {showAllEmployee()} 

        {showDialog()}  
    </div>

</div>)
}