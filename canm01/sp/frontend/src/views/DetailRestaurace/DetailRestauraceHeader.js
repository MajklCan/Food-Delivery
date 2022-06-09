import React, { useState, useEffect, useContext } from 'react'
import { Row, Col, Container, Button, Image, Badge, Nav, Modal, Spinner } from 'react-bootstrap';
import { AppContext } from '../../context'
import useWindowSize from '../../hooks/useWindowSize';
import Icofont from 'react-icofont';

export const DetailRestauraceHeader = ({info}) => {

    const { state, dispatch } = useContext(AppContext)
    const size = useWindowSize();

    if(!info) return (<div>no data</div>)

  return (
    <section className={`restaurant-detailed-banner`}>
							{info.id &&
								<div className="text-center">
									<Image fluid className={`cover `} src={`https://www.jidlopodnos.cz/data/restaurace/mkarta/${info.id}.jpg`} onError={(e) => e.target.src = "https://old.jidlopodnos.cz/images/1/new_slide2_2.jpg"} />
								</div>
							}
							<div className="restaurant-detailed-header">
								<Container>
									<Row className="d-flex align-items-end">
										<Col className="offset-md-3" md={7}>

											{size.width >= 767.98 &&
												<Image fluid className="mr-3 float-left" alt="" src={info ? `https://www.jidlopodnos.cz/data/restaurace/logo/${info.id}.jpg` : ""} /> 
											}{/*onError={(e)=>{e.target.onerror = null;e.target.style.display="none" }} /e.target.src="/resources/logo.svg" */}
											
											
											<h2 className="text-white">{info ? info.name : "Restaurace"}</h2>
											
											{/* Delivery Time: */}
											<Button style={{ backgroundColor: "#c62727" }} type="button"> {info ? <><Icofont icon="clock-time" />{info.delivery_tmin + (Number(state?.location?.cas || 0))} - {info.delivery_tmax + (Number(state?.location?.cas || 0))}min</> : <><Spinner animation="grow" size="sm" className='mr-1' />Načítání...</>}
											</Button>

											<div style={{ "overflow": "auto" }}>
												
												{info && info.delivery_from && info.delivery_to && <>
												<br></br>
												<span className="text-white info-text">Dnes otevřeno: {info?.delivery_from?.slice(0,5)} - {info?.delivery_to?.slice(0,5)}</span></>
												}
												<br></br>
												<span className="text-white info-text">Místo pro rozvoz: {info && info.city}</span>
												<br></br>
												<span className="text-white">Minimální cena objednávky: {info && info.minimal_order} Kč</span>
												<br></br>
												<span className="text-white">Cena rozvozu: {info.doprava} Kč</span>
												<br></br>

												<span className="text-white">Platba kartou: {info && info.Cashless == 0 ? "Ne" : "Ano"}</span>
												<br></br>
												<span className="text-white">Platba stravenkami: {info && info.isVoucher == 0 ? "Ne" : "Ano"}</span>
											</div>

										</Col>
									</Row>
								</Container>
							</div>

						</section>
  )
}
