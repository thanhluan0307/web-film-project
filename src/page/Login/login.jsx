import 'antd/dist/antd.min.css'
import React, { useState } from 'react'
import classnames from 'classnames/bind';
import styles from './login.module.scss'

const cx=classnames.bind(styles)

function Login() {



    

    const [count , setCount] = useState(0)
    const [inpLogIn , setInpLogIn] = useState('')
    const [inpSignUp , setInpSignUp] = useState('')


    function toSignUp(){
        setCount(count+1)
    }
    function toLogIn(){
        setCount(count+1)
    }



    return ( 
        <>
        <div  className={cx('login')}>
            <form style={{display:(count%2===0) ? "none" : "block"}} className={cx('form-login')}>
                <h1>Login</h1>
                
                <input className={cx('inp-login')} value={inpLogIn} onChange={(e)=>setInpLogIn(e.target.value)} onInput={checkInp} type="text" placeholder='username'/> <br />
                <p className={cx('err-msg' ,'hidden')}>*sai form rồi lè ^.^</p>
                <input className={cx('inp-login')} value={inpLogIn} onChange={(e)=>setInpLogIn(e.target.value)} onInput={checkInp} type="password" placeholder='password'/> <br /> 
                <p className={cx('err-msg' ,'hidden')}>*sai form rồi lè ^.^</p>
                <div style={{textAlign:'right' , marginRight:"50px"}}>

                    <input type="checkbox"/> Renember me
                    <p>For got your password?</p>
                </div>
                <button className={cx('bnt-login')}>Login</button>
                <h2>or <span onClick={toSignUp}>SignUp</span></h2>
            </form>



            <form style={{display:(count%2===1) ? "none" : "block"}} className={cx('form-signup')}>
                <h1>SignUp</h1>
                <input className={cx('inp-SignUp')} value={inpSignUp} onChange={(e)=>setInpSignUp(e.target.value)} onInput={checkInp} type="text" placeholder='username'/> <br />
                <p className={cx('err-msg' ,'hidden')}>*sai form rồi lè ^.^</p>
                <input className={cx('inp-SignUp')} value={inpSignUp} onChange={(e)=>setInpSignUp(e.target.value)} onInput={checkInp} type="email" placeholder='email'/> <br />
                <p className={cx('err-msg' ,'hidden')}>*sai form rồi lè ^.^</p>
                <input className={cx('inp-SignUp')} value={inpSignUp} onChange={(e)=>setInpSignUp(e.target.value)} onInput={checkInp} type="password" placeholder='password'/> <br />
                <p className={cx('err-msg' ,'hidden')}>*sai form rồi lè ^.^</p>
                <input className={cx('inp-SignUp')} value={inpSignUp} onChange={(e)=>setInpSignUp(e.target.value)} onInput={checkInp} type="password" placeholder='confirm password'/> <br />
                <p className={cx('err-msg' ,'hidden')}>*sai form rồi lè ^.^</p>
                <button className={cx('bnt-signup')}>
                    SignUp
                </button>
                <h2>or <span onClick={toLogIn}>LogIn</span></h2>
            </form>


        </div>
        </>
     );
}

export default Login;