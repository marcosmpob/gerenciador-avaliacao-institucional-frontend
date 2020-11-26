import logo from './logo.svg';
import './App.css';

import { Form, Field } from 'react-final-form'

import Select from './components/form/select';

const data = {};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Form
          onSubmit={this.onSubmit}
          render={({handleSubmit}) => (
              <form onSubmit={handleSubmit} onChange={(e) => this.onChange(e)}>
                  <div className="row justify-content-center">
                      <div className="col-md-8">
                      <Field 
                      component={Select} 
                      name={`categoria`} 
                      data={data}
                      label={`Categoria:`}
                    />

    </div>
  );
}

export default App;
