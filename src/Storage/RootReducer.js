const initialState={
	employeeData : {},
}

export default function RootReducer(state=initialState,action)
{   
     switch(action.type)
     {
        case "ADD_EMPLOYEE":
            state.employeeData[action.payload[0]] = action.payload[1]
            console.log(state.employeeData)
            return  {employeeData : state.employeeData}
            break	
        case "DEL_EMP":
            delete state.employeeData[action.payload[0]]
            return {employeeData:state.employeeData}
            break
        case "EDIT_EMPLOYEE":
            state.employeeData[action.payload[0]] = action.payload[1]
            console.log(state.employeeData)
            return {employeeData:state.employeeData}
            break	
        default:
            return {employeeData:state.employeeData}
    }
}
