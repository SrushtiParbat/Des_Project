import React from 'react'
import './LeftNav.css'
// import {Navbar, Nav} from 'react-bootstrap';
import {Navbar, Nav} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChartBar, faBell, faGear, faCalendarDays, faIndianRupee, faMoneyBillTransfer, faRightFromBracket, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import dp from '../images/ProfilePicture.svg'


function LeftNav() {
  return (
    <div>
        <Navbar expand="md" className='nav d-md-block sidebar'>
            <div className='d-flex'>
                <Navbar.Brand href="/"><img src={dp} alt="Pay" className='logo2 d-block'/><span className='d-block text-center title2'> Hello, Srushti</span></Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="d-md-block">
                    <Nav.Link className='heading'  href="#">ADMINISTRATION</Nav.Link>
                    <Nav.Link className='items mt-0 pt-0' href="/login"><FontAwesomeIcon className='icons2' icon={faChartBar} style={{color:'white'}}/><span className='items2'> Dashboard</span></Nav.Link>
                    <Nav.Link className='heading ' href="#">MANAGEMENT</Nav.Link>
                    <Nav.Link className='items mt-0 pt-0' href="/login"><FontAwesomeIcon className='icons2' icon={faIndianRupee} style={{color:'white'}}/><span className='items2'> Add expenses</span></Nav.Link>
                    <Nav.Link className='items' href="/login"><FontAwesomeIcon className='icons2' icon={faMoneyBillTransfer}style={{color:'white'}}/><span className='items2'> Transactions</span></Nav.Link>
                    <Nav.Link className='items' href="/login"><FontAwesomeIcon className='icons2' icon={faUserGroup}style={{color:'white'}}/><span className='items2'> Friends</span></Nav.Link>
                    <Nav.Link className='heading' href="#">OTHER</Nav.Link>
                    <Nav.Link className='items' href="/login"><FontAwesomeIcon className='icons2' icon={faCalendarDays} style={{color:'white'}}/><span className='items2'> Reminders</span></Nav.Link>
                    <Nav.Link className='items' href="/signup"><FontAwesomeIcon className='icons2' icon={faBell} style={{color:'white'}}/><span className='items2'> Notifications</span></Nav.Link>
                    <Nav.Link className='items' href="/signup"><FontAwesomeIcon className='icons2' icon={faGear} style={{color:'white'}}/><span className='items2'> Settings</span></Nav.Link>
                    <Nav.Link className='items' href="/signup"><FontAwesomeIcon className='icons2' icon={faRightFromBracket} style={{color:'white'}}/><span className='items2'> Logout</span></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
  )
}

export default LeftNav
{/* <Nav.Link className='heading pb-0 mb-2' href="#">OTHER</Nav.Link> */}
