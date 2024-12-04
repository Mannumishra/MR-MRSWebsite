import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from '../Header/Header'
import Dashboard from '../../Pages/Dashboard/Dashboard'
import Login from '../auth/Login'
import AllHotel from '../../Pages/HotelInquery/AllHotel'
import AllCityPackage from '../../Pages/CityPackage/AllCityPackage'
import AddCityPackage from '../../Pages/CityPackage/AddCityPackage'
import EditCityPackage from '../../Pages/CityPackage/EditCityPackage'
import AllPackage from '../../Pages/Package/AllPackage'
import AddPackage from '../../Pages/Package/AddPackage'
import AllFlight from '../../Pages/Flight/AllFlight'
import AllContactInquery from '../../Pages/ContactInquery/AllContactInquery'
import AllPackageInquery from '../../Pages/PackageInquery/AllPackageInquery'

const Home = () => {
  const login = sessionStorage.getItem("login")
  return (
    <>
      {login ? (
        <>
          <Header />
          <div className="rightside">
            <Routes>
              <Route path={"/dashboard"} element={<Dashboard />} />

              {/* Category --  */}
              <Route path={"/all-city-package"} element={<AllCityPackage />} />
              <Route path={"/add-city-package"} element={<AddCityPackage />} />
              <Route path={"/edit-city-package/:_id"} element={<EditCityPackage />} />

              {/* Product --  */}
              <Route path={"/all-package"} element={<AllPackage />} />
              <Route path={"/add-package"} element={<AddPackage />} />

              {/* --- Vouchers --- */}
              <Route path={"/all-package-inquery"} element={<AllPackageInquery />} />  
              
              {/* --- Tags --- */}
              <Route path={"/all-flight"} element={<AllFlight />} />

              {/* --- Banners --- */}
              <Route path={"/all-hotel"} element={<AllHotel />} />

              {/* --- Banners --- */}
              <Route path={"/all-contact-inquery"} element={<AllContactInquery />} />
            

            </Routes>
          </div>
        </>
      ) : (
        <Routes>
          <Route path="*" element={<Login />} />
        </Routes>
      )}
    </>
  )
}

export default Home