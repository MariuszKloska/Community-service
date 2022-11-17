import React, {Component}from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class Registration extends Component {
  render() {
    return 
    <div className='Register'>
      <Form>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control autofocus name='username'/>
        </Form.Group>
      </Form>
    </div>
  }
}

export default Registration;
