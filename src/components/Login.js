import React, { Component } from 'react';

class Login extends Component {

    constructor(props){
        super(props);
        const {
            email,
            setEmail,
            password,
            setPassword,
            handleLogin,
            handleSingup,
            hasAccount,
            setHasAccount,
            emailError,
            passwordError
        } = props;
        
    };
    

    render(){
        return(
            
            <div id="login">
                <section className = "Login" >
                    <div class="loginContainer">
                        <label>Username</label>
                        <input type="text"  
                            type="text"
                            autoFocus
                            required
                            value={this.props.email}
                            onchange={(e) => setEmail(e.target.value)}
                        />
                        <p className="errorMsg">{this.props.emailError}</p>
                        <label>Password</label>
                        <input 
                            type="password"
                            requiered
                            value={this.props.password}
                            onChanged={(e) => setPassword(e.target.value)}
                        />
                        <p className="errorMsg">{this.props.passwordError}</p>
                        <div class="btnContainer">
                            {this.props.hasAccount ? (
                                <>
                                    <button onClick={this.props.handleLogin}>Sign in</button>
                                    <p>
                                        Don't have an account ? 
                                        <span onClick={() => setHasAccount(!this.props.hasAccount)}>Sign up</span>
                                    </p>
                                </>
                            )   :   (
                                <>
                                    <button onClick={this.props.handleSingup}>Sign up</button>
                                    <p>
                                        Have an account? 
                                        <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                                    </p>
                                </>  
                            )}
                        </div>
                    </div>
                </section>
            </div>   
       
       );
    }
}



export default Login;