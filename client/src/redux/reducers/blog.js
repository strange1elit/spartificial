export const blogs=(state={
  isLoading:true,
  errmess:null,
  message:null,
  blogs:[],
  blog:null,
},action)=>{
  switch(action.type){
    case 'LOADING':
      return {...state, isLoading:true}
    case 'BLOG_FAILED':
      return {...state, isLoading:false,errmess:action.payload}
    case 'GET_BLOGS':
      return {...state, isLoading:false, errmess:null, message:null, blogs:action.payload, blog:null}
    case 'CREATE_BLOG':
      return {...state, blog:action.payload}
    default:
      return state;
  }
}