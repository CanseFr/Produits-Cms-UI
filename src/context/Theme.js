import {createContext, useContext, useReducer} from "react";

const ThemeContext = createContext()

const initialState= {
    primary: process.env.REACT_APP_PRIMARY,
    titreSite: process.env.REACT_APP_TITRE_SITE
}

function reducer(state, action){
    switch (action.type){
        case 'primary':
            return {...state, primary: action.payload}
        case 'titre-site':
            return {...state, titreSite: action.payload}
        default:
            throw new Error("Unknow action theme")
    }
}

function ThemeProvider({children}){

    const [{primary, titreSite}, dispatch] = useReducer(reducer, initialState)

    function setPrimary(color){
        dispatch({type: 'primary', payload: color})
    }

    function setCouleurTitreSite(color){
        dispatch({type: 'titre-site', payload: color})
    }


    return <ThemeContext.Provider value={{primary, setPrimary, titreSite, setCouleurTitreSite}}>{children}</ThemeContext.Provider>
}

function useTheme(){
    const context = useContext(ThemeContext)
    if (context === undefined) throw new Error("ThemeContext was user outside AuthProvider")
    return context
}


export {ThemeProvider, useTheme}