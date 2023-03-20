import React, {useState } from 'react';
import './Peer.css';

function Peer() {
    
  const [selectedOption, setSelectedOption] = useState('lend');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="App" >
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
      <div className="card-container">
        {selectedOption === 'lend' ? (
          <div className="card lend">
            <h2>Lend Money</h2>
            <form>
              <label htmlFor="To">To:</label>
              <input type="number" id="name" name="name" />
              <label htmlFor="amount">Amount:</label>
              <input type="number" id="amount" name="amount" />
              <label htmlFor="interest">Interest Rate:</label>
              <input type="number" id="interest" name="interest" />
              <label htmlFor="total">Total:</label>
              <input type="number" id="Total" name="Total" />
              <button type="submit" style={{backgroundColor:'purple', fontWeight:'bold', color:'white', position:'relative', top:'50px'}}>Lend Money</button>
            </form>
          </div>
        ) : (
          <div className="card borrow">
            <h2>Borrow Money</h2>
            <form>
                <label htmlFor="From">From:</label>
              <input type="number" id="name" name="name" />
              <label htmlFor="amount">Amount:</label>
              <input type="number" id="amount" name="amount" />
              <label htmlFor="interest">Interest Rate:</label>
              <input type="number" id="interest" name="interest" />
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
