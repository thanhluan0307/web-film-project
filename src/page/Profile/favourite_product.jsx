import styles from '~/page/Profile/profile.module.scss'
import HomeStore from '~/components/HomeStore/homeStore';
import { useSelector } from "react-redux";

export const Favourite_Product = () => {
  const data = useSelector(state=>state.favourite)
  console.log(data);
  let link
  const domain = 'https://shope-b3.thaihm.site/'
  return (
    <div className={styles.wrapper}>
    <div className={styles.container}>
      <h1 className='text-center'>Sản phẩm yêu thích</h1>
      <div>
        <table className={styles.table} width={'100%'}>
          <thead>
            <tr>
              <td>Ảnh</td>
              <td>Tên sản phẩm</td>
              <td>Giá</td>
              <td>Hành động</td>
            </tr>
          </thead>
          <tbody>
           {
            data.map(item => {
              return (
            <tr>
              <td>
                <img className={styles.img_wishlist} src={""} alt="" />
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
              )
            })
           }
          </tbody>
        </table>
      </div>
      <HomeStore></HomeStore>
    </div>
  </div>
  )
}
