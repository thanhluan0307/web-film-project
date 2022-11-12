<<<<<<< HEAD
/* eslint-disable no-useless-escape */

import React, {useState } from 'react'
import classnames from 'classnames/bind';
import styles from './login.module.scss';


const cx=classnames.bind(styles)

function Login() {

    const [booleanUser , setBooleanUser] = useState(false)
    const [booleanPass , setBooleanPass] = useState(false)
    const [booleanEmail , setBooleanEmail] = useState(false)
    const [booleanConfirmPass , setBooleanConfirmPass] = useState(false)

    const [count , setCount] = useState(0)
    const [inpUserName , setInpUserName] = useState('')
    const [inpPass , setInpPass] = useState('')
    const [inpEmail , setInpEmail] = useState('')
    const [inpConfirmPass , setInpConfirmPass] = useState('')

    
    const Username= /^[a-zA-Z]{2,}$/;
    const Email= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const Password= /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/


    function toSignUp(){
        setCount(count+1)
    }
    function toLogIn(){
        setCount(count+1)
    }
    const checkInpUser = () =>{
        if (!Username.test(inpUserName)) {
            setBooleanUser(true)
        }else{
            setBooleanUser(false)
        }
    }


    function checkInpEmail(){
        if (!Email.test(inpEmail)) {
            setBooleanEmail(true)
        } else {
            setBooleanEmail(false)
        }
    }


    function checkInpPass(){
        if (!Password.test(inpPass)) {
            setBooleanPass(true)
        }else{
            setBooleanPass(false)
        }
    }



    function checkInpComfirmPass(){
        if (inpConfirmPass === inpPass) {
            setBooleanConfirmPass(true)
            console.log(booleanConfirmPass);
        }else{
            setBooleanConfirmPass(false)
            console.log(booleanConfirmPass);
        }
    }

    const forLogin = (e)=>{
        e.preventDefault()
        console.log(inpEmail , inpPass);

        }
    return ( 
        <>        
        <div className={cx('login')}>
            <form 
                onSubmit={forLogin}
                style={{display:(count%2===0) ? "none" : "block"}} 
                className={cx('form-login')}
            >
                <h1>Login</h1>
                
                <input
                    className={cx('inp-login')} 
                    value={inpEmail} 
                    onChange={(e)=>setInpEmail(e.target.value)} 
                    onInput={checkInpEmail} type="text" 
                    placeholder='Email'
                /> 
                <br />
                <p className={cx((booleanUser)?'err-msg' : 'hidden')}>
                    *sai form rồi lè ^.^
                </p>
                <input 
                    className={cx('inp-login')}     
                    value={inpPass} 
                    onChange={(e)=>setInpPass(e.target.value)} 
                    onInput={checkInpPass} 
                    type="password" 
                    placeholder='Password'/> <br /> 
                <p className={cx((booleanPass)?'err-msg' : 'hidden')}>
                    *sai form rồi lè ^.^
                </p>
                <div style={{textAlign:'right' , marginRight:"50px"}}>
                    <input type="checkbox"/> Renember me
                    <p>For got your password?</p>
                </div>
                <button className={cx('bnt-login')} >Login</button>
                <h2>
                    or <span className={cx('change')} onClick={toSignUp}>
                            SignUp
                       </span>
                </h2>
            </form>

            <form 
                style={{display:(count%2===1) ? "none" : "block"}} 
                className={cx('form-signup')}
            >
                <h1>SignUp</h1>
                <input 
                    className={cx('inp-SignUp')} 
                    value={inpUserName} 
                    onChange={(e)=>setInpUserName(e.target.value)} 
                    onInput={checkInpUser} 
                    type="text" 
                    placeholder='Username'
                /> 
                <br />
                <p className={cx((booleanUser)?'err-msg' : 'hidden')}>
                    *sai form rồi lè ^.^
                </p>
                <input 
                    className={cx('inp-SignUp')} 
                    value={inpEmail} 
                    onChange={(e)=>setInpEmail(e.target.value)} 
                    onInput={checkInpEmail} 
                    type="email" 
                    placeholder='Email'
                /> 
                <br />
                <p className={cx((booleanEmail)?'err-msg' : 'hidden')}>
                    *sai form rồi lè ^.^
                </p>
                <input 
                    className={cx('inp-SignUp')} 
                    value={inpPass} 
                    onChange={(e)=>setInpPass(e.target.value)} 
                    onInput={checkInpPass} 
                    type="password" 
                    placeholder='Password'/> <br />
                <p className={cx((booleanPass)?'err-msg' : 'hidden')}>
                    *sai form rồi lè ^.^
                </p>
                <input 
                    className={cx('inp-SignUp')} 
                    value={inpConfirmPass} 
                    onChange={(e)=>setInpConfirmPass(e.target.value)} 
                    onInput={checkInpComfirmPass} 
                    type="password" 
                    placeholder='Confirm password'
                /> 
                <br />
                <p className={cx((booleanConfirmPass)?'err-msg' : 'hidden')}>
                    *mật khẩu không khớp ^.^
                </p>
                <button className={cx('bnt-signup')}>
                    SignUp
                </button>
                <h2>or <span className={cx('change')} onClick={toLogIn}>LogIn</span></h2>
            </form>
        </div>
        </>
     );
}

=======

import React, { useState } from 'react'
import classnames from 'classnames/bind';
import styles from './login.module.scss'

const cx=classnames.bind(styles)

function Login() {

    const [booleanUser , setBooleanUser] = useState([false])
    const [booleanPass , setBooleanPass] = useState([false])
    const [booleanEmail , setBooleanEmail] = useState([false])
    const [booleanConfirmPass , setBooleanConfirmPass] = useState([false])
    const [count , setCount] = useState(0)
    const [inpUserName , setInpUserName] = useState('')
    const [inpPass , setInpPass] = useState('')
    const [inpEmail , setInpEmail] = useState('')
    const [inpConfirmPass , setInpConfirmPass] = useState('')
    const regUsername = /^[a-zA-Z]{2,8}$/
    const regEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    // eslint-disable-next-line no-useless-escape
    const regPass = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,24}$/
    function toSignUp(){
        setCount(count+1)
    }
    function toLogIn(){
        setCount(count+1)
    }
    const checkInp = () =>{
        if (!regUsername.test(inpUserName)) {
            setBooleanUser(true)
        }else{
            setBooleanUser(false)
        }
        if (!regPass.test(inpPass)) {
            setBooleanPass(true)
        }else{
            setBooleanPass(false)
        }
        if (!regEmail.test(inpEmail)) {
            setBooleanEmail(true)
        } else {
            setBooleanEmail(false)
        }
        if (inpPass !== inpConfirmPass) {
            setBooleanConfirmPass(false)
        }else{
            setBooleanConfirmPass(true)
        }
    }

    return ( 
        <>        
        <div className={cx('login')}>
            <form 
                style={{display:(count%2===0) ? "none" : "block"}} 
                className={cx('form-login')}
            >
                <h1>Login</h1>
                
                <input 
                    className={cx('inp-login')} 
                    value={inpUserName} 
                    onChange={(e)=>setInpUserName(e.target.value)} 
                    onInput={checkInp} type="text" 
                    placeholder='Username'
                /> 
                <br />
                <p className={cx((booleanUser)?'err-msg' : 'hidden')}>
                    *sai form rồi lè ^.^
                </p>
                <input 
                    className={cx('inp-login')}     
                    value={inpPass} 
                    onChange={(e)=>setInpPass(e.target.value)} 
                    onInput={checkInp} 
                    type="password" 
                    placeholder='Password'/> <br /> 
                <p className={cx((booleanPass)?'err-msg' : 'hidden')}>
                    *sai form rồi lè ^.^
                </p>
                <div style={{textAlign:'right' , marginRight:"50px"}}>
                    <input type="checkbox"/> Renember me
                    <p>For got your password?</p>
                </div>
                <button className={cx('bnt-login')}>Login</button>
                <h2>
                    or <span className={cx('change')} onClick={toSignUp}>
                            SignUp
                       </span>
                </h2>
            </form>
            <form 
                style={{display:(count%2===1) ? "none" : "block"}} 
                className={cx('form-signup')}
            >
                <h1>SignUp</h1>
                <input 
                    className={cx('inp-SignUp')} 
                    value={inpUserName} 
                    onChange={(e)=>setInpUserName(e.target.value)} 
                    onInput={checkInp} 
                    type="text" 
                    placeholder='Username'
                /> 
                <br />
                <p className={cx((booleanUser)?'err-msg' : 'hidden')}>
                    *sai form rồi lè ^.^
                </p>
                <input 
                    className={cx('inp-SignUp')} 
                    value={inpEmail} 
                    onChange={(e)=>setInpEmail(e.target.value)} 
                    onInput={checkInp} 
                    type="email" 
                    placeholder='Email'
                /> 
                <br />
                <p className={cx((booleanEmail)?'err-msg' : 'hidden')}>
                    *sai form rồi lè ^.^
                </p>
                <input 
                    className={cx('inp-SignUp')} 
                    value={inpPass} 
                    onChange={(e)=>setInpPass(e.target.value)} 
                    onInput={checkInp} 
                    type="password" 
                    placeholder='Password'/> <br />
                <p className={cx((booleanPass)?'err-msg' : 'hidden')}>
                    *sai form rồi lè ^.^
                </p>
                <input 
                    className={cx('inp-SignUp')} 
                    value={inpConfirmPass} 
                    onChange={(e)=>setInpConfirmPass(e.target.value)} 
                    onInput={checkInp} 
                    type="password" 
                    placeholder='Confirm password'
                /> 
                <br />
                <p className={cx((booleanConfirmPass)?'err-msg' : 'hidden')}>
                    *mật khẩu không khớp ^.^
                </p>
                <button className={cx('bnt-signup')}>
                    SignUp
                </button>
                <h2>or <span className={cx('change')} onClick={toLogIn}>LogIn</span></h2>
            </form>
        </div>
        </>
     );
}

>>>>>>> xuanbach
export default Login;