export default function CookieStandMain() {
    return (
        <main>
            <form placeholder= 'Cookie Stand'>
                 
                <div> 
                <h2> Create Cookie Stand </h2>
                <label>Location</label>
                <input type="text"/>
                </div>

                <div>
                <label>Minimum Customers per Hour</label>
                <input type="number"/>
                </div>

                <div>
                <label >Maximum Customers per Hour</label>
                <input  type="number"/>
                </div>


                <div>
                <label >Average Cookies per Sale</label>
                <input type="number"/>
                </div>

                <div>
                <button type="submit">Create</button>
                </div>
            </form>
        </main>
            )}