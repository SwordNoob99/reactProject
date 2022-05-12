import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input';
import axios from 'axios';
import { useState } from 'react';
import { DataGrid } from '@mui';

export class viewProjectsComponent extends Component {

  constructor()  {

    this.columns = [
      { field: 'id', headerName: 'ID', width: 90 },
      {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
      },
      {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
      },
      {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
      },
      {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
          `${params.getValue(params.id, 'firstName') || ''} ${
            params.getValue(params.id, 'lastName') || ''
          }`,
      },
    ];
    
    const rows = [
      { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
      { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
      { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
      { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
      { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
      { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
      { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
      { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
      { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];
  }


  handleChange = event => {

    if(event.target.name == 'image'){


      let files = event.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
            
          this.setState({
              image: e.target.result,
            })
      }
    }else{
      
      const value = event.target.value;
    this.setState({ 
      ...this.state,
      [event.target.name]: value });
    
    }

    console.log(this.state.image)
  }

  handleSubmit = event => {
    event.preventDefault();
      console.log('we got here');
 

      

 
    axios.post(`http://127.0.0.1:8082/api/v1/Project/project`, { image : this.state.image ,
    name : this.state.projectName ,
    description : this.state.description })
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
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={this.rows}
        columns={this.columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
    )
  }
}

export default viewProjectsComponent
