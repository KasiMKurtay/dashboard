import React from 'react'
import { FaBoxes, FaCog, FaFileInvoice, FaPoll, FaShoppingCart } from 'react-icons/fa'
import { MdDashboard, MdInventory2 } from 'react-icons/md'
import { IoClose } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import {setSideBar} from '../slices/genelSlice'

const Sidebar = () => {
  const dispatch = useDispatch();
  const {sidebarClose} = useSelector(state => state.genelState)

  return (
    <aside className={sidebarClose ? "sidebar-responsive" : ""} id='sidebar'>
      <div className="sidebar-title">{/* Sidebar başlık */}
        <div className="sidebar-brand">
          <MdInventory2 />Envanter {/* Sidebar başlık ikonu ve metni */}
        </div>
        <IoClose 
        onClick={()=> dispatch(setSideBar(!sidebarClose))}
        className='cursor-pointer'
        style={{marginLeft:"15px", display:`${sidebarClose ? "initial" :"none"}`}}
        size="28px"/>
      </div>
    <ul className="sidebar-list"> {/*Sidebar Menü listesi */}
    <li className="sidebar-list-item">
      <a href="#">
        <MdDashboard/>Gösterge {/*Gösterge Menü Öğesi*/}
      </a>
    </li>
    <li className="sidebar-list-item">
      <a href="#">
        <FaBoxes/>Ürünler {/*üRÜNLER Menü Öğesi*/}
      </a>
    </li>
    <li className="sidebar-list-item">
      <a href="#">
        <FaFileInvoice/>Envanter {/*Envanter Menü Öğesi*/}
      </a>
    </li>
    <li className="sidebar-list-item">
      <a href="#">
        <FaShoppingCart/>Alım Siparişleri {/*Gösterge Menü Öğesi*/}
      </a>
    </li>
    <li className="sidebar-list-item">
      <a href="#">
        <FaShoppingCart/>Satış Siparişleri {/*Satış Siparişerli  Öğesi*/}
      </a>
    </li>
    <li className="sidebar-list-item">
      <a href="#">
        <FaPoll/>Raporlar {/*Raporlar Öğesi*/}
      </a>
    </li>
    <li className="sidebar-list-item">
      <a href="#">
        <FaCog/>Ayarlar {/*Ayarlar  Öğesi*/}
      </a>
    </li>
    </ul>
    </aside>
  )
}

export default Sidebar