import React from 'react';
import './App.css';
import Sap from './components/Sap';
import LeftNav from './components/LeftNav';
import ReminderScreen from './components/ReminderScreen';
import NotificationsList from './components/NotificationsList';
import Logoutpop from './components/Logoutpop';
import Transaction from './components/Transaction';
import Friends from './components/Friends';
import AddExpensePage from './components/ExpensesPage';
import Peer from './components/Peer';
import SavingsCalculator from './components/SavingsCalculator';

function App() {
  return (
      // <div classname="sap">
      //  <Sap/>
      <div>
        <LeftNav/>
        
        {/* <ReminderScreen/> */}
        {/* <NotificationsList/> */}
        {/* <Logoutpop/> */}
        {/* <Transaction/> */}
        {/* <Friends/> */}
        {/* <AddExpensePage/> */}
        <Peer/>
        {/* <SavingsCalculator/> */}
      </div>
    // </div>
    
  );
}

export default App;
