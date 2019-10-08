import app from '../../src/app';
import request from 'supertest';

describe("Route test:", () => {
    it("Should return code 200 when call the /symbols route", async (done) => {
        const response = await request(app)
            .get('/symbols');

        expect(response.status).toBe(200);
        done();
    });

    it("Should return code 200 when call the /chart route", async (done) => {
        const response = await request(app).get('/chart').set({
            symbol: "fb",
            range: "1d"
        });

        expect(response.status).toBe(200);
        done();        
    });

    it("Should return code 200 when call the /realtime route", async (done) => {
        const response = await request(app).get('/realtime').set({
            symbol: "fb"
        });

        expect(response.status).toBe(200);
        done();
    });

    it("Should return code 200 when call the /show route", async (done) => {
        const response = await request(app).get('/show').set({
            _id: "5d9ba9898df58a519370454c"
        });;

        expect(response.status).toBe(200);
        done();
    });
    
    it("Should return code 200 when call the /company route", async (done) => {
        const response = await request(app).post('/company').send({
            symbol: "FB"
        });

        expect(response.status).toBe(200);
        done();
    });
});

