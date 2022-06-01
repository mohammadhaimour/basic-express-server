
'use strict';
const supertest = require('supertest');
const server = require('../src/server');
const request = supertest(server.app);

describe('validator Test', () => {

    it('should return 200', async () => {
        const response = await request.get('/person?name=mohmmad');
        expect(response.status).toEqual(200);
        expect(typeof response.body).toEqual('object');
    });



    it('Should check if the name is not string', async () => {
        const response = await request.get(`/person?name=123`);
        expect(response.status).toEqual(500);
    });



    it('Should check if the name is not string and not empty', async () => {
        const response = await request.get('/person?name=');
        expect(response.status).toEqual(500);
    });
});