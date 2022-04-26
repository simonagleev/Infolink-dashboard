import React from 'react';

import { Switch } from 'react-declarative';

import Scaffold from './components/Scaffold';

import routes from './routes';
import menu from './menu';

import ioc from './lib/ioc';

const App = () => {
  return (
    <Scaffold options={menu} onOptionClick={(name) => ioc.routerService.push(name)}>
      <Switch
        history={ioc.routerService}
        items={routes}
      />
    </Scaffold>
  ) 
}

export default App;
