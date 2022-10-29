import React from 'react'
import {Link} from "react-router-dom";
import '../styles/forms.css'

const Login = ()=>{
    return(<>
        <div className="admission-page">
          <div className="container">
            <div className="ad-left">
              <div className="ad-left-expl">
                <div className="desc-info">
                    <div className="ad-school-name">
                        Arewa Light Academy
                    </div>
                    <div className="login-logo">
                        <img src="/logo-in.png"/>
                    </div>
                </div>
                <div className="ad-navigations">
                  <div>
                    <Link>Home</Link>
                    <Link>Sign Up</Link>
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
                        <input placeholder="Password" type="text"/>
                    </div>
                    <div> <input type="checkbox"/> keep me loged in</div>
                    <button className="log-btn">Login</button>
                </form>
            </div>

            </div>
          </div>
        
        </>
    )
}

export default Login;
