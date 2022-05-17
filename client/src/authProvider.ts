import { AuthProvider } from 'react-admin';

const authProvider: AuthProvider = {
    login: ({ username }) => {
        localStorage.setItem('username', username);
        // accept all username/password combinations
        return Promise.resolve();
    },
    logout: () => {
        localStorage.removeItem('username');
        return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: () =>
        localStorage.getItem('username') ? Promise.resolve() : Promise.reject(),
    getPermissions: () => Promise.reject('Unknown method'),
    getIdentity: () => {
       return fetch(`${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/users/1`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then((userData:any) => {
            debugger;
            return Promise.resolve({
                id: userData.id,
                fullName: userData.username,
                userId: userData.id,
            })
        } )
        
    }

};

export default authProvider;
