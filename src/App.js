import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customer = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '921211',
  'gender': '남자',
  'job': '교수'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '테드창',
    'birthday': '941211',
    'gender': '남자',
    'job': '사업가'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '최동욱',
    'birthday': '921211',
    'gender': '남자',
    'job': '부자'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customer.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div>
      
    );
  }
}

export default App;
