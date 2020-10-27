import React from 'react';
import { Form } from 'semantic-ui-react';
import './TextInput.css';

const TextInput = ({ value, handleChange, label }) => {
 return (
   <div className="text-input">
    <Form>
      <Form.TextArea value={value} label={label} rows='10' onChange={handleChange} placeholder='Text...' />
    </Form>
   </div>
 );
};

export default TextInput;
