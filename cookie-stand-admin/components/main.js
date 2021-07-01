import React, { useState} from 'react';
import "tailwindcss/tailwind.css"

export default function CookieStandMain() {

    const [stand, setStand] = useState('')

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
            <form onSubmit={eventHandler} className = 'className="px-11 py-4 mx-10 bg-green-300 rounded w-4/5justify-self-center' >
                <h2 > Create Cookie Stand </h2>
                <label className="w-3 text-left p3">Location<input  className='w-5/6 m-3' type="text"/></label>
                <div className="py-3">
                <label className="inline-block m-4">Minimum Customers per Hour<br/><input className=" bg-white w-60" name="min" type="number"/></label>
                <label className="inline-block m-4">Maximum Customers per Hour<br/><input input className="bg-white w-60" name="max" type="number" /></label>
                <label className="inline-block m-4">Average Cookies per Sale<br/><input className="bg-white w-60" name="avg"type="number"/></label>
                <button className="bg-green-500 w-70 p-3  m-3  " type="submit">Create<br/></button>
                </div>
            </form>

            <div className="text=center p-10 justify-items-stretch">
            <p className='inline-block m-5 text-gray-600'>Report Table coming soon .....</p>
            <p className="m-3">{JSON.stringify(stand)}</p>
            </div>
        </main>
            )}

      


  

