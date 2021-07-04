{/* <ReportTable> details…
should receive hours on props that is an array cookie stand hours of operation.
should receive reports on props that is an array all cookie stand objects.
If reports is empty then render <h2>No Cookie Stands Available</h2>
If reports is not empty then render a table with thead,tbody and tfoot components.
Component should render to match spec.
Component is responsible for tallying totals for each cookie stand as well as all cookie stands per hourly slot. */}


import { workHours } from "../data"
import { useEffect, useState } from 'react'

export default function ReportTable(props){

    const hours = workHours;
  


    if (props.reports.length) {
        return (
            <table >
                <thead className="bg-green-500">
                    <tr>
                        <th>
                        Location
                        </th>
                        {workHours.map(hour => (<th>{workHours}</th>))}
                        <th>
                            Totals
                        </th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
                <tfoot>
                    <tr >
                        <th >Totals</th>
                       
                        <th ></th>
                    </tr>
                </tfoot>
            </table>
 
    
        )} else {
        return (
            <h2 className='m-5 text-gray-700 text-xl' >No Cookie Stands Available</h2>
            
        ) 
      
            
        
    }
}


