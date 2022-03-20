import React from 'react'

function CreateInputs({inputRef}) {
    console.log('inputRef: ',inputRef);
  return [...Array(inputRef)].map((i) => (
      <div key={i}>
        <input type="number" name={i} id={i} placeholder={i} />
      </div>
  ))
}

export default CreateInputs