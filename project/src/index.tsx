import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {questions} from './mocks/questions';

const Setting = {
  RENT_COUNT: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      rentCount={Setting.RENT_COUNT}
      questions={questions}
    />
  </React.StrictMode>,
  document.getElementById('root'));
