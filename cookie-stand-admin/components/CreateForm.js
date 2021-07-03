{/* <CreateForm> component details…
Receive an onCreate function to be called when form is submitted.
onCreate should be passed argument object representing new cookie stand.
Object should have location property.
Object should have hourly_sales property with hard coded [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36] */}

export default function CreateForm({onCreate}){
// export default function CreateForm({onCreate, stand}){
    const hourly_sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
    const {location, hourly_sales} = stand


    return (
            <form onSubmit={onCreate} className = 'className="px-11 py-4 mx-10 bg-green-300 rounded w-4/5justify-self-center' >
            <h2 > Create Cookie Stand </h2>
            <label className="w-3 text-left p3">Location<input id = 'location' required  className='w-5/6 m-3' type="text"/></label>
            <div className="py-3">
            <label className="inline-block m-4">Minimum Customers per Hour<br/><input className=" bg-white w-60" name="min" type="number" id = 'min' required /></label>
            <label className="inline-block m-4">Maximum Customers per Hour<br/><input input className="bg-white w-60" name="max" type="number" id = 'max' required /></label>
            <label className="inline-block m-4">Average Cookies per Sale<br/><input className="bg-white w-60" name="avg"type="number" id = 'avg' required/></label>
            <button className="bg-green-500 w-70 p-3  m-3 " type="submit">Create<br/></button>
            </div>
        </form> 
        )
}