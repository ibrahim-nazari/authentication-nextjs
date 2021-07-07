
import {createContext,useReducer,useContext} from "react"


const CTX=createContext({user:null,posts:null});
const initState={};
const reducer=(state,action)=>{
    switch(action.type){
        case "LOGIN":
            console.log("user reducer",action.payload);
            return {...state,["user"]:action.payload};
        case "LOGOUT":
            return {...state,["user"]:null};
        case "ADD_POSTS":
            return {...state,["posts"]:action.payload}
            
    }
}
const Store=({children})=>{
    const [state,dispatch]=useReducer(reducer,initState);
    
    return(<CTX.Provider value={{state,dispatch}}>
        {children}
    </CTX.Provider>)
    
}

export const useContextHook = ()=>useContext(CTX)
export default Store;