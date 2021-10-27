import React,{useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addPoke}) {

  const [formData, setFormData] = useState({
    name:'',
    hp:'',
    sprites: {
      front: "",
      back: ""
    }
  })

  const handleFormChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    if(e.target.name === "front" || e.target.name === "back"){
      setFormData(currentFormData => Object.assign({}, currentFormData, {
        sprites: {
          ...currentFormData.sprites,
          [e.target.name]: e.target.value
        }
      }));
    }
    else{
      setFormData(currentFormData => Object.assign({...currentFormData}, {[e.target.name]:e.target.value}))
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    };
    fetch('http://localhost:3001/pokemon', options)
      .then(resp => resp.json())
      .then(newPoke => addPoke(newPoke));
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          console.log("submitting form...");
          console.log(formData);
          handleFormSubmit();
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={formData.name} onChange={handleFormChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={formData.hp} onChange={handleFormChange}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            value={formData.sprites.front}
            onChange={handleFormChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            value={formData.sprites.back}
            onChange={handleFormChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
