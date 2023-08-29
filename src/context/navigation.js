import { createContext, useState, useEffect } from "react";


const NavigationContext = createContext();

function NavigationProvider({children}) {
    const [ currentPath, SetcurrentPath] = useState(window.location.pathname);

    useEffect(()=> {
        const handler = ()=>{
            SetcurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate',handler);

        return () => {
            window.removeEventListener('popstate',handler);
        };
    }, []);

    const navigate = (to) => {
        window.history.pushState({}, '', to);
        SetcurrentPath(to);
    };


    return (  
    <NavigationContext.Provider value={{ currentPath, navigate}}>
        {children}
    </NavigationContext.Provider>
    );
}

export {NavigationProvider};
export default NavigationContext;