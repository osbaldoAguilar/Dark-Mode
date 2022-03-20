import { Form, Button } from "semantic-ui-react";
import { useState, useContext } from 'react'
import Personal from "./Personal";
import Summary from "./Summary";
import Experience from "./Experience";
import Skills from "./Skills";
import Certificates from "./Certificates";
import { PrintBtn } from "./utils/Printing";
import {store} from './DataStore'
import ReadyForPrint from "./ReadyForPrint";

function CreateForm() {
    const [formSection, setFormSection] = useState(0);
    const gs = useContext(store)
    // console.log('gs in: ', gs.state.personal.name);
    const handlePageChange = (value) => {
        if( value === 1 ) {
            if( formSection > 4 ) {
                setFormSection(0)
            } else {
                setFormSection( formSection + 1 )
            }
        } else {
            if( formSection === 0 ) {
                setFormSection( 4 )
            } else {
                setFormSection( formSection - 1)
            }
        }
    }
  return (
      <section>
        <Form id='printMe'>
        {formSection === 0 ? <Personal formSection={formSection}/> : null }
        {formSection === 1 ? <Summary formSection={formSection}/> : null }
        {formSection === 2 ? <Experience formSection={formSection}/> : null }
        {formSection === 3 ? <Skills formSection={formSection}/> : null }
        {formSection === 4 ? <Certificates formSection={formSection}/> : null }
        {formSection === 5 ? <ReadyForPrint id='printMe' formSection={formSection}/> : null }
        {formSection !== 0 && <Button onClick={()=> handlePageChange(-1)}>BACK</Button>}
        {formSection !== 5 && <Button onClick={()=> handlePageChange(1)}>NEXT</Button> }
        </Form>
        {formSection === 5 && <PrintBtn yourName={gs.state.personal.name} id='printMe'/>}
      </section>
  )
}

export default CreateForm