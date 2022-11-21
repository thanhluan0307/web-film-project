import styles from '~/page/Profile/profile.module.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { patchAPI } from '../../config/api';

export const ChangePassword = () => {

  const nav = useNavigate()

  const handleUpdate = async () =>{
    try{
      const oldPass = document.querySelector('#oldPass').value
      const newPass = document.querySelector('#newPass').value
      const confirmPass = document.querySelector('#confirmPass').value
      if(oldPass === ''){
        toast.error('Mật khẩu cũ không được để trống')
      }
      if(newPass === ''){
        toast.error('Mật khẩu mới không được để trống')
      }
      if(confirmPass === ''){
        toast.error('Vui lòng nhập lại mật khẩu')
      }
      else if(confirmPass !== newPass){
        toast.error('Mật khẩu không trùng khớp')
      }
      await patchAPI('/user/change-password', {
        oldPass: oldPass,
        newPass: newPass
      })
      .then(res => {
        toast.success('Đổi mật khẩu thành công ! Bạn sẽ được chuyển đến trang đăng nhập ngay bây giờ !')
        window.localStorage.removeItem('Token')
        window.localStorage.removeItem('email')
        nav('/login')
      })
      .catch(err => console.log(err))
    }catch(err){
      console.log(err);
      toast.error('Đổi mật khẩu thất bại !')
    }
  }
  return (
    <div className={styles.wrapper}>
			<div className={styles.container}>
				<h1 className='password-center'>Thay đổi mật khẩu</h1>
        <input type="file"/>
        <img className={styles.avatar} src="https://64.media.tumblr.com/970f8c9047f214078b5b023089059228/4860ecfa29757f0c-62/s640x960/9578d9dcf4eac298d85cf624bcf8b672a17e558c.jpg" alt="avatar" />
				<form id={styles.formAcc}>
            <div className={styles.formcontrol}>
              <label htmlFor=''>Mật khẩu cũ:</label>
              <input
                name='oldPass'
                id='oldPass'
                type='password'
                placeholder='Vui lòng nhập mật khẩu cũ'
              />
            </div>
            <div className={styles.formcontrol}>
                <label htmlFor=''>Mật khẩu mới:</label>
                <input
                  type='password'
                  id='newPass'
                  placeholder='Vui lòng nhập mật khẩu mới'
                />
            </div>
            <div className={styles.formcontrol}>
              <label htmlFor=''>Nhập lại mật khẩu mới:</label>
              <input
                type='password'
                id='confirmPass'
                placeholder='Vui lòng nhập lại mật khẩu mới'
              />
            </div>
            <button type='button' className={styles.btn} onClick={handleUpdate}>Cập nhập mật khẩu</button>
            <Link to={'/profile'}></Link>
              <ToastContainer
                position="top-right"
                autoClose={500}
                hideProgressBar={true}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
              <ToastContainer />
				</form>
			</div>
		</div>
  )
}
