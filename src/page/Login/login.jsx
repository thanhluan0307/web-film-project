import React, { useState } from 'react'
import classnames from 'classnames/bind';
import styles from './login.module.scss'

const cx=classnames.bind(styles)

function Login() {


    // const [Username , setUsername]= useState('/^[a-zA-Z]{2,}$/');
    // const [Email , setEmail]= useState('/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/');
    // const [Password , setPassword]= useState('/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/');
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
            console.log(booleanConfirmPass);
        }else{
            setBooleanConfirmPass(true)
            console.log(booleanConfirmPass);
        }
    }


    return ( 
        <>
        
        <div  className={cx('login')}>
            <form style={{display:(count%2===0) ? "none" : "block"}} className={cx('form-login')}>
                <h1>Login</h1>
                
                <input className={cx('inp-login')} value={inpUserName} onChange={(e)=>setInpUserName(e.target.value)} onInput={checkInp} type="text" placeholder='username'/> <br />
                <p className={cx((booleanUser)?'err-msg' : 'hidden')}>*sai form rồi lè ^.^</p>
                <input className={cx('inp-login')} value={inpPass} onChange={(e)=>setInpPass(e.target.value)} onInput={checkInp} type="password" placeholder='password'/> <br /> 
                <p className={cx((booleanPass)?'err-msg' : 'hidden')}>*sai form rồi lè ^.^</p>
                <div style={{textAlign:'right' , marginRight:"50px"}}>

                    <input type="checkbox"/> Renember me
                    <p>For got your password?</p>
                </div>
                <button className={cx('bnt-login')}>Login</button>
                <h2>or <span className={cx('change')} onClick={toSignUp}>SignUp</span></h2>
            </form>



            <form style={{display:(count%2===1) ? "none" : "block"}} className={cx('form-signup')}>
                <h1>SignUp</h1>
                <input className={cx('inp-SignUp')} value={inpUserName} onChange={(e)=>setInpUserName(e.target.value)} onInput={checkInp} type="text" placeholder='username'/> <br />
                <p className={cx((booleanUser)?'err-msg' : 'hidden')}>*sai form rồi lè ^.^</p>
                <input className={cx('inp-SignUp')} value={inpEmail} onChange={(e)=>setInpEmail(e.target.value)} onInput={checkInp} type="email" placeholder='email'/> <br />
                <p className={cx((booleanEmail)?'err-msg' : 'hidden')}>*sai form rồi lè ^.^</p>
                <input className={cx('inp-SignUp')} value={inpPass} onChange={(e)=>setInpPass(e.target.value)} onInput={checkInp} type="password" placeholder='password'/> <br />
                <p className={cx((booleanPass)?'err-msg' : 'hidden')}>*sai form rồi lè ^.^</p>
                <input className={cx('inp-SignUp')} value={inpConfirmPass} onChange={(e)=>setInpConfirmPass(e.target.value)} onInput={checkInp} type="password" placeholder='confirm password'/> <br />
                <p className={cx((booleanConfirmPass)?'err-msg' : 'hidden')}>*mật khẩu không khớp ^.^</p>
                <button className={cx('bnt-signup')}>
                    SignUp
                </button>
                <h2>or <span className={cx('change')} onClick={toLogIn}>LogIn</span></h2>
            </form>


        </div>
        </>
     );
}

export default Login;