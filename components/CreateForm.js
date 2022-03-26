import { Form, Button } from "semantic-ui-react";
import { useState, useContext } from 'react'
import Personal from "./formSections/Personal";
import Summary from "./formSections/Summary";
import Experience from "./formSections/Experience";
import Skills from "./formSections/Skills";
import Certificates from "./formSections/Certificates";
import { PrintBtn } from "./utils/Printing";
import {store} from './DataStore'
import ReadyForPrint from "./utils/formActions/ReadyForPrint";
import styles from '../styles/Form.module.scss'

function CreateForm() {
    const [formSection, setFormSection] = useState(0);
    const gs = useContext(store)
    const yourName = gs.state.personal.name
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
    const propsToPass = []
    const id = "printMe"
    if(yourName && id) {
        propsToPass.push(yourName)
        propsToPass.push(id)
    }
  return (
      <section>
        <Form id='printMe' className={styles.form}>
        {formSection === 0 ? <Personal formSection={formSection}/> : null }
        {formSection === 1 ? <Summary formSection={formSection}/> : null }
        {formSection === 2 ? <Experience formSection={formSection}/> : null }
        {formSection === 3 ? <Skills formSection={formSection}/> : null }
        {formSection === 4 ? <Certificates formSection={formSection}/> : null }
        {formSection === 5 ? <ReadyForPrint id='printMe' formSection={formSection}/> : null }
        {formSection !== 0 && formSection !== 5  && <Button className={styles.btn} onClick={()=> handlePageChange(-1)}>BACK</Button>}
        {formSection !== 5 && <Button className={styles.btn} onClick={()=> handlePageChange(1)}>NEXT</Button> }
        </Form>
        {formSection === 5 && <PrintBtn propsToPass={propsToPass}/>}
      </section>
  )
}

export default CreateForm