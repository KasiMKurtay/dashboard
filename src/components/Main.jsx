import React from 'react'
import { FaFileInvoice, FaShoppingCart } from 'react-icons/fa'
import { MdInventory2 } from 'react-icons/md'
import { IoIosNotifications } from 'react-icons/io'
import AreaCharts from './AreaCharts'
import BarCharts from './BarCharts'

const Main = () => {
  return (
    <div className='main-container'>
      <div className="main-title">{/* Ana yazı */}
      <p className='font-weight-bold'>Gösterge</p>
      </div>
      <div className="main-cards"> {/* Kartların bulunduğu alan */}

        <div className="card"> {/* Ürünlerin bulunacağı kart */}
      <div className="card-inner">
        <p className='text-primary'>Ürünler</p>
        <MdInventory2 className='text-blue' size="50px"/> {/* Ürünler ikonu - boyutunu belirledik ve rengini CSS'te atadığımız mavi rengi atadık */}
      </div>
    <span className='text-primary font-weight-bold'>249</span> {/* Ürün sayısı, yazı kalınlığı ve renk atandı */}
        </div>

        <div className="card"> {/* Alım siparişleri kart */}
      <div className="card-inner">
        <p className='text-primary'>Alım Siparişleri</p>
        <FaShoppingCart className='text-blue' size="50px"/> {/* Sepet ikonu - boyutunu belirledik ve rengini CSS'te atadığımız mavi rengi atadık */}
      </div>
    <span className='text-primary font-weight-bold'>82</span> {/* Alım sipariş sayısı, yazı kalınlığı ve renk atandı */}
        </div>
        
        <div className="card"> {/* Ürünlerin bulunacağı kart */}
      <div className="card-inner">
        <p className='text-primary'>Satış Siparişleri</p>
        <FaFileInvoice className='text-blue' size="50px"/> {/* Fatura ikonu - boyutunu belirledik ve rengini CSS'te atadığımız mavi rengi atadık */}
      </div>
    <span className='text-primary font-weight-bold'>100</span> {/* Satış Sipariş sayısı, yazı kalınlığı ve renk atandı */}
        </div>

        <div className="card"> {/* Ürünlerin bulunacağı kart */}
      <div className="card-inner">
        <p className='text-primary'>Envanter Uyarıları</p>
        <IoIosNotifications className='text-blue' size="50px"/> {/* Bildirim ikonu - boyutunu belirledik ve rengini CSS'te atadığımız mavi rengi atadık */}
      </div>
    <span className='text-primary font-weight-bold'>12</span> {/* Uyarı sayısı, yazı kalınlığı ve renk atandı */}
        </div>

    <div className="charts"> {/* Grafiklerin bulunduğu alan */}
      <BarCharts/>  {/* Çubuk Grafiğini aktarıyoruz*/}
      <AreaCharts/>  {/* Alan Grafiği*/}
      </div> 
      </div>
    </div>
  )
}

export default Main 