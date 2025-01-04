/* 
Solution: Update CSP Headers on Vercel
Modify Your Express App to Include Correct CSP Use the helmet middleware in your Express app to set a custom CSP header that allows Base64 images.

Example:

javascript
Copy code
const express = require('express');
const helmet = require('helmet');

const app = express();

// app.use(
//   helmet.contentSecurityPolicy({
//     directives: {
//       defaultSrc: ["'self'"], // Default sources
//       connectSrc: ["'self'", "https://ns-coffee-cafe-server.vercel.app"], // Allow API calls
//       imgSrc: ["'self'", "https://i.ibb.co.com", "data:"], // Allow Base64 and self-hosted images
//       scriptSrc: ["'self'"], // Allow scripts from the same origin
//       styleSrc: ["'self'", "'unsafe-inline'"], // Allow inline styles if needed
//       fontSrc: [
//         "'self'",
//         "https://fonts.googleapis.com",
//         "https://fonts.gstatic.com",
//       ], // Fonts
//       objectSrc: ["'none'"], // Disallow object embeds
//     },
//   })
// );

app.get('/', (req, res) => {
  res.send('CSP updated for Base64 images!');
});

module.exports = app;
This explicitly sets img-src to include self and data: URIs.

Deploy the Updated Server to Vercel After making the changes, redeploy your server to Vercel:

bash
Copy code
vercel deploy




Alternative: Set CSP Headers in Vercel vercel.json
If you are not using an Express app to set headers programmatically, you can configure the headers directly in vercel.json.

Edit vercel.json File: Add a headers configuration to include the CSP:


"headers": [
        {
            "src": "/(.*)",
            "headers": [
                {
                    "key": "Content-Security-Policy",
                    "value": "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self'; object-src 'none';"
                }
            ]
        }
    ] */
