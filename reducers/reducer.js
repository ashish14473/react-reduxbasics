const iState={
  name:"ramesh",
  wishes :['eat','code']
}

const reducer=(state=iState,action)=>
{
  if(action.type=='CHANGE_NAME'){
    return{
      ...state,
      name : action.payload
    }
  }

  return iState;
}

export default reducer;