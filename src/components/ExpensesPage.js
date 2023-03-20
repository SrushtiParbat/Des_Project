import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Card from 'react-bootstrap/Card';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons';
import { Container } from 'mdbreact';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ExpensesPage = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date());

   function handleKeypadClick(value) {
     setAmount(prevAmount => prevAmount + value);
   }

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <div classname="container">
      <Container>
        <Row>
          <Col>
      <Card style={{ width: '30rem', height: '42rem'}}>
          <span className="square bg-primary rounded-9"></span>
            <Card.Body>
            <Card.Title style={{ width: '15rem', height: '7rem',position:'relative', left:'95px', fontSize:'26px'}}><FontAwesomeIcon icon={faIndianRupeeSign} />  Add Expense</Card.Title>
            <Card.Text>
            <form onSubmit={handleSubmit}>
              <div><label htmlFor="title" style={{fontFamily:'cursive', fontSize:'20px'}}>Title</label></div>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <div><label htmlFor="amount" style={{fontFamily:'cursive', fontSize:'18px', paddingTop:'30px'}}>Amount</label></div>

              <input
                type="text"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <div>
              <label htmlFor="date" style={{fontFamily:'cursive', fontSize:'18px', paddingTop:'39px'}}>Date and Time</label>
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat=" yyyy/MM/dd      hh:mm aa"
              />
              
              </div>
              
              <div>
              <div><label htmlFor="category" style={{fontFamily:'cursive', fontSize:'18px', paddingTop:'40px',}}>Category</label></div>
              <select id="category">
                <option value="food">Food</option>
                <option value="shopping">Shopping</option>
                <option value="travel">Travel</option>
                <option value="medical">Medical</option>
                <option value="others">Others</option>
              </select>
              </div>
              
              <div><button type="submit" style={{paddingTop:'1px', backgroundColor:'purple', fontWeight:'bold', borderRadius:'4px', fontColor:'#ffffff', margin:'20px'}}>Add Expense</button></div>
              
            </form>             
            </Card.Text>
            </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card style={{ width: '30rem', height: '42rem', position:'absolute', right:'100px'}}>
          <span className="square bg-primary rounded-9"></span>
            <Card.Body>
            <Card.Title style={{ width: '15rem', height: '7rem',position:'relative', left:'95px', fontSize:'26px'}}><FontAwesomeIcon icon={faIndianRupeeSign} />  Add Income</Card.Title>
            <Card.Text>
            <form onSubmit={handleSubmit}>
              <div><label htmlFor="title" style={{fontFamily:'cursive', fontSize:'20px'}}>Title</label></div>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <div><label htmlFor="amount" style={{fontFamily:'cursive', fontSize:'18px', paddingTop:'30px'}}>Amount</label></div>

              <input
                type="text"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <div>
              <label htmlFor="date" style={{fontFamily:'cursive', fontSize:'18px', paddingTop:'39px'}}>Date and Time</label>
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat=" yyyy/MM/dd      hh:mm aa"
              />
              
              </div>
              
              <div>
              <div><label htmlFor="category" style={{fontFamily:'cursive', fontSize:'18px', paddingTop:'40px',}}>Category</label></div>
              <select id="category">
                <option value="Home">Home</option>
                <option value="Awards">Awards</option>
                <option value="Salary">Salary</option>
                <option value="Others">Others</option>
              </select>
              </div>
              
              <div><button type="submit" style={{paddingTop:'1px', backgroundColor:'purple', fontWeight:'bold', borderRadius:'4px', fontColor:'#ffffff', margin:'20px'}}>Add Income</button></div>
              
            </form>             
            </Card.Text>
            </Card.Body>
      </Card>
      </Col>
      </Row>
      </Container>
    </div>
  );
};

export default ExpensesPage;
