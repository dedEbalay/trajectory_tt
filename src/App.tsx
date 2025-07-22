import React, { useEffect } from 'react';
import { OnLoadRequest } from './redux/actions';
import { connect } from 'react-redux';
import onLoadService from './services/onLoadService';

function App(props:any) {

  useEffect(() => {
    onLoadService().then(resp => {
      console.log(resp)
      props.OnLoadRequest(resp)
    })
  }, [])

  console.log('test');
  

  return (
    <div className="app-container">
      <h1 onClick={() => {
        console.log('CLICK');
        props.testAction()
      }}>hello world</h1>
    </div>
  );
}

const mapStateToProps = (store:any) => {
  return {
    // loadedPosts: store.posts
  }
}

const mapDispatchToProps = {
  OnLoadRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
