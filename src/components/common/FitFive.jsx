import React, { Children } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
export const FitFive = ({ fit_img, fit_para, children, hover_border, product }) => {
    const childarray = Children.toArray(children);
    return (
      <div className='bg-black py-5'>
          <Container>
              <div className=' d-flex flex-column align-items-center pb-5 '>
                  <span><img src={fit_img} className='w-100' /></span>
                  <p className='text-white text-center fs_16 ff_poppins fw-light mx_1000 pt-3'>{fit_para}</p>
                  {childarray [0]}
              </div>
              <Row>
                  {product.map((card) => {
                      return (
                          <Col md={6} xs={12} key={card.id} className='mb-3'>
                              <div className={`bg_box h-100 justify-content-between mb-3 d-flex flex-column ${hover_border}`}>
                                  <div className='pt-2 ps-2'>
                                      <img src={card.img} className='ms-1 pt-4 mt-1' width={80} height={70} />
                                      <p className=' text-white mt-3 pt-1 pb-2 ps-4 ms-1'>{card.heading}</p>
                                  </div>
                                  <div className='bottom_box p-4 rounded-3'>
                                      <p className='mb-0 text-white'>{card.para}</p>
                                </div>
                              </div>
                          </Col>
                      )
                  })}
              </Row>
          </Container>
    </div>
  )
}
