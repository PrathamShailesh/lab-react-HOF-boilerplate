import React, { Component } from 'react';

class HigherOrderComponent extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
        { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
        { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
        { id: '4', name: 'Sam', user_type: 'Entrepreneur', age: 58, years: 25 },
        { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }
      ]
    };
  }

  // display all items
  renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
      <React.Fragment key={item.id}>
        <div className="list-elements">
          {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </div>
      </React.Fragment>
    ));
    return mapRows;
  };

  findUserType = (userType) => {
    const filteredData = this.state.userData.filter(item => item.user_type === userType);
    const mapRows = filteredData.map((item) => (
      <React.Fragment key={item.id}>
        <div className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </div>
      </React.Fragment>
    ));
    return mapRows;
  };

  findBystartingLetter = () => {
    const filteredData = this.state.userData.filter(item => item.name.startsWith('J'));
    const mapRows = filteredData.map((item) => (
      <React.Fragment key={item.id}>
        <div className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </div>
      </React.Fragment>
    ));
    return mapRows;
  };

  findByAge = () => {
    const filteredData = this.state.userData.filter(item => item.age > 28 && item.age <= 50);
    const mapRows = filteredData.map((item) => (
      <React.Fragment key={item.id}>
        <div className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
          <span>Age: {item.age}</span>
        </div>
      </React.Fragment>
    ));
    return mapRows;
  };

  findByExperience = () => {
    const designersData = this.state.userData.filter(item => item.user_type === 'Designer');
    const totalExperience = designersData.reduce((total, designer) => total + designer.years, 0);
    return totalExperience;
  };


  render() {
    return (
      <React.Fragment>
        <h1>Display all items</h1>
        <div className="display-box">
          <ul>{this.renderItems()} </ul>
        </div>

        <h1>Display items by UserType</h1>
        <div className="display-box">
          <ul>{this.findUserType('Developer')} </ul>
        </div>

        <h1>Display items starting with 'J'</h1>
        <div className="display-box">
          <ul>{this.findBystartingLetter()} </ul>
        </div>

        <h1>Filter all data based on age greater than28 and age less than or equal to 50 </h1>
        <div className="display-box">
          <ul>{this.findByAge()} </ul>
        </div>

        <h1>Find the total years of the designers</h1>
        <div className="display-box">
          <p>{this.findByExperience()} years</p>
        </div>
      </React.Fragment>
    );
  }
}
export default HigherOrderComponent;
