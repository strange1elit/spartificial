export const users=(state={
  isLoading:true,
  errmess:null,
  users:[],
  success:[],
  current:null
},action)=>{
  switch(action.type){
    case 'ANY_ERROR':
      return {...state, isLoading: false, errmess: action.payload};
    case 'USER_LOADING':
      return {...state, isLoading: true, errmess: null, users: action.payload};
    case 'GET_USERS_LIST':
      return {...state,isLoading:false,errmess:null,users:action.payload}

    case 'SEND_OTP':
      return {...state,isLoading:false,errmess:null,success:action.payload.success}
    
    case 'VERIFY_OTP':
      return {...state,isLoading:false,errmess:null,current:action.payload}
    case 'SIGNUP':
      return {...state,isLoading:false,errmess:null,current:action.payload}

    case 'LOGIN':
      return {...state,isLoading:false,errmess:null,current:action.payload}

    case 'LOGOUT':
      return {...state, isLoading:false,errmess:null,current:null}
    default:
      return state
  }
}
