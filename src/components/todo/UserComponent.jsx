import React, { Component } from "react";
import moment from 'moment';
import { Formik, Field, Form } from 'formik';

class UserComponent extends Component {
    state = {
        id: this.props.match.params.id,
        name: "Udpateing information",
        date: moment(new Date()).format('YYYY-MM-DD')
    }


onSubmit(values){
    console.log(values)
}

render() {
    // this is destuctureing 
    let { id, name, date } = this.state;
    return (
        <div>
            <h1>Create new user</h1>
            <div className="container">
                <Formik initialValues={{ id, name, date }} onSubmit={this.onSubmit}>
                    {
                        (props) => (
                            <Form>
                                <fieldset className="form-group">
                                    <label>Id</label>
                                    <Field className="form-control" type="text" name="id"></Field>
                                </fieldset>

                                <fieldset className="form-group">
                                    <label>Name</label>
                                    <Field className="form-control" type="text" name="name"></Field>
                                </fieldset>

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