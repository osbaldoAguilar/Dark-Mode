import { useContext, useState, useRef } from 'react'
import { Form } from 'semantic-ui-react'
import SearchCategoryLayout from 'semantic-ui-react/dist/commonjs/modules/Search/SearchCategoryLayout';
import {store} from './DataStore'
import inputHandler from './utils/InputHandler'

function Personal({formSection}) {
    const gs = useContext(store)
    const {dispatch} = gs
    const [name, phone, email, website] = useRef()
    const handleInput = ( e ) => {
        // console.log(e);/
        switch (e.target.id) {
            case 'name':
                name = e.target.value
                console.log('name', name)
                break;
            case 'phone':
                phone = e.target.value
                console.log('phone', phone);
                break;
            case 'email':
                email = e.target.value
                console.log('email' ,email);
                break;
            case 'website':
                website = e.target.value
                console.log('website', website);
                break;
            default:
                break;
            }
        }        
    const handleSubmit = () => {
        const personal = {
            name,
            phone,
            email,
            website
        }
        
        dispatch({type: 'SET_PERSONAL_DATA', payload: personal})
    }

    console.log('gs: ', gs);
  return (
    <Form.Field>
        <p>Page {formSection + 1}</p>
        <label htmlFor="name">Name:
            <input type="text" name="Name" id="name" placeholder='Name' onChange={(e) => handleInput(e)}/>
        </label>
        <label htmlFor="Phone">Phone: 
            <input type="tel" name="Phone" id="phone" onChange={(e) => handleInput(e)}/>
        </label>
        <label htmlFor="Email">Email: 
            <input type="email" name="Email" id="email" onChange={(e) => handleInput(e)}/>
        </label>
        <label htmlFor="Website">Website: 
            <input type="text" name="Website" id="website" onChange={(e) => handleInput(e)}/>
        </label>
        <button type='button' onClick={handleSubmit}>Save Answers</button>
    </Form.Field>
  )
}

export default Personal