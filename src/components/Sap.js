import React from 'react'
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoneyBill, faCreditCard, faMoneyBillTransfer} from '@fortawesome/free-solid-svg-icons';
import "./Sap.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BarGraph from './BarGraph';
import Pipi from './Pipi';


function Sap(){
    return(
        <div>
            <Container>
                <Row>
                    <Col sm>
                        <Card classname="card">
                            <Card.Body>
                            <Card.Title>Balance</Card.Title>
                            <Card.Text>
                                <FontAwesomeIcon icon={faMoneyBill} />  Rs. 5000
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm>
                        <Card classname="card">
                            <Card.Body>
                            <Card.Title>Credit</Card.Title>
                            <Card.Text>
                            <FontAwesomeIcon icon={faCreditCard} />  9
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm>
                        <Card classname="card">
                            <Card.Body>
                            <Card.Title>Debit</Card.Title>
                            <Card.Text>
                            <FontAwesomeIcon icon={faMoneyBillTransfer} />  8
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm>
                        <Card classname="bargraph">
                            <Card.Body>
                            <Card.Title>Monthly Expenditure</Card.Title>
                            <BarGraph/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm>
                        <Card classname="pie">
                            <Card.Body>
                            <Card.Title>Sectors</Card.Title>
                            <Pipi/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
        
    )
}


export default Sap