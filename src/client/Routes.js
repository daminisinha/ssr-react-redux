import React from 'react';
import App from './App'
import HomePage from './pages/HomePage';
import UsersListPage,{loadData}  from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';
//roytes will be rendered by the main component whic h is App
export default [
    {
  ...App,
   routes : [
    {
        ...HomePage,
        path:'/',
        exact:true
    },
    {
        ...UsersListPage,
        path:'/users'
    },
    {
        ...AdminsListPage,
        path:'/admins'
    },
    {
        ...NotFoundPage,
    }
   ]
    }
];

