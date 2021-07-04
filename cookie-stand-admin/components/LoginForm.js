export default function LoginForm(){
    return(
        <div>
            <form>
                <fieldset>
                    <input type = 'text' id = 'username' placeholder='User Name' required ></input>
                    <input type = 'password' id = 'password' placeholder='password' required></input>
                    <button type = 'submit'>SIGN IN</button>
                </fieldset>
            </form>
        </div>
    )
}