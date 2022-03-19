import {createContext, useReducer} from 'react'

const intialState = {
    personal: {
        name: '',
        phone: '',
        email: '',
        website: '',
    }

}

const store = createContext(intialState);

const {Provider} = store;

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'SET_PERSONAL_DATA': 
                return {...state, personal: action.payload};
            default:
                return state;
        }
    }, intialState)

    return <Provider value={{state, dispatch}}> {children} </Provider>
}

export {store, StateProvider}