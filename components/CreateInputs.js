function CreateInputs({inputRef}) {
    console.log('inputRef: ',inputRef);
  return [...Array(inputRef)].map((i, key) => (
      <div key={key}>
        <input type="number" name={i} id={i} placeholder={i} />
      </div>
  ))
}

export default CreateInputs