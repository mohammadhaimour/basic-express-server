'use strict';
const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Server Test', () => {
    // let next = jest.fn();
    it('should return 200', async () => {
        const response = await request.get('/person?name=mohmmad');
        expect(response.status).toEqual(200);
        expect(typeof response.body).toEqual('object');
    });

    //404 on a bad route
    it('handle not found request', async () => {
        const response = await request.get('/abc');
        expect(response.status).toEqual(404);
    });


    //404 on a bad method
    it('should return 404 / bad method', async () => {
        const response = await request.post('/person');
        expect(response.status).toBe(404);
    });


    it('handle server internal errors', async () => {
        const response = await request.get('/person?name');
        expect(response.status).toEqual(500);
    });

});
