import React from "react";
import GlobalContext from "./GlobalContex";

const ContextWrapper = ({ children }) => {
    return(
        <GlobalContext.Provider value={{roomId: 0}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default ContextWrapper;