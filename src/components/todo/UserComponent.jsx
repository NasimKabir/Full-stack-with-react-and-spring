import React, { Component } from "react";
import moment from 'moment';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import TodoService from "../../api/TodoService";

class UserComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            name: "",
            date: ""
        }
        this.FormSubmit = this.FormSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount(id) {
        TodoService.findbyUsers(this.state.id)
            .then(response => {
                //console.log(response)
                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    date: moment(response.data.date).format('YYYY-MM-DD')
                })
            })
    }

    validate(values) {
        let errors = {}
        if (!values.name) {
            errors.name = 'Enter Your Name'
        }
        else if (values.name.length < 5) {
            errors.name = 'Enter atleast 5 Charecters in Name'
        }

        if (!moment(values.date).isValid()) {
            errors.date = 'Enter a valid Date'
        }
        return errors
    }


    FormSubmit(values) {
        let user = {
            id: this.props.match.params.id,
            name: values.name,
            date: values.date
        }

        if (this.state.id === -1) {
            TodoService.addUser(user)
            .then(() => this.props.history.push('/users'))
        } else {
            TodoService.updateUser(this.props.match.params.id, user)
                .then(() => this.props.history.push('/users'))
        }
        console.log(values);
    }


    render() {
        // this is destuctureing 
        let { id, name, date } = this.state;
        return (
            <div>
                <h1>Create new user</h1>
                <div className="container">
                    <Formik
                        initialValues={{ id, name, date }}
                        onSubmit={this.FormSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="number" name="id"></Field>
                                    </fieldset>

                                    <ErrorMessage name="name" component="div" className="alert alert-warning" />

                                    <fieldset className="form-group">
                                        <label>Name</label>
                                        <Field className="form-control" type="text" name="name"></Field>
                                    </fieldset>

                                    <ErrorMessage name="date" component="div" className="alert alert-warning" />

                                    <fieldset className="form-group">
                                        <label>Date</label>
                                        <Field className="form-control" type="date" name="date"></Field>
                                    </fieldset>

                                    <button type="submit" className="btn btn-primary">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>

            </div>
        )
    }
}
export default UserComponent;