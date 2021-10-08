import React , {useState} from 'react'
import './SignIn.css'

function SignIn() {
    
const [isSignUp, setSignUp] = useState(true);

const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const fname = data.get('fname');
    const lname = data.get('lname');
    const password = data.get('password');
    const cpassword = data.get('cpassword');
    const phone = data.get('phn');
    const dob = data.get('dpb');
    const designation = data.get('designation');
}

const handleSubmitLogin = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const username = data.get('email');
    const password = data.get('password');
}

return (
    <div className= "SignIn">
        <div className={isSignUp ? "container right-panel-active" : "container"} id="container">
            <div className="form-container sign-up-container">
                <form className="signin-form" onSubmit={handleSubmit} method="post" >
                    <h1 className="signin-h1">Create Account</h1>
                    <div className="name">
                        <input className="signin-input fname" type="text" name="fname" placeholder="First Name" required/>
                        <input className="signin-input lname" type="text" name="lname" placeholder="Last Name" required/>
                    </div>
                    <input className="signin-input" type="email" name="email" placeholder="Email" required/>
                    <input className="signin-input" type="password" name="password" placeholder="Password" required/>
                    <input className="signin-input" type="password" name="cpassword" placeholder="Re-enter Password" required/>
                    <input className="signin-input" type="tel" name="phn" placeholder="Phone" />
                    <input className="signin-input"  type="date" name="dob" required/>
                    <input className="signin-input" type="text" name="designation" placeholder="Designation" required/>
                    <input type="submit" className="signin-btn" value="Sign Up"/>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form className="signin-form" onSubmit={handleSubmitLogin} method="post" >
                    <h1 className="signin-h1">Sign in</h1>
                    <input className="signin-input" type="email" placeholder="Email" />
                    <input className="signin-input" type="password" placeholder="Password" />
                    <button className="red signin-btn">Sign In</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1 className="signin-h1">Welcome Back!</h1>
                        <p className="signin-p">To keep connected with us please login with your personal info</p>
                        <button className="signin-btn ghost" id="signIn" onClick={() => setSignUp(false)}>Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1 className="signin-h1">Hello, Friend!</h1>
                        <p className="signin-p">Enter your personal details and start journey with us</p>
                        <button className="signin-btn ghost" id="signUp" onClick={() => setSignUp(true)}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default SignIn