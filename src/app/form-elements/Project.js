import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input';
import axios from 'axios';

export class Project extends Component {
  state = {
    name: '' ,

  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
    }
  componentDidMount() {
    bsCustomFileInput.init()
      var data

      axios.get(`http://127.0.0.1:8082/api/v1/Project/projects`)
        .then(res => { console.log(res)
          
         
        })
        
    
    };
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Add Project </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>basic features</a></li>
              <li className="breadcrumb-item active" aria-current="page">Project</li>
            </ol>
          </nav>
        </div>
        <div className="row">
         
         
          
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Project</h4>
               
                <form className="forms-sample">
                  <Form.Group>
                    <label htmlFor="exampleInputName1">Name</label>
                    <Form.Control type="text" className="form-control" id="exampleInputName1" placeholder="Name" name='name' />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleSelectGender">Lot De travaus</label>
                    <select className="form-control" id="exampleSelectGender">
                      <option>text</option>
                      <option>Female</option>
                    </select>
                  </Form.Group>
                
                    <Form.Group>
                    <label htmlFor="exampleSelectGender">Type de Construction</label>
                    <select className="form-control" id="exampleSelectGender">
                      <option>meuble</option>
                      <option>Female</option>
                    </select>
                  </Form.Group>
                  <Form.Group>
                    <label>File upload</label>
                    <div className="custom-file">
                      <Form.Control type="file" className="form-control visibility-hidden" id="customFileLang" lang="es" name='img_path'/>
                      <label className="custom-file-label" htmlFor="customFileLang">Upload image</label>
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputCity1">City</label>
                    <Form.Control type="text" className="form-control" id="exampleInputCity1" placeholder="Location" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleTextarea1">Textarea</label>
                    <textarea className="form-control" id="exampleTextarea1" name='description' rows="4"></textarea>
                  </Form.Group>
                  <button type="submit" className="btn btn-primary mr-2" >Submit</button>
                  <button className="btn btn-light">Cancel</button>
                </form>
              </div>
            </div>
          </div>
          
          
         
        </div>
      </div>
    )
  }
}

export default Project
