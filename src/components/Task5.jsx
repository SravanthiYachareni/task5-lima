import React, { useState } from 'react'
import './task5.css'
import { MdModeEdit } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";
import { FaSort } from "react-icons/fa6";

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
                role: ""
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
   
    const [sorted,setSorted]  = useState( { sorted:'empId', reversed:false})
    const sortById = () => {
        setSorted({sorted:'empId',reversed: !sorted.reversed})
        const userCopy = [...list]
        userCopy.sort((userA,userB)=> {
            if(sorted.reversed) {
                return userA.empId - userB.empId;
            }
            return userB.empId - userA.empId;
        })
        setList(userCopy)
    }
    // const  Asen = [list].sort((a,b)=>a.empId - b.empId)
    // console.log

    const sortByName = () => {
        setSorted({sorted:'firstname',reversed: !sorted.reversed})
        const userCopy = [...list];
        userCopy.sort((userA,userB) => {
            const nameA = `${userA.firstname}`
            const nameB = `${userB.firstname}`
            if(sorted.reversed) {
                return nameB.localeCompare(nameA)

            }
            return nameA.localeCompare(nameB)
        })
        setList(userCopy)
        
    }

    const sortByName1 = () => {
        setSorted({sorted:'lastname',reversed: !sorted.reversed})
        const userCopy = [...list];
        userCopy.sort((userA,userB) => {
            const nameA = `${userA.lastname}`
            const nameB = `${userB.lastname}`
            if(sorted.reversed) {
                return nameB.localeCompare(nameA)

            }
            return nameA.localeCompare(nameB)
        })
        setList(userCopy)
        
    }
    const [search,setSearch] =useState('')
    console.log(search)

    const emp = list.filter((item)=>{
        return (
    item.empId.toString().toLowerCase().includes(search) 
    // item.firstname.toString().toLowerCase().includes(search) || 
    // item.lastname.toString().toLowerCase().includes(search) || 
    // item.email.toString().toLowerCase().includes(search)  
    // item.gender.toString().toLowerCase().includes(search) || 
    // item.role.toString().toLowerCase().includes(search)  
    )})

    //Pagination
    // const [currentPage,setCurrent] = useState(1);
    // const recordPerPage = 5;
    // const  lastIndex = currentPage * recordPerPage; 
    // const firstIndex = lastIndex - recordPerPage;
    // const records = employee.slice(firstIndex,lastIndex);
    // const npage = Math.ceil(employee.length/recordPerPage);
    // const numbers = [...list(npage + 1).key()].slice(1);

    // const prePage = () => {

    // }


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
                                                        {/* <label>Id</label> */}
                                                        <input type='text' placeholder='Id' name='empId'
                                                            value={employee.empId} onChange={handleChange} />
                                                    </div>

                                                    <div className='form-group2'>
                                                        {/* <label>First Name</label> */}
                                                        <input type='text' placeholder='First Name' name='firstname'
                                                            value={employee.firstname} onChange={handleChange} />
                                                    </div>

                                                    <div className='form-group3'>
                                                        {/* <label>Last Name</label> */}
                                                        <input type='text' placeholder='Last Name' name='lastname'
                                                            value={employee.lastname} onChange={handleChange} />
                                                    </div>

                                                </div>

                                                <div className='input-row'>
                                                    <div className='form-group4'>
                                                        {/* <label>Email</label> */}
                                                        <input type='text' placeholder='Email' name='email' value={employee.email}
                                                            onChange={handleChange} />
                                                    </div>

                                                    <div className='form-group5'>
                                                        {/* <label>Gender</label> */}
                                                        <select name='gender' value='' onChange={handleChange} >
                                                            <option > Male</option>
                                                            <option >Female</option>
                                                            <option >Others</option>
                                                        </select>
                                                    </div>

                                                    <div className='form-group6'>
                                                        {/* <label>Role</label> */}
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
                    {/* <div>
                        <input className='search' type='text'
                            placeholder='Search'
                            onChange={(e) => setSearch(e.target.value)} />
                    </div> */}
                    <div className='search'>
                        <input type='text' placeholder='search by ID'
                        onChange={(e)=>setSearch(e.target.value)}/>
                    </div>
                    <table id='emp-table'>
                        <tr>
                            <th >Emp Id<span onClick={sortById}
                             style={{paddingLeft:'6px',paddingTop:'4px',opacity:'0.6'}}>
                                <FaSort /></span></th>
                            <th >First Name<span onClick={sortByName} style={{paddingLeft:'6px',paddingTop:'4px',opacity:'0.6'}}><FaSort /></span></th>
                            <th >Last Name <span onClick={sortByName1} style={{paddingLeft:'6px',paddingTop:'4px',opacity: '0.6'}}><FaSort/></span></th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Role</th>
                            <th>Action</th></tr>
                        <tbody>
                            <tr>
                                {/* <td><input type='text' value={search.empId} onChange={(e) => setSearch(e.target.value)} /></td>
                                <td><input type='text' value={search.firstname} onChange={(e) => setSearch(e.target.value)} /></td>
                                <td><input type='text' value={search.lastname} onChange={(e) => setSearch(e.target.value)} /></td>
                                <td><input type='text' value={search.email} onChange={(e) => setSearch(e.target.value)} /></td>

                                <td><input type='text' value={search.gender} onChange={(e) => setSearch(e.target.value)} /></td> */}
                            </tr>
                            {emp
                                .map((item, i) => {
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
                    {/* <nav>
                        <ul className='pagination'> 
                            <li className='page-item'>
                                <a href='#' className='page-link' onClick={prePage}>Prev</a>

                            </li>
                            {
                                numbers.map((n,i)=>(
                                    <li>
                                            <a>{n}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav> */}
                </div>
            </div>
        </div>
    )
}

export default Task5
