import React from 'react'
import { MdDelete } from 'react-icons/md';
import { FaEdit } from "react-icons/fa";

const products = ({students}) => {
  return (
    <div>
        <style>
            {`
                table {
                    width: 100%;
                    border-collapse: collapse;
                }

                th {
                    background-color: #666666;
                    color: #333;
                    text-color: white;
                }

                th, td {
                    border: 1px solid #f2f2f2;
                    padding: 8px;
                    text-align: left;
                }

                tr:nth-child(even) {
                    background-color: #f2f2f2;
                }
            `}
        </style>
        <h3>Products</h3>
        <hr/>
        <table>
            <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Gender</th>
            <th colspan="2">Action</th>

            </thead>
            

            
            <tbody>
                {students.map((student) => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.course}</td>
                        <td>{student.gender}</td>
                        <td>{student.action}</td>
                        <td>
                            <button style ={{backgroundColor :"blue"}}>
                                <FaEdit />
                            </button>
                        </td>
                        <td>
                            <button style= {{backgroundColor :"red"}}>
                                <MdDelete />
                            </button>
                        </td>
                        </tr>
                ))}
              
            
            </tbody>
        </table>
    </div>
  )
}

export default products