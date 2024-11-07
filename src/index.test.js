const SDK = require('./');

describe('success', () => {
  const instance = new SDK('https://jsonplaceholder.typicode.com');

  test('should fetch and return ok', async () => {
    const resp = await instance.getPosts();
    expect(resp).toBeDefined();
    expect(resp.status).toBe('ok');
    expect(resp.data).toBeDefined();
    expect(Array.isArray(resp.data)).toBeTruthy();
  });
});

describe('failure', () => {
  const instance = new SDK('https://jsonplaceholder.typicode.commmmm');

  test('should fetch and return error', async () => {
    const resp = await instance.getPosts();
    expect(resp).toBeDefined();
    expect(resp.status).toBe('error');
    expect(resp.data).toBeDefined();
  });
});
