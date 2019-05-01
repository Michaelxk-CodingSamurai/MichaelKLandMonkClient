import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Layout from '../components/Layout/Layout';
import CreateProperty from './Property/CreateProperty/CreateProperty';
import UpdateTenant from './Tenants/UpdateTenant/UpdateTenant';
import CreateTenant from './Tenants/CreateTenant/CreateTenant';
import NotFound from '../components/ErrorPages/NotFound/NotFound';
import PropertyDetails from './Property/PropertyDetails/PropertyDetails';
import UpdateProperty from './Property/UpdateProperty/UpdateProperty';  
import DeleteProperty from './Property/DeleteProperty/DeleteProperty'; 
import InternalServer from '../components/ErrorPages/InternalServer/InternalServer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/createProperty" component={CreateProperty} />
            <Route path="/propertyDetails/:id" component={PropertyDetails} /> 
            <Route path="/updateProperty/:id" component={UpdateProperty} />
            <Route path="/deleteProperty/:id" component={DeleteProperty} />
            <Route path="/updateTenant/:id" component={UpdateTenant} />
            <Route path="/createTenant/" component={CreateTenant} />
            <Route path="/500" component={InternalServer} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
