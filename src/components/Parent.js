import React from "react";
import Header from "./Header";
const Parent = (Component) => {
   const NewComponent = () => {
        return(
            <>
                 <Header />
                 <Component/> 
            </>
        )
   }
   return NewComponent
}

export default Parent