import React from 'react';
import History from './History';
import Card from 'react-bootstrap/Card';

function Transaction() {
  const transactions = [
    {
      id: 1,
      date: "2022-03-18",
      description: "Payment received",
      person: "from Dada",
      amount: "Rs 100.00",
    },
    {
      id: 2,
      date: "2022-03-17",
      description: "Payment sent",
      person: "to Vishal",
      amount: "Rs 50.00",
    },
    {
      id: 3,
      date: "2022-03-15",
      description: "Payment received",
      person: "from Papa",
      amount: "Rs 2775.00",
    },
    {
        id: 4,
        date: "2022-03-14",
        description: "Payment received",
        person: "from Shreya",
        amount: "Rs 175.00",
      },
      {
        id: 5,
        date: "2022-03-12",
        description: "Payment sent",
        person: "to stationary shop",
        amount: "Rs 25.00",
      },
      {
        id: 6,
        date: "2022-03-12",
        description: "Payment received",
        person: "from Aarohi",
        amount: "Rs 75.00",
      },
      {
        id: 7,
        date: "2022-03-12",
        description: "Payment sent",
        person: "to Canteen",
        amount: "Rs 50.00",
      },
      {
        id: 8,
        date: "2022-03-10",
        description: "Payment received",
        person: "from Sid",
        amount: "Rs 150.00",
      },
      {
        id: 9,
        date: "2022-03-10",
        description: "Payment received",
        person: "from Mummy",
        amount: "Rs 775.00",
      },
  ];

  return (
    <div>
      {/* TODO: add your app content here */}
      
      <Card style={{ width: '38rem', height: '42rem'}}>
        <span className="square bg-primary rounded-9"></span>
        <Card.Body>
        <Card.Title style={{ width: '15rem', height: '0.5rem', fontFamily: 'cursive', marginLeft:'150px'}}>Transaction History</Card.Title>
        <Card.Text>
        <History transactions={transactions} />
        </Card.Text>
        </Card.Body>
    </Card>
    </div>
    
  );
}

export default Transaction;
