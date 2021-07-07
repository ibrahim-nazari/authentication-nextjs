
import {createContext,useReducer,useContext} from "react"


const CTX=createContext({});
const initState={};
const reducer=(state,action)=>{
    switch(action.type){
        case "LOGIN":
            return {...state,user:action.payload};
        case "LOGOUT":
            return {...state,user:null};
        case "ADD_POSTS":
            return {...state,posts:action.payload}
            
    }
}
const Store=({children})=>{
    const [state,dispatch]=useReducer(reducer,initState);
    return(<CTX.Provider value={{state,dispatch}}>
        {children}
    </CTX.Provider>)
    
}


export default Store;