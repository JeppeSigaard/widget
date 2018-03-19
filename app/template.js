const template = (html, initialState) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta http-equiv="content-type" content="text/html; charset=utf-8">
  <title>Weather widget</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  </head>
  <body>
  <div id='entry'>${html}</div>
  <script>window.initialState=${JSON.stringify(initialState)}</script>
  <script src='/app.js'></script>
  </body>
  </html>
`;

export default template;
