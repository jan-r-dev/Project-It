import './App.css';
import React, { Component } from 'react'

import Concept from '../components/concept/concept';
import Needed from '../components/needed/needed';
import Updates from '../components/updates/updates';
import BasicSection from '../components/basicSection/basicSection';
import Popup from '../components/popup/popup';
import Feature from '../components/feature/feature';
import Finalise from '../components/finalise/finalise';


class App extends Component {

  state = {
    inputting: false,
    tempInput: '',
    areFeaturesReady: false
  }

  triggerInput = (containerName) => {
    console.log(containerName)
    this.setState({ inputting: true });
    this.setState({ tempInput: containerName });
  }

  confirmPopup = (input) => {
    this.triggerAddLine(this.state.tempInput, input)
    this.setState({ inputting: false })
  }

  cancelPopup = () => {
    this.setState({ inputting: false })
  }

  showState = () => {
    console.log(this.state);
  };

  setFeatureReadyStatus = (featureStatus) => {
    this.setState({areFeaturesReady: featureStatus});
  }

  render() {

    return (
      <div className='App'>
        <Popup inputtable={this.state.inputting} cancelFunction={this.cancelPopup} confirmFunction={this.confirmPopup} />
        {/* <input onChange={this.componentInput} value={this.state.inputs.conceptInput}></input> */}
        <Concept conceptName={'Project-It'}></Concept>
        <BasicSection headlineTag='Purpose' containerName='purpose' />
        <Feature featureStatusUpdate={this.setFeatureReadyStatus} />
        <Needed contentObj={this.state.needed} />
        <BasicSection headlineTag='Learned' containerName='learned' />
        <Updates />
        <Finalise featureCheck={this.state.areFeaturesReady} />
        {/* <button onClick={this.triggerInput}>Show state</button> */}

        {/* <div className='row'>hello i provide space</div> */}

      </div>
    );
  };
};

export default App;

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log(this.state.needed)
  // };

  // retrieveCheckedStatus = (id, status) => {
  //   const newNeeded = { ...this.state.needed };
  //   newNeeded[id] = { status: status };
  //   this.setState({ needed: newNeeded });
  // };



  // renderDates = () => {
  //   for (const el in this.state.dates) {
  //     contentArr.push(<NeededContent elKey={el} elId={el} content={contentObj[el].content} />);
  //   };
  // }