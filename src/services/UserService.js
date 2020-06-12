import http from './api';

export const getUsers = () => {
    return http.get('users');
};