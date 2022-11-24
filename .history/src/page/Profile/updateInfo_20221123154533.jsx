import { useState, useEffect } from 'react';
import styles from '~/page/Profile/profile.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import isEmpty from 'validator/lib/isEmpty'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAPI, patchAPI } from '~/config/api';

export const UpdateInfo = () => {
  const [data, setData] = useState({})
  const [count, setCount] = useState(0)
  const [dateOfBirth, setdateOfBirth] = useState('1999-04-23')
  const [sex, setSex] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('0929690xxx')
  const [avatar, setAvatar] = useState()
  const [uploadAvatar, setUploadAvatar] = useState()
  const next = useNavigate()
  let avatarPath
  let inputName = document.querySelector("#name")
  let userName = document.querySelector("#username")
  const male = document.querySelector("#male");
  const female = document.querySelector("#female");

  const getData = async () => {
    try{
      let res = await getAPI('/auth/get-loged-in-user')
      avatarPath = res.data.user.avatar
      if(!avatarPath){
        avatarPath = 'https://64.media.tumblr.com/970f8c9047f214078b5b023089059228/4860ecfa29757f0c-62/s640x960/9578d9dcf4eac298d85cf624bcf8b672a17e558c.jpg'
      }
      else if(!avatarPath.startsWith('https')){
        avatarPath = process.env.REACT_APP_BASE_URL + avatarPath
      }
      setAvatar(avatarPath)
      setData(res.data.user)
      setSex(res.data.user.sex)
      setdateOfBirth((res.data.user.dateOfBirth.split('T'))[0].split('-').join('-'))
      setPhoneNumber(res.data.user.phone)
    }catch(err){
      console.log(err);
      // toast.error('Lỗi load data ^^')
    }
}
  useEffect(() => {
      getData()
    return () => {
      uploadAvatar && URL.revokeObjectURL(uploadAvatar.preview)
    }
  },[count, uploadAvatar])

  const handleUpdate = async () =>{
    try{
      if(isEmpty(inputName.value)){
        toast.error('Tên không được để trống')
      }
      else
      {
          uploadAvatar &&
          await patchAPI('/user/change-avatar', uploadAvatar)
        let res = await patchAPI('/user/update-info',
        {
          username: userName.value,
          fullname: inputName.value,
          dateOfBirth: dateOfBirth,
          sex: male.selected === true
          ? male.value
          : female.selected === true
          ? female.value
          : ''
          ,
          phone: phoneNumber
        }
        )
        setCount(count + 1)
        console.log(res);
        toast.success('Cập nhập thông tin thành công')
        next("/profile/update-info")
      }

    }catch(err){
      console.log(err);
      toast.error('Thay đổi thất bại ^^')
    }
  }

  const handlePreviewAvatar = (e) =>{
    next("/profile/update-info")
    const formData = new FormData()
    const file = e.target.files[0]
    file.preview = URL.createObjectURL(file)
    formData.append('avatar', file)
    setUploadAvatar(formData)
  }

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h1 className='text-center'>Thay đổi thông tin cá nhân</h1>
        <div className={styles.upload_avatar}>
          {/* <input type="file" name='input-file' id='input-file' accept="image/png, image/jpg, image/jpeg" onChange={handlePreviewAvatar}/> */}
          <input type="file" onChange={handlePreviewAvatar} />
          <div className={styles.upload_avatar_preview}>
            <img className={styles.avatar_preview} src={avatar} alt="Avatar" />
            {/* <span className="response text-center">Please select file</span> */}
            {/* <span className="size" style={{opacity: '0'}}>#</span> */}
          </div>
        </div>
				<form id={styles.formAcc}>
          <div className={styles.formcontrol}>
                <label htmlFor=''>Username:</label>
                <input
                  type='text'
                  id='username'
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
                id='phoneNumber'
                type='text'
                placeholder='Phone'
                value={phoneNumber}
                onChange={e=> setPhoneNumber(e.target.value)}
              />
            </div>
            <div className={styles.formcontrol}>
              <label htmlFor=''>Giới tính:</label>
              <select name="gender" id="gender" value={sex} onChange={(e) => setSex(e.target.value)}>
                <option id='male' value={'Nam'}>Nam</option>
                <option id='female' value={'Nữ'}>Nữ</option>
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
