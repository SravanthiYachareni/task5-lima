import React, { useEffect, useState } from 'react'
import axios from 'axios'

function FetchData() {
    const [data,setData] = useState([])
    const [column,setCol] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setData(res.data), res1=>setCol(res1.Object.keys(data[0])))
            .catch(err => console.log(err))
    }, [])
    console.log(data)
    return (
        <div>
            JSON Data
            <div>
                <table>
                    {column.map((head,i)=> {
                        return (
                            <tr>
                                <th key={i}>{head}</th>
                            </tr>
                        )
                    })}
                    <tbody>
                        
                            {data.map((item)=> {
                                return(
                                    
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.website}</td>
                                    
                                </tr>
                                )
                                
                            })}
                       
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FetchData
