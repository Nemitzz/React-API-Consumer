import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';

import Login from '../pages/login';
import Item from '../pages/item';
import Items from '../pages/items';
import Photos from '../pages/photos';
import Register from '../pages/register';
import Page404 from '../pages/page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Items} isClosed={false} />
      <MyRoute exact path="/item/:id/edit" component={Item} isClosed />
      <MyRoute exact path="/item/" component={Item} isClosed />
      <MyRoute exact path="/photos/:id" component={Photos} isClosed />
      <MyRoute exact path="/login/" component={Login} isClosed={false} />
      <MyRoute exact path="/register/" component={Register} isClosed={false} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
