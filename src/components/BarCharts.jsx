import React from 'react'
import Chart from 'react-apexcharts'

const BarCharts = () => {
  const BarChartsOptions = {
    series: [
      {
        data: [10, 8, 6, 4, 2, 0], // Çubuk grafik için veri seti
      },
    ],
    chart: {
      type: "bar", // Grafik türünü çubuk grafik olarak belirleme
      height: "3", // Grafiğin yüksekliği
      toolbar: {
        show: false, // Araç çubuğunu gizleme
      },
    },
    colors: ["#246dec", "#cc3c43", "#367952", "#f5b74f", "#4f35a1"], // Çubuk renkleri
    plotOptions: {
      bar: {
        distributed: true, // Çubukların eşit olarak dağıtılması
        borderRadius: 4, // Çubukların kenar yuvarlaklığı
        horizontal: false, // Yatay yerine dikey çubuk grafik kullanma
        columnWidth: "40%", // Çubuk genişliği
      },
    },
    dataLabels: {
      enabled: false, // Veri etiketlerini devre dışı bırakma
    },
    legend: {
      show: false, // Grafik legend'ını gizleme
    },
    xaxis: {
      categories: ["Laptop", "Telefon", "Monitör", "Kulaklık", "Kamera"], // X ekseni kategorileri
    },
    yaxis: {
      title: {
        text: "Sayım", // Y ekseni başlığı
      },
    },
  }

  return (
    <div className='charts-card'> {/* Grafik bileşeninin kapsayıcı div'i */}
      <p className='chart-title'>En İyi Beş Ürün</p> {/* Grafik başlığı */}
      <Chart
        options={BarChartsOptions} // Grafik seçeneklerini belirleme
        series={BarChartsOptions.series} // Grafik veri serisini ekleme
        type='bar' // Grafik türünü belirleme
        height={350} // Grafiğin yüksekliği
      />
    </div>
  )
} 

export default BarCharts // Bileşeni dışa aktarma
