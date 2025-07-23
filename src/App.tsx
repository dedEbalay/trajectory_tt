import React, { useEffect } from 'react';
import { OnLoadRequest } from './redux/actions';
import { connect } from 'react-redux';
import onLoadService from './services/onLoadService';
import CarList from './components/CarList/CarList';
import './style.css'
import EditModal from './components/EditModal/EditModal';
import { stateInterface } from './interfaces';

interface Prop {
  OnLoadRequest: Function
}

function App(props:Prop) {

  useEffect(() => {
    onLoadService().then(resp => {
      props.OnLoadRequest(resp)
    })
  })

  return (
    <div className="app-container">
      <EditModal />
      <CarList />
    </div>
  );
}

const mapStateToProps = (store:stateInterface) => {
  return {
  }
}

const mapDispatchToProps = {
  OnLoadRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
