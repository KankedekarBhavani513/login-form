import { Field, reduxForm } from 'redux-form';

<Field
    name="textField"
    component="input"
    type="text" //This can be password, email, number, etc
    placeholder="Text type field"
/>

export default InputField