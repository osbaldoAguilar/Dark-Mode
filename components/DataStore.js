import {createContext, useReducer, useRef} from 'react'

const intialState = {
    personal: {
        name: '',
        phone: '',
        email: '',
        website: '',
    },
    summary: '',
    experience: {

    },
    skills: {

    },
    certs: {
        
    }
}

const store = createContext(intialState);

const {Provider} = store;

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'SET_PERSONAL_DATA': 
                return {...state, personal: action.payload};
            case 'SET_SUMMARY_DATA': 
                return {...state, summary: action.payload};
            case 'SET_XP_DATA': 
                return {...state, experience: action.payload};
            case 'SET_SKILLS_DATA': 
                return {...state, skills: action.payload};
            case 'SET_CERTIFICATES_DATA':
                return {...state, certs: action.payload}
            default:
                return state;
        }
    }, intialState)

    return <Provider value={{state, dispatch}}> {children} </Provider>
}

export {store, StateProvider}