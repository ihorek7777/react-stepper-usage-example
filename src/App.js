import React, { useState } from 'react';
import Stepper from 'react-stepper-horizontal';
import logo from './logo.svg';
import tickIcon from './assets/tick.svg';
import dotIcon from './assets/dot.svg';
import './App.css';

const App = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      title: 'CPR nr.',
      icon: tickIcon,
      onClick() {
        setActiveStep(1);
      },
    },
    {
      title: 'NemID',
      icon: activeStep >= 1 ? tickIcon : dotIcon,
      onClick() {
        setActiveStep(2);
      },
    },
    {
      title: 'Brugerinfo',
      icon: activeStep >= 2 ? tickIcon : dotIcon,
      onClick() {
        setActiveStep(0);
      },
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <i className="fa fa-snowflake-o App-logo" aria-hidden="true" />
      </header>
      <section>
        <div className="stepper-wrapper">
          <Stepper
            steps={steps}
            activeStep={activeStep}
            activeColor="#49a3da"
            completeColor="#49a3da"
            defaultColor="#fff"
            defaultBarColor="#49a3da"
            completeBarColor="#49a3da"
            lineMarginOffset={0}
            titleTop={-60}
            activeTitleColor="#757575"
            completeTitleColor="#757575"
            defaultTitleColor="#757575"
          />
        </div>
      </section>
    </div>
  );
};

export default App;
