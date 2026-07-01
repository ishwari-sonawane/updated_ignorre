import { Routes, Route } from "react-router-dom";
import './App.css'
import Header from './Header.jsx'
import Home from './Home.jsx'
import Product from './Product.jsx'
import Domain from './Domain.jsx'
import Dns from './Dns.jsx'
import Email from './Email.jsx'
import Seo from './Seo.jsx'
import Ai from './Ai.jsx'
import Features from "./Features.jsx";
import Pricing from "./Pricing.jsx";
import Testimonial from './Testimonial.jsx'
import Faq from "./Faq.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import Domain_Control from "./Domain_Control.jsx";
import Hosting_Automation from "./Hosting_Automation.jsx";
import Server_Monitoring from "./Server_Monitoring.jsx";
import Subscription_Hub from "./Subscription_Hub.jsx";

function App() {
  return (
 <div className="overflow-x-hidden">
  <Header />

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/product" element={<Product />} />
    <Route path="/domain" element={<Domain />} />
    <Route path="/dns" element={<Dns />} />
    <Route path="/email" element={<Email />} />
    <Route path="/seo" element={<Seo />} />
    <Route path="/ai" element={<Ai />} />
    <Route path="/features" element={<Features />} />
    <Route path="/Domain_Control" element={<Domain_Control/>}/>
    <Route path="/Hosting_Automation" element={<Hosting_Automation/>}/>
    <Route path="/Server_Monitoring" element={<Server_Monitoring/>}/>
    <Route path="/Subscription_Hub" element={<Subscription_Hub/>}/>
    
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/testimonial" element={<Testimonial />} /> 
    <Route path="/faq" element={<Faq />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</div>
  )
}

export default App
