import React from 'react'

function Json() {
    const data = [
        {
            id: 1, name: 'sravs', age: '18', city: 'hyderabad'

        },
        {
            id: 2, name: 'ram', age: '20', city: 'Delhi'
        }
    ]
    const headers = data.length > 0 ? Object.keys(data[0]) : []
    console.log(headers)
    return (
        <div>
            <table>
                <tr >
                    {headers.map((head) => (

                        <th key={head}>{head}</th>


                    ))}
                </tr>
                <tbody>

                    {data.map((item, index) =>

                    (
                        <tr key={index}>
                            {headers.map((row) => (
                                <td key={row}>{item[row]}</td>
                            ))}
                        </tr>
                    )

                    )}

                </tbody>
            </table>
        </div>
    )
}

export default Json
