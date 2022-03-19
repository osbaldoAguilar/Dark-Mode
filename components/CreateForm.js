import { Form, Button } from "semantic-ui-react";
import { useState } from 'react'
import Personal from "./Personal";

function CreateForm() {
    const [formSection, setFormSection] = useState(0);
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
        <Form>
        {formSection === 0 ? <Personal formSection={formSection}/> : null }
        {formSection === 1 ? <Form.Field> <h1> Page {formSection + 1}</h1></Form.Field> : null }
        {formSection === 2 ? <Form.Field> <h1> Page {formSection + 1}</h1></Form.Field> : null }
        {formSection === 3 ? <Form.Field> <h1> Page {formSection + 1}</h1></Form.Field> : null }
        {formSection === 4 ? <Form.Field> <h1> Page {formSection + 1}</h1></Form.Field> : null }
        {formSection !== 0 && <Button onClick={()=> handlePageChange(-1)}>BACK</Button>}
        {formSection !== 4 && <Button onClick={()=> handlePageChange(1)}>NEXT</Button> }
        </Form>
      </section>
  )
}

export default CreateForm