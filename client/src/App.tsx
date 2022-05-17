import * as React from 'react';
import { Admin, CustomRoutes, Resource, fetchUtils } from 'react-admin';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import { Route } from 'react-router';

import authProvider from './authProvider';
import { Login, Layout } from './layout';
import { Dashboard } from './dashboard';
import englishMessages from './i18n/en';
import { lightTheme } from './layout/themes';

import devices from './devices';
import orders from './orders';
import products from './products';
import invoices from './invoices';
import categories from './categories';
import rooms from './rooms';
// import dataProviderFactory from './dataProvider';
import Configuration from './configuration/Configuration';
import Segments from './segments/Segments';
import simpleRestProvider from 'ra-data-simple-rest';

const i18nProvider = polyglotI18nProvider(locale => {
    if (locale === 'fr') {
        return import('./i18n/fr').then(messages => messages.default);
    }

    // Always fallback on english
    return englishMessages;
}, 'en');

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
            i18nProvider={i18nProvider}
            disableTelemetry
            theme={lightTheme}
        >
            <CustomRoutes>
                <Route path="/configuration" element={<Configuration />} />
                <Route path="/segments" element={<Segments />} />
            </CustomRoutes>
            <Resource name="devices" {...devices} />
            <Resource
                name="commands"
                {...orders}
                options={{ label: 'Orders' }}
            />
            <Resource name="invoices" {...invoices} />
            <Resource name="products" {...products} />
            <Resource name="categories" {...categories} />
            <Resource name="rooms" {...rooms} />
        </Admin>
    );
};

export default App;
