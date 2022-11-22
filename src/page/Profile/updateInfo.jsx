import { useState, useEffect } from 'react';
import styles from '~/page/Profile/profile.module.scss';
import { Link } from 'react-router-dom';
import isEmpty from 'validator/lib/isEmpty'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAPI, patchAPI } from '~/config/api';

export const UpdateInfo = () => {
  const [data, setData] = useState({})
  const [count, setCount] = useState(0)
  const [dateOfBirth, setdateOfBirth] = useState('1999-04-23')
  const [sex, setSex] = useState('')
  let avatarPath
  const domain = 'https://shope-b3.thaihm.site/'
  let inputName = document.querySelector("#name")

  const getData = async () => {
    try{
      let res = await getAPI('/auth/get-loged-in-user')
      avatarPath = res.data.user.avatar
      if(!avatarPath){
        avatarPath = 'https://64.media.tumblr.com/970f8c9047f214078b5b023089059228/4860ecfa29757f0c-62/s640x960/9578d9dcf4eac298d85cf624bcf8b672a17e558c.jpg'
      }
      else if(!avatarPath.startsWith('https')){
        avatarPath = domain + avatarPath
      }

      console.log(avatarPath);
      setData(res.data.user)
      setSex(res.data.user.sex)
      setdateOfBirth((res.data.user.dateOfBirth.split('T'))[0].split('-').join('-'))
    }catch(err){
      console.log(err);
      toast.error('Lỗi load data ^^')
    }
}

  useEffect(() => {
    getData()
  },[count])

  const handleUpdate = async () =>{
    try{
      if(isEmpty(inputName.value)){
        toast.error('Tên không được để trống')
      }
      else
      {
        let res = await patchAPI('/user/update-info',
        {
          fullname: inputName.value,
          dateOfBirth: dateOfBirth,
          sex: sex,
          phone: data.phone
        }
        )
        setCount(count + 1)
        console.log(res);
        toast.success('Đổi thông tin thành công')
      }

    }catch(err){
      console.log(err);
      toast.error('Thay đổi thất bại ^^')
    }
  }

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h1 className='text-center'>Thay đổi thông tin cá nhân</h1>
        <div className={styles.upload_avatar}>
          <input type="file"/>
          <img className={styles.avatar} src="https://64.media.tumblr.com/970f8c9047f214078b5b023089059228/4860ecfa29757f0c-62/s640x960/9578d9dcf4eac298d85cf624bcf8b672a17e558c.jpg" alt="avatar" />
        </div>
				<form id={styles.formAcc}>
          <div className={styles.formcontrol}>
                <label htmlFor=''>Username:</label>
                <input
                  type='text'
                  placeholder='Username'
                  defaultValue={data.username}
                />
          </div>
            <div className={styles.formcontrol}>
              <label htmlFor=''>Họ tên:</label>
              <input
                name='name'
                id='name'
                type='text'
                placeholder='Họ tên'
               defaultValue={data.fullname}
              />
            </div>
            <div className={styles.formcontrol}>
                <label htmlFor=''>Ngày sinh:</label>
                <input
                  type={'date'}
                  id='dateOfBirth'
                  placeholder='Ngày sinh'
                  value={dateOfBirth}
                  onChange={e => setdateOfBirth(e.target.value)}
                />
            </div>
            <div className={styles.formcontrol}>
              <label htmlFor=''>Email:</label>
              <input
                readOnly
                name='email'
                type='text'
                placeholder='Email'
                defaultValue={data.email}
              />
            </div>
            <div className={styles.formcontrol}>
              <label htmlFor=''>Số điện thoại:</label>
              <input
                name='phone'
                type='text'
                placeholder='Phone'
                defaultValue={data.phone ? data.phone : '0929690xxx'}
              />
            </div>
            <div className={styles.formcontrol}>
              <label htmlFor=''>Giới tính:</label>
              <select name="gender" id="gender" value={sex} onChange={e => console.log(setSex(e.target.value))}>
                <option value="0">male</option>
                <option value="1">female</option>
              </select>
            </div>
            <div className={styles.formcontrol}>
            <button type='button' className={styles.btn} onClick={handleUpdate}>Cập nhập thông tin</button>
            <Link to={'/profile'}><button className={styles.btn}>Back</button></Link>
            </div>
            <ToastContainer
              position="top-right"
              autoClose={500}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              />
				</form>
			</div>
		</div>
	);
};
