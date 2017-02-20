import config from 'config';
import request from './request';

before(() => {
    global.config = config;
    global.request = request;
});
