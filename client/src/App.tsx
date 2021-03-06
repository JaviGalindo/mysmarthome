import * as React from 'react';
import { Admin, Resource, fetchUtils } from 'react-admin';

import authProvider from './authProvider';
import { Login, Layout } from './layout';
import { Dashboard } from './dashboard';
import { lightTheme } from './layout/themes';

import devices from './devices';
import rooms from './rooms';
import notifications from './notifications';
import users from './users';
import simpleRestProvider from 'ra-data-simple-rest';

const fetchJson = (url:string, options:any = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    // add your own headers here
    return fetchUtils.fetchJson(url, options);
}
console.log(process.env.REACT_APP_API_URL, process.env.REACT_APP_API_PORT)

const restProvider = simpleRestProvider('http://localhost:3001', fetchJson);

const App = () => {
    return (
        <Admin
            title=""
            dataProvider={restProvider}
            authProvider={authProvider}
            dashboard={Dashboard}
            loginPage={Login}
            layout={Layout}
            disableTelemetry
            theme={lightTheme}
        >
            <Resource name="devices" {...devices} />
            <Resource name="rooms" {...rooms} />
            <Resource name="notifications" {...notifications} />
            <Resource name="users" {...users}/>
        </Admin>
    );
};

export default App;
