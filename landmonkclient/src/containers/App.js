import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Layout from '../components/Layout/Layout';
import PropertyList from '../containers/Property/PropertyList/PropertyList';
import CreateProperty from './Property/CreateProperty/CreateProperty';
import DeleteTenant from './Tenant/DeleteTenant/DeleteTenant';
import UpdateTenant from './Tenant/UpdateTenant/UpdateTenant';
import CreateTenant from './Tenant/CreateTenant/CreateTenant';
import TenantList from './Tenant/TenantList/TenantList';
import PropertyDetails from './Property/PropertyDetails/PropertyDetails';
import UpdateProperty from './Property/UpdateProperty/UpdateProperty';  
import DeleteProperty from './Property/DeleteProperty/DeleteProperty'; 
import Dashboard from '../components/Dashboard/Dashboard'; 
import NotFound from '../components/ErrorPages/NotFound/NotFound';
import InternalServer from '../components/ErrorPages/InternalServer/InternalServer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/properties" component={PropertyList} />
            <Route path="/createProperty" component={CreateProperty} />
            <Route path="/propertyDetails/:id" component={PropertyDetails} />
            <Route path="/updateProperty/:id" component={UpdateProperty} />
            <Route path="/deleteProperty/:id" component={DeleteProperty} />
            <Route path="/tenants" component={TenantList} />
            <Route path="/createTenant/" component={CreateTenant} />
            <Route path="/updateTenant/:id" component={UpdateTenant} />
            <Route path="/deleteTenant/:id" component={DeleteTenant} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/500" component={InternalServer} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
