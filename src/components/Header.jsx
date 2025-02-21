import React from 'react'
import { FaBars, FaBell, FaEnvelope, FaUserCircle } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { setSideBar } from '../slices/genelSlice'


const Header = () => {
const dispatch = useDispatch() /* Redux dispatch fonksiyonunu tanımlama*/
const { sidebarClose } = useSelector(state => state.genelState) /* Redux state'inden sidebar durumu alma*/

  return (
  <header className='header'>
    <div className="menu-icon"> {/* Menü ikonunu ekliyoruz */}
    <FaBars
     onClick={() => dispatch(setSideBar(!sidebarClose))} // Sidebar'ı aç/kapat fonksiyonu
    className='cursor-pointer'
    size="28px"
    />
    </div>
    <div className="header-left"> {/* SearchBar kısmı*/}
      {/* Search */}
    </div>
    <div className="header-right"> {/* Sağ taraf*/}
    <FaBell/> {/* Bildirim İkonu*/}
    <FaEnvelope /> {/* Mesaj İkonu*/}
    <FaUserCircle /> {/* Kullanıcı Profil İkonu*/}
    </div>
  </header>
  )
}

export default Header