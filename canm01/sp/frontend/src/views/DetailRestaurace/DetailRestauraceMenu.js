import React, { useState, useEffect, useContext } from 'react'
import { Row, Col, Container, Button, Image, Badge, Nav, Modal, Spinner } from 'react-bootstrap';
import { AppContext } from '../context'
import useWindowSize from '../hooks/useWindowSize';

export const DetailRestauraceMenu = () => {

    const { state, dispatch } = useContext(AppContext)
    const size = useWindowSize();

    return (<>
                    <section className={`offer-dedicated-nav bg-white shadow-sm  ${size.width < 767.98 && "d-none"}`}>

                        <div>
                            <Col className="left-padding" md={12}>
                                <span className="restaurant-detailed-action-btn float-right">

                                </span>
                               
                            </Col>
                        </div>

                    </section>
                    {size.width < 767.98 ?
                        <>
                            <div className="mt-3"></div>
                            {/* <CheckoutCart isInCheckout={isInCheckout} minimal_order={minimal_order} info={info} isOpen={isOpen} submitNewOrder={submitNewOrder} hideFinishButton={true} /> */}
                        </>
                    : ""}
   
               </>
    )
}

