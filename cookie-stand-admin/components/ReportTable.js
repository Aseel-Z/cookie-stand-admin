{/* <ReportTable> details…
should receive hours on props that is an array cookie stand hours of operation.
should receive reports on props that is an array all cookie stand objects.
If reports is empty then render <h2>No Cookie Stands Available</h2>
If reports is not empty then render a table with thead,tbody and tfoot components.
Component should render to match spec.
Component is responsible for tallying totals for each cookie stand as well as all cookie stands per hourly slot. */}


import React, { useEffect, useState } from 'react'

export default function ReportTable({cookieStands, open_hours}){


    if (cookieStands.length) {
        return (
            <table className="w-1/2 mx-auto border-4 border-collapse border-green-500 mt-10 bg-green-200">
            </table>
    
        )} else {
        return (
            <h2 className='m-5 text-gray-700 text-xl' >No Cookie Stands Available</h2>
        )
    }
}

