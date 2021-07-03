import React, { useState} from 'react';
import "tailwindcss/tailwind.css";
import {workHours} from "../data";
import CreateForm from "./CreateForm"
import ReportTable from "./ReportTable"

export default function CookieStandMain() {

    const [stand, setStand] = useState('')
    const [] = useState('')
    const [] = useState('')
    const [] = useState('')
    const [] = useState('')
    
    
    function eventHandler(event){
      event.preventDefault();
      let stand = {
        location: event.target.location.value,
        minCustomers: event.target.min.value,
        maxCustomers: event.target.max.value,
        avgCookies: event.target.avg.value,
      }
      setStand(stand)
    }
    return (
        <main className='grid w-full p-10 px-0 text-center bg-green-100 justify-items-stretch'>

            <CreateForm/>
            <ReportTable/>

            <div className="text=center p-10 justify-items-stretch">
            <p className='inline-block m-5 text-gray-600'>Report Table coming soon .....</p>
            <p className="m-3">{JSON.stringify(stand)}</p>
            </div>
        </main>
            )}

      


  

