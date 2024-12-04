
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/footer/Footer'
import Packages from './components/Packages/Packages'
import Contact from './components/Contact/Contact'
import Testimonial from './components/Testimonial/Testimonial'
import AboutPage from './components/AboutPage/AboutPage'
import HotelPage from './components/HotelPage/HotelPage'
import FlightPage from './components/FlightPage/FlightPage'
import RegisterPage from './components/RegisterPage/RegisterPage'
import LoginPage from './components/LoginPage/LoginPage'
import DomesticTour from './components/DomesticTour/DomesticTour'
import InternationPage from './components/InternationPage/InternationPage'
import EducationTour from './components/EducationTour/EducationTour'
import SeminarPage from './components/SeminarPage/SeminarPage'
import WhyChooseUsPage from './components/WhyChooseUsPage/WhyChooseUsPage'
import MostPopularTour from './components/MostPopularTour/MostPopularTour'
import MostPopularDetail from './components/Most-Popular-Detail/MostPopularDetail'
import Categorytour from './components/CategoryTour/Categorytour'
import toast, { Toaster } from 'react-hot-toast';

// import LoginPage from './components/LoginPage/LoginPage'

function App() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Pack' element={<Packages/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/categorytour/:key' element={<Categorytour/>} />
        <Route path='/testimonial' element={<Testimonial/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/hotel' element={<HotelPage/>} />
        <Route path='/flight' element={<FlightPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/domestic' element={<DomesticTour/>} />
        <Route path='/internation' element={<InternationPage/>} />
        <Route path='/education' element={<EducationTour/>} />
        <Route path='/seminar' element={<SeminarPage/>} />
        <Route path='/whychoose' element={<WhyChooseUsPage/>} />
        <Route path='/Our-Tour-Package-Detail/:_id' element={<MostPopularDetail/>} />

        
      </Routes>
      <Footer/>
      <Toaster />
    </BrowserRouter>
  )
}

export default App
