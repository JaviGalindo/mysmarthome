import FakeRest from 'fakerest';
import fetchMock from 'fetch-mock';
import generateData from 'data-generator-retail';

export default () => {
    const data = generateData({ serializeDate: true });
    const restServer = new FakeRest.FetchServer('http://localhost:3001');
    if (window) {
        window.restServer = restServer; // give way to update data in the console
    }
    restServer.init(data);
    restServer.toggleLogging(); // logging is off by default, enable it
    return () => fetchMock.restore();
};
