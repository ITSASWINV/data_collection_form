import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { useForm } from "react-hook-form";


export default function App() {

  const [todo, setTodo] = useState([])
  const { register, handleSubmit } = useForm();

  const getData = async () => {

    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    const formattedData = await data.json()

    setTodo(formattedData)
    console.log(formattedData)
  }


  useEffect(() => {

    getData()


  }, [])






  return (
    <Container className='mt-5 pt-5'> 
      <h3 className='text-center bt-5'>To Do list</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {
            todo.map((item, index) => {
              return (
                <tr key={index}>
                  <td><input type="checkbox" name="" id="" /></td>
                  <td>{item.title}</td>
                  <td>{item.completed}</td>
                </tr>
              )
            })
          
          

          }
        </tbody>
      </Table>
    </Container>

  )
}

