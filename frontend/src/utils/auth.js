import { gapi } from 'gapi-script';

export const initClient = () => {
    gapi.load('client:auth2', () => {
        gapi.client.init({
            clientId: '466741449460-d26sdo1tg0mctamnsk1b91mt37qlj1r5.apps.googleusercontent.com',
            scope: 'https://www.googleapis.com/auth/business.manage',
        });
    });
};

export const signIn = async () => {
    try {
        await gapi.auth2.getAuthInstance().signIn();
    } catch (error) {
        console.error('Error signing in', error);
    }
};

export const signOut = async () => {
    await gapi.auth2.getAuthInstance().signOut();
};