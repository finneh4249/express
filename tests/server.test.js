const {app} = require('../src/server')
const request = require('supertest')

// Syntax: describe('description of the test', callback function)
describe('GET /', () => {
    // Syntax: test('description of the test', callback function)
    test('Should return a 200 status code', async () => {
        const response = await request(app).get('/')
        expect(response.statusCode).toBe(200)
    })

    test('Should return "Hello, world!"', async () => {
        const response = await request(app).get('/')
        expect(response.text).toBe('Hello, world!')
    })
})