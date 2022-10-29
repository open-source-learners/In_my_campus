import React from 'react'
import {Link} from "react-router-dom";
import '../styles/forms.css'

const Register = ()=>{
    return(<>
        <div className="admission-page">
          <div className="container">
            <div className="ad-left">
              <div className="ad-left-expl">
                <div className="desc-info">
                    <div className="ad-school-name">
                        In mY Campus
                    </div>
                    <div className="login-logo">
                        <img src="/logo-in.png"/>
                    </div>
                </div>
                <div className="ad-navigations">
                  <div>
                    <Link>Home</Link>
                    <Link>Login</Link>
                  </div>
                </div>
               </div>
               <div className="img-bg">
                    {/* <img src="/badge.png"/> */}
                </div>
               
            </div>
            {/* left side end */}
            <div className="ad-right">
                <form>
                <h3>Login</h3>
                    <div className="fields-1">
                        <input placeholder="Admissin Number" type="text"/>
                        <input placeholder="Email address" type="text"/>
                        <input placeholder="Password" type="text"/>
                    </div>
                    <div> <input type="checkbox"/>i agreed to your terms & policy</div>
                    <button className="log-btn">Login</button>
                </form>
            </div>

            </div>
          </div>
        
        </>
    )
}

export default Register;

