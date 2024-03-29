import React from 'react';

import { ISwitchItem } from 'react-declarative';

import {
  NF_ERROR,
  NF_DENIED,
  NF_NOTFOUND,
  NF_OFFLINE,
} from './config';

import HomePage from './view/HomePage';
import DemoPage from './view/DemoPage';
import ProfilesPage from './view/ProfilesPage';
import OneProfilePage from './view/OneProfilePage';
import IndicatorsPage from './view/IndicatorsPage';
import SettingsPage from './view/SettingsPage';

const systemRoutes: ISwitchItem[] = [
  {
    path: NF_ERROR,
    element: () => <p>Произошла ошибка. Перезапустите приложение</p>,
  },
  {
    path: NF_DENIED,
    element: () => <p>Отказано в доступе. Перезапустите приложение</p>,
  },
  {
    path: NF_NOTFOUND,
    element: () => <p>Страница не найдена. Перезапустите приложение</p>,
  },
  {
    path: NF_OFFLINE,
    element: () => <p>Нет доступа к интернету. Перезапустите приложение</p>,
  },
]

export const routes: ISwitchItem[] = [
  {
    path: '/',
    redirect: '/home-page'
  },
  {
    path: '/home-page',
    element: HomePage,
  },
  {
    path: '/demo-page',
    element: DemoPage,
  },
  {
    path: '/profiles-list',
    element: ProfilesPage,
  },
  {
    path: '/profiles-list/:id',
    element: OneProfilePage,
  },
  {
    path: '/indicators/:id',
    element: IndicatorsPage,
  },
  {
    path: '/settings',
    element: SettingsPage,
  },  
  ...systemRoutes
];

export default routes;

