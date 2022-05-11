import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input'

export class ConstructionType extends Component {
  state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  componentDidMount() {
    bsCustomFileInput.init()
    }
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Add construction type </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>basic features</a></li>
              <li className="breadcrumb-item active" aria-current="page">type de construction</li>
            </ol>
          </nav>
        </div>
        <div className="row">
         
         
          
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">type de construction</h4>
               
                <form className="forms-sample">
                  <Form.Group>
                    <label htmlFor="exampleInputName1">Name</label>
                    <Form.Control type="text" className="form-control" id="exampleInputName1" placeholder="Name" />
                  </Form.Group>
                  
                  <Form.Group>
                    <label>File upload</label>
                    <div className="custom-file">
                      <Form.Control type="file" className="form-control visibility-hidden" id="customFileLang" lang="es"/>
                      <label className="custom-file-label" htmlFor="customFileLang">Upload image</label>
                    </div>
                  </Form.Group>
                  
                  <Form.Group>
                    <label htmlFor="exampleTextarea1">Textarea</label>
                    <textarea className="form-control" id="exampleTextarea1" rows="4"></textarea>
                  </Form.Group>
                  <button type="submit" className="btn btn-primary mr-2">Submit</button>
                  <button className="btn btn-light">Cancel</button>
                </form>
              </div>
            </div>
          </div>
          
          
          
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Checkbox Controls</h4>
                <p className="card-description">Checkbox and radio controls (default appearance is in primary color)</p>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input"/>
                            <i className="input-helper"></i>
                            Default
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" defaultChecked className="form-check-input"/>
                            <i className="input-helper"></i>
                            Checked
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" disabled className="form-check-input"/>
                            <i className="input-helper"></i>
                            Disabled
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" disabled defaultChecked className="form-check-input"/>
                            <i className="input-helper"></i>
                            Disabled checked
                          </label>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value=""/>
                            <i className="input-helper"></i>
                            Default
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" defaultChecked/>
                            <i className="input-helper"></i>
                            Selected
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="optionsRadios2" id="optionsRadios3" value="option3" disabled/>
                            <i className="input-helper"></i>
                            Disabled
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="optionsRadios2" id="optionsRadios4" value="option4" disabled defaultChecked/>
                            <i className="input-helper"></i>
                            Selected and disabled 
                          </label>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                </form>
              </div>
              <div className="card-body">
                <p className="card-description">Add className <code>.form-check-&#123;color&#123;</code> for checkbox and radio controls in theme colors</p>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group>
                        <div className="form-check form-check-primary">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" defaultChecked /> Primary 
                            <i className="input-helper"></i>
                          </label>
                        </div>
                        <div className="form-check form-check-success">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" defaultChecked /> Success 
                            <i className="input-helper"></i>
                          </label>
                        </div>
                        <div className="form-check form-check-info">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" defaultChecked /> Info 
                            <i className="input-helper"></i>
                          </label>
                        </div>
                        <div className="form-check form-check-danger">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" defaultChecked /> Danger 
                            <i className="input-helper"></i>
                          </label>
                        </div>
                        <div className="form-check form-check-warning">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" defaultChecked /> Warning 
                            <i className="input-helper"></i>
                          </label>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group>
                        <div className="form-check form-check-primary">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="ExampleRadio1" id="ExampleRadio1" defaultChecked /> Primary 
                            <i className="input-helper"></i>
                          </label>
                        </div>
                        <div className="form-check form-check-success">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="ExampleRadio2" id="ExampleRadio2" defaultChecked /> Success 
                            <i className="input-helper"></i>
                          </label>
                        </div>
                        <div className="form-check form-check-info">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="ExampleRadio3" id="ExampleRadio3" defaultChecked /> Info 
                            <i className="input-helper"></i>
                          </label>
                        </div>
                        <div className="form-check form-check-danger">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="ExampleRadio4" id="ExampleRadio4" defaultChecked /> Danger 
                            <i className="input-helper"></i>
                          </label>
                        </div>
                        <div className="form-check form-check-warning">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="ExampleRadio5" id="ExampleRadio5" defaultChecked /> Warning 
                            <i className="input-helper"></i>
                          </label>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Inline forms</h4>
                <p className="card-description"> Use the <code>.form-inline</code> className to display a series of labels, form controls, and buttons on a single horizontal row </p>
                <form className="form-inline">
                  <label className="sr-only" htmlFor="inlineFormInputName2">Name</label>
                  <Form.Control  type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe" />
                  <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Username</label>
                  <div className="input-group mb-2 mr-sm-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text">@</div>
                    </div>
                    <Form.Control  type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Username" />
                  </div>
                  <div className="form-check mx-sm-2">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" defaultChecked/> Remember me 
                      <i className="input-helper"></i>
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary mb-2">Submit</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Horizontal Two column</h4>
                <form className="form-sample">
                  <p className="card-description"> Personal info </p>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">First Name</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Last Name</label>
                        <div className="col-sm-9">
                        <Form.Control type="text" />
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Gender</label>
                        <div className="col-sm-9">
                          <select className="form-control">
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Date of Birth</label>
                        <div className="col-sm-9">
                        <DatePicker className="form-control w-100"
                          selected={this.state.startDate}
                          onChange={this.handleChange}
                        />
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Category</label>
                        <div className="col-sm-9">
                          <select className="form-control">
                            <option>Category1</option>
                            <option>Category2</option>
                            <option>Category3</option>
                            <option>Category4</option>
                          </select>
                        </div>
                        </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Membership</label>
                        <div className="col-sm-4">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="ExampleRadio4" id="membershipRadios1" defaultChecked /> Free 
                            <i className="input-helper"></i>
                          </label>
                        </div>
                        </div>
                        <div className="col-sm-5">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="ExampleRadio4" id="membershipRadios2" /> Proffessional 
                            <i className="input-helper"></i>
                          </label>
                        </div>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <p className="card-description"> Address </p>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Address 1</label>
                        <div className="col-sm-9">
                        <Form.Control type="text"/>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">State 1</label>
                        <div className="col-sm-9">
                        <Form.Control type="text"/>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Address 2</label>
                        <div className="col-sm-9">
                        <Form.Control type="text"/>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Postcode</label>
                        <div className="col-sm-9">
                        <Form.Control type="text"/>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Cirt</label>
                        <div className="col-sm-9">
                        <Form.Control type="text"/>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">  
                        <label className="col-sm-3 col-form-label">Country</label>
                        <div className="col-sm-9">
                          <select className="form-control">
                            <option>America</option>
                            <option>Italy</option>
                            <option>Russia</option>
                            <option>Britain</option>
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ConstructionType
