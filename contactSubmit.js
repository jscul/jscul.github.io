const http = require('https');

const handleSuccess = async ({name, email, message}) => {
  return await new Promise((res, rej) => {
    console.log(JSON.stringify({name, email, message}));
    const req = http.request(
      {
        hostname: `formspree.io`,
        path: `/f/mzbkqdzo`,
        // path: `/cullen.scott.john@gmail.com`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Referer: 'http://localhost:3000',
        },
        body: JSON.stringify({name, email, message}),
      },
      (response) => {
        let str = '';
        response.on('data', (chunk) => (str += chunk));
        response.on('end', () => {
          console.log(str);
          res(JSON.parse(str));
        });
      }
    );
    req.on('error', (err) => res());
    req.end();
  });
};

handleSuccess({name: 'john', email: '123', message: 243});
