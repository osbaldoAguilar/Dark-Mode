import { useContext, useState, useRef, useEffect } from 'react'
import { Form } from 'semantic-ui-react'
// import CreateInputs from './CreateInputs'
import {store} from '../DataStore'

function Skills({formSection}) {
    const gs = useContext(store)
    const {dispatch} = gs
    const [numInputs, setNumInputs] = useState(0)
    const summaryRef = useRef()
    const ans = useRef()
    let ansArray = []
    // let event = new KeyboardEvent("Tab",KeyboardEvent.key)
    const handleInput = async ( e, index ) => {
        console.log('index: '+ index);
        switch (e.target.id) {
            case "numsOfSkills":
                setTimeout(() => {setNumInputs(e.target.value)}, 1500)
                // CreateNumOfInputs(inputRef)
                break;
            case `xp${index+1}`:
                ans = e.target.value
                return ans
            default:
                break;
        }
        // summaryRef = e.target.value
    }

    const handleAssigment = async (e , index) => {
        await handleInput(e,index)
        ansArray.push(ans)
        // setTimeout(() => {ansArray.push(ans)}, 1000)
    }

    const handleSubmit = (e) => {    
        console.log('handleSubmit: ',ansArray);
        dispatch({type: 'SET_SKILLS_DATA', payload: ansArray})
    }

    const ListOfInputs = ( value ) => {
        while(value > 0) {
            if(value > 0 ){
                value = value - 1
                console.log('inside ListOfInpusts: ', [...Array(value)]);
                // let 
                return [...Array(value + 1)].map((key,index) => (
                    <li key={key}>
                        <label htmlFor="xp">
                            Skills {index + 1} 
                        </label>
                        <input type="text" name={`xp${index+1}`} id={`xp${index+1}`} onBlur={(e)=> handleAssigment(e, index)} />
                    </li>
                ))
            }
        }
        
    }

    console.log('gs: ', gs , 'ans: ', ans);
  return (
    <Form.Field>
        <p>Page {formSection + 1}</p>
        <label htmlFor="numsOfSkills">Enter number of skills you want to include</label>
        {numInputs === 0 && <input type="number" name="numsOfSkills" id="numsOfSkills" onChange={(e) => handleInput(e)}/>}
        {numInputs !== 0 && ListOfInputs(numInputs)}
        {console.log(ans)}
        {/* <label htmlFor="name">Summary:
            <input type="text" name="Summary" id="summary" placeholder='Summary' onChange={(e) => handleInput(e)}/>
        </label> */}
        <button type='button' onClick={(e) => handleSubmit(e)}>Save Answer</button>
    </Form.Field>
  )
}

export default Skills