import React from 'react';

import axios from 'axios';

let config = {
  headers: { 
    'x-rapidapi-key': '65c02a4672mshf6ff63121b66145p1777adjsn6a125a20822d', 
    'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com'},
  params: {
    function: 'GLOBAL_QUOTE', symbol: 'TSLA'
  },
}

var obj;
var response;

var symbol;
var open;
var high;
var low; 
var price; 
var volume; 
var latest_trading_day; 
var previous_close; 
var change; 
var change_percentage; 

var elements;

export default class AlphaVantage extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://alpha-vantage.p.rapidapi.com/query`, config)
      .then(res => {
        obj = res.data;
        response = obj[Object.keys(obj)[0]];

        symbol = response[Object.keys(response)[0]];
        open = response[Object.keys(response)[1]];
        high = response[Object.keys(response)[2]];
        low = response[Object.keys(response)[3]];
        price = response[Object.keys(response)[4]];
        volume = response[Object.keys(response)[5]];
        latest_trading_day = response[Object.keys(response)[6]];
        previous_close = response[Object.keys(response)[7]];
        change = response[Object.keys(response)[8]];
        change_percentage = response[Object.keys(response)[9]];

        elements = {symbol: symbol, open: open, high: high, low: low, price: price, volume: volume, latest_trading_day: latest_trading_day,
                    previous_close: previous_close, change: change, change_percentage: change_percentage}
        
        const persons = elements;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        <li><b>symbol:</b> { this.state.persons.symbol}</li>
        <li><b>open:</b> { this.state.persons.open}</li>
        <li><b>high:</b> { this.state.persons.high}</li>
        <li><b>low:</b> { this.state.persons.low}</li>
        <li><b>high:</b> { this.state.persons.price}</li>
        <li><b>price:</b> { this.state.persons.volume}</li>
        <li><b>latest_trading_day:</b> { this.state.persons.latest_trading_day}</li>
        <li><b>previous_close:</b> { this.state.persons.previous_close}</li>
        <li><b>change:</b> { this.state.persons.change}</li>
        <li><b>change_percentage:</b> { this.state.persons.change_percentage}</li>
      </ul>
    )
  }
}
