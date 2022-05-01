import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

const renderInput = field =>   // render input and errors
    <div>
        <input {...field.input} type={field.type}/>
        { field.meta.touched && field.meta.error &&
            <span className="error">{field.meta.error}</span>
        }
    </div>

class LoginForm extends React.Component {
    render() {
        const { handleSubmit } = this.props

        return (
            <form onSubmit={handleSubmit}>
                <div className="ctrl_group">
                    <label htmlFor="username">Username</label>
                    <Field
                        name="username"
                        component={renderInput}
                        type="text"/>
                </div>

                <div className="ctrl_group">
                    <label htmlFor="password">Password</label>
                    <Field
                        name="password"
                        component={renderInput}
                        type="password"/>
                </div>

                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default reduxForm({
  form: 'LoginForm'
})(LoginForm)