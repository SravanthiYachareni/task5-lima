import React from 'react'

function Sorting() {
   
        const employees = [
          {id: 4, name: 'Dean', country: 'Denmark'},
          {id: 3, name: 'Carl', country: 'Canada'},
          {id: 2, name: 'Bob', country: 'Belgium'},
          {id: 1, name: 'Alice', country: 'Austria'},
          {id: 5, name: 'Ethan', country: 'Egypt'},
        ];
      
        return (
          <div>
            {[...employees]
              .sort((a, b) => a.id - b.id)
              .map(employee => {
                return (
                  <div key={employee.id}>
                    <h2>id: {employee.id}</h2>
                    <h2>name: {employee.name}</h2>
                    <h2>country: {employee.country}</h2>
      
                    <hr />
                  </div>
                );
              })}
          </div>
        );
      }
     
  


export default Sorting
