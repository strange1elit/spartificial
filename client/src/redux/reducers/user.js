export const users=(state={
  isLoading:true,
  errmess:null,
  success:null,
  current:null,
  message:null
},action)=>{
  switch(action.type){
    case 'ANY_ERROR':
      return {...state, isLoading: false, errmess: action.payload};
    case 'USER_LOADING':
      return {...state, isLoading: true, errmess: null};
    case 'GET_USER':
      return {...state, isLoading:false,errmess:null,current:action.payload}
    case 'SIGNUP':
      return {...state, isLoading:false,errmess:null,success:action.payload}
    case 'LOGIN':
      return {...state, isLoading:false,errmess:null,success:action.payload}

    case 'LOGOUT':
      return {...state, isLoading:false,errmess:null,current:null}
    case 'CHANGE_PASSWORD':
      return {...state, isLoading: false, errmess: null, message: action.payload};
    default:
      return state
  }
}
