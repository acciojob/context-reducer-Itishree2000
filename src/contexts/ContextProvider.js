import React ,{ createContext,useContext,useState } from "react";

  const AppContext=createContext();
   
  //create custom hooks
  export const useAppContext=()=>{
    return useContext(AppContext);//to access the context value
  }

  export const ContextProvider=({children})=>{
     const[currentUser,setCurrentUser]=useState({name:"",isAuthenticated:false});
     const[list,setList]=useState([])
     const[inputValue,setInputValue]=useState("")
     
     //functions
     const logIn=(userName)=>{
       setCurrentUser({name:userName , isAuthenticated:true})
     }
     const signOut=()=>{
        setCurrentUser({name:"" , isAuthenticated:false})
     }
     const addItem = () => {
      if (inputValue.trim() !== '') {
        setList([...list, inputValue]);
        setInputValue("");  // Clear the input after adding an item
      }
    };
     const removeItem=(itemName)=>{
        const updatedList=list.filter((item)=>item!==itemName)
        setList(updatedList);
     }
     const clearList=()=>{
       setList([]);
     }
     return (
        <AppContext.Provider
          value={{
            currentUser,
            list,
            inputValue,
            setInputValue,
            logIn,
            signOut,
            addItem,
            removeItem,
            clearList,
          }}
        >
          {children}
        </AppContext.Provider>
      );
  }

 