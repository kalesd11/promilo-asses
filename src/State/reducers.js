const initialState = {
    data: [],
    loading: false,
    error: null,
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_REQUEST':
        return { ...state, loading: true, error: null };
  
      case 'LOGIN_SUCCESS':
        // console.log(action.payload);
        // localStorage.setItem('access_token',JSON.stringify(action.payload.response.access_token))
        return { ...state, loading: false, data: action.payload };
  
      case 'LOGIN_FAILURE':
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
  export default dataReducer;
  