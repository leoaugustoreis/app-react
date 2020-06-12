import http from './api';

export const getPhotos = () => {
    return http.get('albums/1/photos');
};