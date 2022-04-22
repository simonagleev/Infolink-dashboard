import { provide } from 'react-declarative';

import RouterService from "./base/RouterService";
import AlertService from "./base/AlertService";
import SessionService from "./base/SessionService";
import ErrorService from "./base/ErrorService";
import ApiService from "./base/ApiService";
import LayoutService from './base/LayoutService';

import MockService from './app/MockService';

import TYPES from "./types";

provide(TYPES.routerService, () => new RouterService());
provide(TYPES.alertService, () => new AlertService());
provide(TYPES.sessionService, () => new SessionService());
provide(TYPES.errorService, () => new ErrorService());
provide(TYPES.apiService, () => new ApiService());
provide(TYPES.layoutService, () => new LayoutService());

provide(TYPES.mockService, () => new MockService());
