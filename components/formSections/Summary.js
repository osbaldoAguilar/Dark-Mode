import { useContext, useRef } from 'react'
import { Form } from 'semantic-ui-react'
import {store} from '../DataStore'

function Summary({formSection}) {
    const gs = useContext(store)
    const {dispatch} = gs
    const summaryRef = useRef()
    const handleInput = ( e ) => {
        summaryRef = e.target.value
    }        
    const handleSubmit = () => {        
        dispatch({type: 'SET_SUMMARY_DATA', payload: summaryRef})
    }
    console.log('gs: ', gs);
  return (
    <Form.Field>
        <p>Page {formSection + 1}</p>
        <label htmlFor="name">Summary:
            <textarea type="text" name="Summary" id="summary" placeholder='Summary' onChange={(e) => handleInput(e)}/>
        </label>
        <button type='button' onClick={handleSubmit}>Save Answer</button>
    </Form.Field>
  )
}

export default Summary