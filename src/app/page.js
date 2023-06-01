"use client";
import Navbar from "./components/Navbar/Navbar"
import HomePage from "./pages/Home"
import CardPage from "./pages/CardPage"
import './styles/style.css'
import Destination from "./pages/Destination"
import Section from "./pages/Section"
import Footer from "./pages/footer"
import Featured from "./pages/Featured"
import Card from "./pages/Card"
import ShopSection from "./pages/ShopSection"
import SectionBrowse from "./pages/SectionBrowse"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../../node_modules/bootstrap/dist/js/bootstrap.js";

export default function Home() {
  return (
 <div>

  <Navbar/>
  <HomePage/>
  <CardPage/>
  <Destination/>
  <ShopSection/>
  <Featured/>
  <SectionBrowse/>
  <Card/>
  <Section/>
  <Footer/>
    
 </div>
  )
}
