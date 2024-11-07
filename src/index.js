class SdkCodeChallenge {
  _baseUrl = '';

  constructor(baseUrl = 'https://jsonplaceholder.typicode.com') {
    this._baseUrl = baseUrl;
  }

  async getPosts() {
    try {
      const res = await fetch(`${this._baseUrl}/posts`);
      const data = await res.json();

      return {
        status: 'ok',
        data,
      };
    } catch (ex) {
      console.log('getPosts exception: ', ex); // replace with some logging library?

      return {
        status: 'error',
        data: ex,
      };
    }
  }
}

module.exports = SdkCodeChallenge;
