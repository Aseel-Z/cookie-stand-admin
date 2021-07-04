import React, { useState} from 'react';
import "tailwindcss/tailwind.css";
import CreateForm from "./CreateForm"
import ReportTable from "./ReportTable"

export default function CookieStandMain() {


    return (
        <main className='grid w-full p-10 px-0 text-center bg-green-100 justify-items-stretch'>
            <CreateForm/>
            <ReportTable/>
        </main>
            )}

