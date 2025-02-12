import React, { useState } from 'react'
import './task5.css'
import { MdModeEdit } from "react-icons/md";

function Task5() {
    const [list, setList] = useState([])
    const [editId, setEditId] = useState(null)
    const [addExperience, setExperiecne] = useState([])
    const [selected, setSelected] = useState(false)
    const [isVisisble, setIsvisisble] = useState(false)
    const [employee, setEmployee] = useState({
        id: Date.now(),
        empId: '',
        firstname: '',
        lastname: '',
        email: '',
        gender: '',
        role: '',
    })
    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: [e.target.value] })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
        if (editId) {
            const updatedList = list.map((item) =>
                item.id === editId ? { ...employee, id: editId } : item)
            setList(updatedList)
            setEditId(null)
        }
        else {
            const array = { ...employee, id: Date.now() };
            setList([...list, array]);
        }
        setEmployee(
            {
                empId: "",
                firstname: "",
                lastname: "",
                email: "",
                gender: "",
                select: ""
            }
        )

    }
    const addEmp = () => {
        const updateExpeience = [...addExperience,
        { company: '', experience: '', role1: '', startDate: '', endDate: '', notice: '' }]
        setExperiecne(updateExpeience)
    }
    const handleExperienceChange = (index, e) => {
        const { name, value } = e.target;
        const update = [...addExperience];
        update[index][name] = value;
        setExperiecne(update);
    };
    const handleEdit = (row) => {
        setEmployee(row);
        setEditId(row.id)
    }
    console.log(addExperience)
    return (

        <div>
            <div className='box'>
                <div className='container-form'>
                    <div className='emp-experience1'>
                        <form onSubmit={handleSubmit} >
                            <div className='container1'>
                                <div className='form'>
                                    <div className='title'> <h5 >Employee details</h5>
                                        <span className='expand' onClick={() => setIsvisisble(!isVisisble)}>{isVisisble ? '-collapse' : '+expand'}</span>
                                    </div>
                                    {
                                        isVisisble &&
                                        <div>
                                            <div >
                                                <div className='input-row'>

                                                    <div className='form-group1'>
                                                        <label>Id</label>
                                                        <input type='text' placeholder='Id' name='empId'
                                                            value={employee.empId} onChange={handleChange} />
                                                    </div>

                                                    <div className='form-group2'>
                                                        <label>First Name</label>
                                                        <input type='text' placeholder='First Name' name='firstname'
                                                            value={employee.firstname} onChange={handleChange} />
                                                    </div>

                                                    <div className='form-group3'>
                                                        <label>Last Name</label>
                                                        <input type='text' placeholder='Last Name' name='lastname'
                                                            value={employee.lastname} onChange={handleChange} />
                                                    </div>

                                                </div>

                                                <div className='input-row'>
                                                    <div className='form-group4'>
                                                        <label>Email</label>
                                                        <input type='text' placeholder='Email' name='email' value={employee.email}
                                                            onChange={handleChange} />
                                                    </div>

                                                    <div className='form-group5'>
                                                        <label>Gender</label>
                                                        <select name='gender' onChange={handleChange}>
                                                            <option value='male'> Male</option>
                                                            <option value='female'>Female</option>
                                                            <option value='others'>Others</option>
                                                        </select>
                                                    </div>

                                                    <div className='form-group6'>
                                                        <label>Role</label>
                                                        <input type='text' placeholder='Role' name='role' value={employee.role}
                                                            onChange={handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }

                                </div>
                            </div>

                            <div>
                                <div className='emp-experience'>
                                    <div className='container'>
                                        <div className='title1'><h5>Add Experience  <span className='btn' onClick={addEmp}><h3>+</h3></span></h5>
                                            <span className='expand'
                                                onClick={() => setSelected(!selected)}>
                                                {selected ? '-collapse' : '+expand'}</span>
                                            {/* <span className='expand' onClick={() => setSelected(!selected)}>
                            {selected ? "- collapse" : "+ expand"} */}
                                        </div>
                                        {
                                            selected &&
                                            <div>
                                                {
                                                    addExperience.map((add, i) => {
                                                        return (
                                                            <div className='container-box'>
                                                                <div className='experience'>
                                                                    <div className='company'>
                                                                        <input type='text' placeholder='Company' name='company'
                                                                            value={add.company} onChange={(e) => { handleExperienceChange(i, e) }} />

                                                                        <input type='text' placeholder='Experience' name='experience'
                                                                            value={add.experience} onChange={(e) => { handleExperienceChange(i, e) }} />
                                                                        <input type='text' placeholder='Role' name='role1'
                                                                            value={add.role1} onChange={(e) => { handleExperienceChange(i, e) }} />
                                                                    </div>
                                                                    <div className='date'>
                                                                        <div> Start Date<input type='date' name='startDate'
                                                                            value={add.startDate} onChange={(e) => { handleExperienceChange(i, e) }} />
                                                                        </div>
                                                                        <div style={{ paddingRight: '600px' }}>
                                                                            End Date <input type='date' name='endDate'
                                                                                value={add.endDate} onChange={(e) => { handleExperienceChange(i, e) }} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        )
                                                    })
                                                }

                                            </div>

                                        }

                                    </div>
                                </div>
                            </div>
                            <div id='submit'>
                                <button type='submit' id='btn-submit'>Submit</button>
                            </div>
                        </form>

                    </div>

                </div>


                <div >
                    <table id='emp-table'>
                        <tr>
                            <th>Emp Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Role</th>
                            <th>Action</th></tr>
                        <tbody>
                            {list.map((item, i) => {
                                return (
                                    <tr>
                                        <td>{item.empId}</td>
                                        <td>{item.firstname}</td>
                                        <td>{item.lastname}</td>
                                        <td>{item.email}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.role}</td>
                                        <td ><button id='edit' onClick={() => { handleEdit(item) }}>edit<MdModeEdit style={{ width: '30%' }} />
                                        </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Task5
