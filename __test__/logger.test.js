// 'use strict';
// const logger = require('../src/middleware/logger');

// describe('Logger Test', () => {
//     let consoleSpy;
//     let req = {};
//     let res = {};
//     let next = jest.fn();
//     beforeEach(() => {
//         consoleSpy = jest.spyOn(console, 'log');
//     });
//     it('should log the request', () => {
//         req.method = 'GET';
//         req.path = '/person';
//         logger(req, res, next);
//         expect(consoleSpy).toHaveBeenCalled();
//     });
//     afterEach(() => {
//         consoleSpy.mockRestore();
//     });
// });



'use strict';
const logger = require('../middlewares/logger');

describe('looger middleware', () => {

    let consolSpy;//this variabel to stor if jest finds a console logs
    let req = {};
    let res = {};
    let next = jest.fn();

    beforeEach(() => {
        consolSpy = jest.spyOn(console, 'log').mockImplementation(
            () => {
                console.error('this error from the mockImplementation')
            }
        );
    });



    test('it is loggin some thing or routes', () => {
        logger(req, res, next);
        expect(consolSpy).toHaveBeenCalled();

    });

    test('it is calling next ', () => {
        expect(next).toHaveBeenCalled();
    });

    afterEach(() => {
        consolSpy.mockRestore();
    })


})