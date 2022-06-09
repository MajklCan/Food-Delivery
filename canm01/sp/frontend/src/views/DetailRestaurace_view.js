import React,{useState,useEffect,useContext} from 'react'
import { Row, Col, Container, Button, Image, Badge, Nav, Modal, Spinner } from 'react-bootstrap';
import { AppContext } from '../context'
import useWindowSize from '../hooks/useWindowSize';

import { DetailRestauraceHeader } from './DetailRestaurace/DetailRestauraceHeader';
// import { DetailRestauraceMenu } from './DetailRestaurace/DetailRestauraceMenu';


export const DetailRestaurace_view = () => {

  const { state, dispatch } = useContext(AppContext)
  const size = useWindowSize();

  const [info, setInfo] = useState({})
  const [isFav, setIsFav] = useState(false)

  if(!info && !info.id){
    <>Načítání...</>
  }

  return (
    <div>DetailRestaurace_view
      <DetailRestauraceHeader/>
      {/* <DetailRestauraceMenu/> */}
      
    </div>
  )
}
