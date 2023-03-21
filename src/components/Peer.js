import React, {useState } from 'react';
import './Peer.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Peer() {
    
  const [selectedOption, setSelectedOption] = useState('lend');
  const [date, setDate] = useState(new Date());

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="App">
      <div className="option-selector" >
        
        <label>
          <input
            type="radio"
            name="option"
            value="lend"
            checked={selectedOption === 'lend'}
            onChange={handleOptionChange}
          />
          Lend
        </label>
        <label>
          <input
            type="radio"
            name="option"
            value="borrow"
            checked={selectedOption === 'borrow'}
            onChange={handleOptionChange}
          />
          Borrow
        </label>
      </div>
      <div className="label-container">
        {selectedOption === 'lend' ? (
          <div className="label lend" >
            <h2>Lend Money</h2>
            <form>
              <label htmlFor="To">To:</label>
              <input
                 type="text"
                 id="name"
                 name='name'
                 
               />
              <label htmlFor="amount">Amount:</label>
              <input type="number" id="amount" name="amount" />
              <label htmlFor="interest">Interest Rate:</label>
              <input type="number" id="interest" name="interest" />
              <div class="two-col">
                <div class="col1">
                <label htmlFor="date" >Lent Time:</label>
                    <DatePicker
                        selected={date}
                        onChange={(date) => setDate(date)}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat=" yyyy/MM/dd      hh:mm aa"
                    />
                </div>

                <div class="col2">
                <label htmlFor="date" >Due Date:</label>
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat=" yyyy/MM/dd      hh:mm aa"
              />
                </div>
            </div>
              
              
              <label htmlFor="total">Total:</label>
              <input type="number" id="Total" name="Total" />
              <button type="submit" style={{backgroundColor:'purple', fontWeight:'bold', color:'white', position:'relative', top:'50px'}}>Lend Money</button>
            </form>
          </div>
        ) : (
          <div className="label borrow">
            <h2>Borrow Money</h2>
            <form>
                <label htmlFor="From">From:</label>
                <input
                 type="text"
                 id="name"
                 name='name'
                 
               />
              <label htmlFor="amount">Amount:</label>
              <input type="number" id="amount" name="amount" />
              <label htmlFor="interest">Interest Rate:</label>
              <input type="number" id="interest" name="interest" />
              <div class="two-col">
                <div class="col1">
                <label htmlFor="date" >Borrowed on:</label>
                    <DatePicker
                        selected={date}
                        onChange={(date) => setDate(date)}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat=" yyyy/MM/dd      hh:mm aa"
                    />
                </div>

                <div class="col2">
                <label htmlFor="date" >Due Date:</label>
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat=" yyyy/MM/dd      hh:mm aa"
              />
                </div>
            </div>
              
              <label htmlFor="total">Total:</label>
              <input type="number" id="Total" name="Total" />
              <button type="submit" style={{backgroundColor:'purple', fontWeight:'bold', color:'white', position:'relative', top:'50px'}}>Borrow Money</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Peer;


