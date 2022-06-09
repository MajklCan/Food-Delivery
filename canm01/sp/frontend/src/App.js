import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { AppContextProvider } from './context'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import {ErrorBoundary} from 'react-error-boundary'
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
import HeaderAdmin from './components/HeaderAdmin';
import RestauraceAdmin_view from './views/admin/RestauraceAdmin_view'
import RestauraceVytvoritAdmin_view from './views/admin/RestauraceVytvoritAdmin_view';
import RestauraceUpravitAdmin_view from './views/admin/RestauraceUpravitAdmin_view';
import CategoryUpravitAdmin_view from './views/admin/CategoryUpravitAdmin_view';
import CategoryVytvoritAdmin_view from './views/admin/CategoryVytvoritAdmin_view';
import ProductVytvoritAdmin_view from './views/admin/ProductVytvoritAdmin_view';
import ProductUpravitAdmin_view from './views/admin/ProductUpravitAdmin_view';

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

      {/* if i am in admin section */}
      {window.location.pathname.includes('/admin') ? <HeaderAdmin /> : <Header userLoggedIn={false} />}

      <Container fluid className="contentWrap">
        <Row>
          <Col />
          <Col xs={10}>

          <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => {
                // reset the state of your app so the error doesn't happen again
              }}
            >

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
                {/* admin */}
                <Route path="/admin/restaurace" element={<RestauraceAdmin_view />} />
                <Route path="/admin/restaurace/nova" element={<RestauraceVytvoritAdmin_view />} />
                <Route path="/admin/restaurace/upravit/:id" element={<RestauraceUpravitAdmin_view />} />
                <Route path="/admin/kategorie/upravit/:idOfRestaurant/:idOfCategory" element={<CategoryUpravitAdmin_view />} />
                <Route path="/admin/kategorie/nova/:idOfRestaurant" element={<CategoryVytvoritAdmin_view />} />
                <Route path="/admin/produkt/nova/:idOfRestaurant/:idOfCategory" element={<ProductVytvoritAdmin_view />} />
                <Route path="/admin/produkt/upravit/:idOfRestaurant/:idOfCategory/:idOfProduct" element={<ProductUpravitAdmin_view />} />
              </Routes>
            </BrowserRouter>
            </ErrorBoundary>
          </Col>
          <Col />
        </Row>



      </Container>
      <Footer />

    </AppContextProvider >
  );
}

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p>Chyba:</p>
      <pre>{error.message}</pre>
      <pre><small>{error.stack}</small></pre>
      <button onClick={resetErrorBoundary}>Načíst znovu</button>
    </div>
  )
}

export default App;
