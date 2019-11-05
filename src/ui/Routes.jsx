import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import {
  Dashboard,
  Login,
  PostList,
  PostDetail,
  Account,
  Category,
  User,
  CreateCategory,
  CreateUser,
} from '@ui/containers';
import { Main as MainLayout } from '@ui/layouts';

import { RouteWithLayout } from '@src/ui/components';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />

      <Route
        path="/login"
        component={Login}
      />
      <RouteWithLayout
        path="/dashboard"
        layout={MainLayout}
        component={Dashboard}
      />
      <RouteWithLayout
        path="/users"
        layout={MainLayout}
        component={User}
      />
      <RouteWithLayout
        path="/products"
        layout={MainLayout}
        component={Dashboard}
      />
      <RouteWithLayout
        path="/posts"
        layout={MainLayout}
        component={PostList}
      />
      <RouteWithLayout
        path="/category"
        layout={MainLayout}
        component={Category}
      />
      <RouteWithLayout
        path="/account"
        layout={MainLayout}
        component={Account}
      />
      <RouteWithLayout
        path="/settings"
        layout={MainLayout}
        component={Dashboard}
      />
      <RouteWithLayout
        path="/post-detail/:id"
        layout={MainLayout}
        component={PostDetail}
      />
      <RouteWithLayout
        path="/post-detail"
        layout={MainLayout}
        component={PostDetail}
      />
      <RouteWithLayout
        path="/category-detail"
        layout={MainLayout}
        component={CreateCategory}
      />
      <RouteWithLayout
        path="/user-detail"
        layout={MainLayout}
        component={CreateUser}
      />
    </Switch>
  );
};

export default Routes;
