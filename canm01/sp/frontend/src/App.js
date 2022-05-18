import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { AppContextProvider } from './context'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
//import dotenv from 'dotenv'

// Styles
import './styles/Default.scss';

//Componenents
import Helmet from 'helmet'
import Header from './components/Header';
import Footer from './components/Footer';
import { NabidkaRestaurace_view } from './views/NabidkaRestaurace_view'
import { DetailRestaurace_view } from './views/DetailRestaurace_view'
import 'bootstrap/dist/css/bootstrap.min.css';
import { DokoncitObjednavku_view } from './views/DokoncitObjednavku_view';
import { Login_view } from './views/Login_view';
import { Registrovat_view } from './views/Registrovat_view';
import { MujUcetObjednavky_view } from './views/MujUcetObjednavky_view';
import { MujUcet_view } from './views/MujUcet_view';

function App() {
//   const [data, setData] = useState();

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await axios.post(`http://localhost/php_react/backend/api/post/read.php`);
//       setData(data.data)
//     }
//     fetchData();
//   }, [])


  return (
    <AppContextProvider >
      {/* <Helmet>
            <title>Vše Food Delivery</title>
          </Helmet> */}
      {/* {
            (this.props.location.pathname!=='/login' && this.props.location.pathname!=='/register') ? <Header userLoggedIn = {false}/>:''
          } */}

      <Header userLoggedIn={false} />
      <Container fluid className="contentWrap">
        <Row>
          <Col/>
          <Col xs={10}>

            <BrowserRouter>
              <Routes>
                <Route path="/" element={<NabidkaRestaurace_view />} />
                <Route path="/nabidka-restauraci" element={<NabidkaRestaurace_view />} />
                <Route path="/nabidka-restauraci/:restaurace" element={<DetailRestaurace_view />} />
                <Route path="/dokoncit-objednavku" element={<DokoncitObjednavku_view />} />
                <Route path="/login" element={<Login_view />} />
                <Route path="/registrovat" element={<Registrovat_view />} />
                <Route path="/muj-ucet" element={<MujUcet_view />} />
                <Route path="/muj-ucet/objednavky" element={<MujUcetObjednavky_view />} />
              </Routes>
            </BrowserRouter>

          </Col>
          <Col/>
        </Row>
        


      </Container>
      <Footer />

    </AppContextProvider >
  );
}

export default App;
