import React from 'react';
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

import axios from 'axios';

let one = "http://api.waqi.info/feed/stockholm/?token=6460bc98321176676eee4a2d07153eb8854628fe" 
let two = "http://api.waqi.info/feed/göteborg/?token=6460bc98321176676eee4a2d07153eb8854628fe"
let three = "http://api.waqi.info/feed/malmö/?token=6460bc98321176676eee4a2d07153eb8854628fe"
let four = "http://api.waqi.info/feed/helsingborg/?token=6460bc98321176676eee4a2d07153eb8854628fe"
let five = "http://api.waqi.info/feed/sundsvall/?token=6460bc98321176676eee4a2d07153eb8854628fe"
let six = "http://api.waqi.info/feed/umeå/?token=6460bc98321176676eee4a2d07153eb8854628fe"
let seven = "http://api.waqi.info/feed/uppsala/?token=6460bc98321176676eee4a2d07153eb8854628fe"
let eight = "http://api.waqi.info/feed/västerås/?token=6460bc98321176676eee4a2d07153eb8854628fe"
let nine = "http://api.waqi.info/feed/södertälje/?token=6460bc98321176676eee4a2d07153eb8854628fe"
let ten = "http://api.waqi.info/feed/lund/?token=6460bc98321176676eee4a2d07153eb8854628fe"
let eleven = "http://api.waqi.info/feed/linköping/?token=6460bc98321176676eee4a2d07153eb8854628fe"

const requestOne = axios.get(one);
const requestTwo = axios.get(two);
const requestThree = axios.get(three);
const requestFour = axios.get(four);
const requestFive = axios.get(five);
const requestSix = axios.get(six);
const requestSeven = axios.get(seven);
const requestEight = axios.get(eight);
const requestNine = axios.get(nine);
const requestTen = axios.get(ten);
const requestEleven = axios.get(eleven);

var obj;
var response;

var city;
var name;

var forecast;
var daily;
var pm25;
var today

var avg;
var day;
var max;
var min;

// Cities
var stockholm;
var goteborg;
var malmo;
var helsingborg;
var sundsvall;
var umea;
var uppsala;
var vasteras;
var sodertalje;
var lund;
var linkoping;

var cityList = ['Stockholm', 'Goteborg', 'Malmö', 'Helsingborg', 'Sundsvall', 'Umeå', 'Uppsala', 'Västerås', 'Södertälje', 'Lund', 'Linköping'];

export default class Experiment5 extends React.Component {
  state = {
    stockholm: [],
    goteborg: [],
    malmo: [],
    helsingborg: [],
    sundsvall: [],
    umea: [],
    uppsala: [],
    vasteras: [],
    sodertalje: [],
    lund: [],
    linkoping: []
  }

  componentDidMount() {
    axios.all([requestOne, requestTwo, requestThree, requestFour, requestFive, requestSix, requestSeven, requestEight, requestNine, requestTen, requestEleven])
      .then(res => {
        stockholm   = res[0].data;
        goteborg    = res[1].data;
        malmo       = res[2].data;
        helsingborg = res[3].data;
        sundsvall   = res[4].data;
        umea        = res[5].data;
        uppsala     = res[6].data;
        vasteras    = res[7].data;
        sodertalje  = res[8].data;
        lund        = res[9].data;
        linkoping   = res[10].data;

        function myFunction(x, y, z) {
            response = x[Object.keys(x)[1]];

            city = response[Object.keys(response)[3]];
            name = city[Object.keys(city)[1]];

            forecast = response[Object.keys(response)[7]];
            daily = forecast[Object.keys(forecast)[0]];
            pm25 = daily[Object.keys(daily)[2]];
            today = pm25[Object.keys(pm25)[z]];

            day = today[Object.keys(today)[1]];
            avg = today[Object.keys(today)[0]];
            max = today[Object.keys(today)[2]];
            min = today[Object.keys(today)[3]];

            return cityList[y] = {name: cityList[y], day: day, avg: avg, max: max, min: min};
          }

        myFunction(stockholm, 0, 2);
        stockholm = cityList[0]

        myFunction(goteborg, 1, 2);
        goteborg = cityList[1]

        myFunction(malmo, 2, 1);
        malmo = cityList[2]

        myFunction(helsingborg, 3, 1);
        helsingborg = cityList[3]

        myFunction(sundsvall, 4, 2);
        sundsvall = cityList[4]

        myFunction(umea, 5, 2);
        umea = cityList[5]

        myFunction(uppsala, 6, 1);
        uppsala = cityList[6]

        myFunction(vasteras, 7, 2);
        vasteras = cityList[7]

        myFunction(sodertalje, 8, 1);
        sodertalje = cityList[8]

        myFunction(lund, 9, 1);
        lund = cityList[9]

        myFunction(linkoping, 10, 0);
        linkoping = cityList[10]

        this.setState({ stockholm, goteborg, malmo, helsingborg, sundsvall, umea, uppsala, vasteras, sodertalje, lund, linkoping });
      })
  }

  render() {
    return (
      <Container>
          <h2>Luftkvalitet i realtid</h2>
          <h3>{ this.state.stockholm.day}</h3>
<Table striped bordered hover size="sm">
<thead>
  <tr>
    <th>Stad</th>
    <th>Genomsnitt</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>{ this.state.stockholm.name}</td>
    <td>{ this.state.stockholm.avg}</td>
  </tr>
  <tr>
    <td>{ this.state.goteborg.name}</td>
    <td>{ this.state.goteborg.avg}</td>
  </tr>
  <tr>
    <td>{ this.state.malmo.name}</td>
    <td>{ this.state.malmo.avg}</td>
  </tr>
  <tr>
    <td>{ this.state.helsingborg.name}</td>
    <td>{ this.state.helsingborg.avg}</td>
  </tr>
  <tr>
    <td>{ this.state.sundsvall.name}</td>
    <td>{ this.state.sundsvall.avg}</td>
  </tr>
  <tr>
    <td>{ this.state.umea.name}</td>
    <td>{ this.state.umea.avg}</td>
  </tr>
  <tr>
    <td>{ this.state.uppsala.name}</td>
    <td>{ this.state.uppsala.avg}</td>
  </tr>
  <tr>
    <td>{ this.state.vasteras.name}</td>
    <td>{ this.state.vasteras.avg}</td>
  </tr>
  <tr>
    <td>{ this.state.sodertalje.name}</td>
    <td>{ this.state.sodertalje.avg}</td>
  </tr>
  <tr>
    <td>{ this.state.lund.name}</td>
    <td>{ this.state.lund.avg}</td>
  </tr>
  <tr>
    <td>{ this.state.linkoping.name}</td>
    <td>{ this.state.linkoping.avg}</td>
  </tr>
  </tbody>
</Table>
</Container>
    )
  }
}
