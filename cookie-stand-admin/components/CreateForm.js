export default function CreateForm({onCreate, stand}){
    return (

            <form onSubmit={onCreate} className = 'className="px-11 py-4 mx-10 bg-green-300 rounded w-4/5justify-self-center' >
            <h2 > Create Cookie Stand </h2>
            <label className="w-3 text-left p3">Location<input  className='w-5/6 m-3' type="text"/></label>
            <div className="py-3">
            <label className="inline-block m-4">Minimum Customers per Hour<br/><input className=" bg-white w-60" name="min" type="number"/></label>
            <label className="inline-block m-4">Maximum Customers per Hour<br/><input input className="bg-white w-60" name="max" type="number" /></label>
            <label className="inline-block m-4">Average Cookies per Sale<br/><input className="bg-white w-60" name="avg"type="number"/></label>
            <button className="bg-green-500 w-70 p-3  m-3  " type="submit">Create<br/></button>
            </div>
        </form>
        )
}