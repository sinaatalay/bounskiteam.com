import React from "react"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { Helmet } from "react-helmet"
import Logo from "../images/logo.svg"

export default function Home() {
  return (
    <div>
      <Helmet
        htmlAttributes={{
          lang: "tr",
        }}
      >
        <meta charSet="utf-8" />
        <title>Bogazici University Ski Team</title>
      </Helmet>
      <header className="background h-full w-full p-6 2xl:px-96 md:px-36 lg:py-20 text-slate-100 lg:text-3xl md:text-xl text-lg">
        <nav className="flex flex-row justify-around lg:justify-between items-center">
          <Logo className="w-44 h-44" />
          <ul className="flex-row font-bold hidden lg:flex">
            <li className="ml-24">
              <a href="#hakkimizda" className="hover:text-slate-500 transition ease-out duration-200">Hakkımızda</a>
            </li>
            <li className="ml-24">
              <a href="#basarilarimiz" className="hover:text-slate-500 transition ease-out duration-200">Başarılarımız</a>
            </li>
          </ul>
        </nav>
        <div className="w-full my-80 text-center xl:text-left">
          <h1 className="font-bold tracking-widest lg:text-7xl text-5xl">
            Bogazici University
            <br /> Ski Team
          </h1>
        </div>
      </header>
      <section className="p-6 2xl:px-96 ">
        <div
          id="hakkimizda"
          className="flex flex-col lg:flex-row items-center my-8 justify-between"
        >
          <div className="lg:w-3/5 lg:pr-6">
            <h2>Hakkımızda</h2>
            <p>
              1983 yılındaki kuruluşumuzdan beri antrenmanlar, yarışlar ve tabi
              partilerde mezun ve öğrencimizle birlikte sürekli büyüyen bir
              takımız.
            </p>
          </div>
          <img src="/erzurum.jpg" alt="Erzurum" className="mt-4 lg:mt-0 lg:w-2/5" />
        </div>
        <div
          id="basarilarimiz"
          className="flex flex-col lg:flex-row-reverse items-center my-8 justify-between"
        >
          <div className="lg:w-3/5">
            <h2>Başarılarımız</h2>
            <p>
              Başarılarımızdan birkaç örnek:
              <ul class="list-disc list-inside">
                <li>90’larda birçok kez kadınlar Türkiye şampiyonluğu</li>
                <li>Üniversite Kış Olimpiyatları’na gönderilen 18 sporcu</li>
                <li>
                  2014’te Üniversiteler Türkiye Kayak Şampiyonası’nda kadınlar
                  takım 2.'liğimiz
                </li>
                <li>
                  2020'de Üniversiteler Türkiye Senkronize Kayak Şampiyonası’nda
                  Türkiye 2.'liğimiz
                </li>
                <li>
                  2021'da Üniversiteler Türkiye Kayak Şampiyonası’nda İstanbul
                  erkekler takım 3.'lüğümüz
                </li>
                <li>
                  2021'da Üniversiteler Türkiye Kayak Şampiyonası’nda İstanbul
                  erkekler takım 3.'lüğümüz
                </li>
              </ul>
            </p>
          </div>
          <img src="/basari.jpg" alt="Başarı" className="mt-4 lg:mt-0 lg:w-2/5 lg:pr-6" />
        </div>
        <div className="flex flex-col lg:flex-row items-center my-8 justify-between">
          <div className="lg:w-3/5  lg:pr-6">
            <h2>Kış Etkinliklerimiz</h2>
            <p>
              Bizim için kış etkinliklerimiz hem antrenman hem de eğlence
              amaçlıdır. Gece dörtlere kadar eğlenip sabah sekizde pist başı
              yapmaya hazırlıklı olmalısınız.
            </p>
          </div>
          <img src="/takim.jpg" alt="Takım fotoğrafı" className="mt-4 lg:mt-0 lg:w-2/5" />
        </div>
        <div className="flex flex-col lg:flex-row-reverse items-center my-8 justify-between">
          <div className="lg:w-3/5">
            <h2>Dağ Dışı Etkinliklerimiz</h2>
            <p>
              Dağda olmadığımız zamanlarda da, her sene düzenlenen takım
              mangallarımız, fasıllarımız ve spor kurulunun çılgın partileri ile
              takım olarak bolca eğleniyoruz.
            </p>
          </div>
          <img src="/mangal.jpg" alt="Mangal" className="mt-4 lg:mt-0 lg:w-2/5 lg:pr-6" />
        </div>
        <div className="flex flex-col lg:flex-row items-center mt-8 justify-between">
          <div className="lg:w-3/5 lg:pr-6">
            <h2>Antrenmanlarımız</h2>
            <p>
              Sezon açılmadan, okul dönemi boyunca Uçaksavar Kampüsü Spor
              Tesislerinde haftada iki gün anternman yapıyoruz. Antrenmanlardan
              sonra hep beraber yemeğe gitmek de takım geleneklerimizin bir
              parçasıdır. Dağda olduğumuz her gün ise bizim için antrenman
              demektir.
            </p>
          </div>

          <img src="/kayak.jpg" alt="Kayak yarışçısı" className="mt-4 lg:mt-0 lg:w-2/5" />
        </div>
      </section>

      <footer className="flex flex-row p-6 2xl:px-96 items-center justify-between">
        <p>
          Copyright © {new Date().getFullYear()} Bogazici University Ski Team
        </p>
        <a href="https://instagram.com/bounskiteam" title="Instagram">
          <FaInstagram className="text-5xl text-blue-500 hover:text-blue-900 transition ease-out duration-200 hidden lg:inline" />
        </a>
      </footer>
    </div>
  )
}
