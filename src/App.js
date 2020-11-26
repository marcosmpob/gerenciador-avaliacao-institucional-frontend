import logo from './logo.svg';
import './App.css';

import { Form, Field } from 'react-final-form'

import Select from './components/form/select';
import Input from './components/form/input';

const data = {};

const onSubmit = values => {
  values.status = 1
}

let dataSetor = [{ id: 1, name: "teste" }]


function App() {
  return (
    <div className="App">
      <Form
        onSubmit={onSubmit}
        //validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h2>Simple Default Input</h2>
            <div>
              <label>First Name</label>
              <Field name="firstName"
                component={Input}
                placeholder="Primeiro nome"
              />
            </div>

            <h2>An Arbitrary Reusable Input Component</h2>
            <div>
              <label>Interests</label>
              <Field
                name="interests"
                component={Select}
                name={`setor`}
                data={dataSetor}
                label={`Setor:`}
              />
            </div>

            <h2>Render Function</h2>
            <Field
              name="bio"
              render={({ input, meta }) => (
                <div>
                  <label>Bio</label>
                  <textarea {...input} />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            />

            <h2>Render Function as Children</h2>
            <Field name="phone">
              {({ input, meta }) => (
                <div>
                  <label>Phone</label>
                  <input type="text" {...input} placeholder="Phone" />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            </Field>

            <button type="submit">Submit</button>
          </form>
        )}
      />
    </div>
  );
}

export default App;
