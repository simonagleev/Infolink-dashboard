
const systemServices = {
    alertService: Symbol.for('alertService'),
    routerService: Symbol.for('routerService'),
    sessionService: Symbol.for('sessionService'),
    errorService: Symbol.for('errorService'),
    apiService: Symbol.for('apiService'),
    layoutService: Symbol.for('layoutService'),
};

const appServices = {
    mockService: Symbol.for('mockService'),
};

export const TYPES = {
    ...systemServices,
    ...appServices,
};

export default TYPES;
