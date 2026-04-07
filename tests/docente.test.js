const request = require('supertest');
const app = require('../scr/app');

describe('POST /docentes', () => {
  it('debería registrar un docente correctamente', async () => {
    const res = await request(app).post('/docentes').send({
      nombreCompleto: 'Juan Perez',
      correo: 'juan@test.com',
      institucion: 'UMSS',
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.nombreCompleto).toBe('Juan Perez');
  });
});
