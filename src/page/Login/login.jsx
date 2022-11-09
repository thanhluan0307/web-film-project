
import React, { useState } from 'react'
import classnames from 'classnames/bind';
import styles from './login.module.scss'

const cx=classnames.bind(styles)

function Login() {


    // const [Username , setUsername]= useState('/^[a-zA-Z]{2,}$/');
    // const [Email , setEmail]= useState('/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/');
    // const [Password , setPassword]= useState('/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/');
    const [booleanInp , setBooleanInp] = useState([false])

  

    const [count , setCount] = useState(0)
    const [inpUserName , setInpUserName] = useState('')
    const [inpPass , setInpPass] = useState('')
    const [inpEmail , setInpEmail] = useState('')
    const [inpConfirmPass , setInpConfirmPass] = useState('')

    function toSignUp(){
        setCount(count+1)
    }
    function toLogIn(){
        setCount(count+1)
    }
    const checkInp = () =>{
        const regUsername = /^[a-zA-Z]{2,}$/
        const regEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        const regPass = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/

        if (!regUsername.test(inpUserName)) {
            setBooleanInp(true)
        }else{
            setBooleanInp(false)
        }
        if (!regPass.test(inpPass)) {
            
        }
    }


    return ( 
        <>
        
        <div  className={cx('login')}>
            <form style={{display:(count%2===0) ? "none" : "block"}} className={cx('form-login')}>
                <h1>Login 1</h1>
                
                <input className={cx('inp-login')} value={inpUserName} onChange={(e)=>setInpUserName(e.target.value)} onInput={checkInp} type="text" placeholder='username'/> <br />
                <p className={cx((booleanInp)?'err-msg' : 'hidden')}>*sai form rồi lè ^.^</p>
                <input className={cx('inp-login')} value={inpPass} onChange={(e)=>setInpPass(e.target.value)} onInput={checkInp} type="password" placeholder='password'/> <br /> 
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
                <input className={cx('inp-SignUp')} value={inpUserName} onChange={(e)=>setInpUserName(e.target.value)} onInput={checkInp} type="text" placeholder='username'/> <br />
                <p className={cx('err-msg' ,'hidden')}>*sai form rồi lè ^.^</p>
                <input className={cx('inp-SignUp')} value={inpEmail} onChange={(e)=>setInpEmail(e.target.value)} onInput={checkInp} type="email" placeholder='email'/> <br />
                <p className={cx('err-msg' ,'hidden')}>*sai form rồi lè ^.^</p>
                <input className={cx('inp-SignUp')} value={inpPass} onChange={(e)=>setInpPass(e.target.value)} onInput={checkInp} type="password" placeholder='password'/> <br />
                <p className={cx('err-msg' ,'hidden')}>*sai form rồi lè ^.^</p>
                <input className={cx('inp-SignUp')} value={inpConfirmPass} onChange={(e)=>setInpConfirmPass(e.target.value)} onInput={checkInp} type="password" placeholder='confirm password'/> <br />
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