import React from "react";
import Chart from "react-apexcharts";

const AreaCharts = () => {
  const areaChartsOptions = {
    //Area charts adında fonksiyon oluşturuyoruz
    series: [
      //Grafik için yapılandırma nesnesi tanımladık
      {
        name: "Alım Siparişlleri", //İlk serimizin adı.
        data: [31, 45, 21, 43, 1, 445, 6, 213], //İlk serinin verileri.
      },
      {
        name:"Satış Siparişleri", //İkinci serimizin adı
        data:[11,32,35,63,2,66,99,1,2,45,33] //İkinci serinin verileri
      },
    ],
    chart:{
      type:"area",//Grafik türünü "area" (alan grafiği) olarak belirledik.
    height:"350px", //Grafiğin yüksekliği belirlendi
    toolbar:{
      show:false,//Grafiğin üstüne görünmeyen bir araç oluşturduk
    },
    },
    colors:["#008FFB","#00E396"],//Seriler için renklerini belirledik
    dateLabels:{
      enable:false, // Tarih etiketlerini devre dışı bırakıyoruz
    },
    stroke:{
      curve:"smooth", //Eğriliği düzleştiriyoruz
    },
    labels: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz"],//X ekseni tarihlerini ekledik
    markers:{
      size:0, //Grafik üzerindeki veri noktalarının boyutunu sıfır yapıyoruz
    },
    yaxis:[ //Y ekseni ayarlarını tanımlicaz
      {
        title:{
          text:"Alım Siparişleri", //İlk Y ekseni başlığını belirliyoruz
        },
      },
      {
        opposite:true, //İkinci Y eksenini sağ tarafa taşıdık
        title:{
          text:"Satış Siparişleri", //İkinci Y ekseni başlığını belirliyoruz
        },
      },
    ],
    tooltip:{
      shared:true, // Araç ipuçlarını iki seri için de paylaşılabilir hale getiriyoruz.
      intersect: false, // İmleç yalnızca kesişim noktalarında etkin olmayacak şekilde ayarlanıyor.
    },
  };
  return(
    <div className="charts-card">
      <p className="chart-title">Alım ve Satıl Siparişleri</p>
      <Chart
      options={areaChartsOptions}
      series={areaChartsOptions.series}
      type="area"
      height={350}
      />
    </div>
  );
};

export default AreaCharts;
