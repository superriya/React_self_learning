# What is Express?
- Express is a fast, unopinionated and minimalist web framework for Node.js
- Express is a server-side or back-end framework
- it can be used in combination with client-side-frameworks to build full stack applications

# Why use Express?
- Extremely light, fast and free
- used for both server rendered apps as well as API/Microservices
- Full Control of request and response
- Great to use with client side frameworks as it's all JavaScript

# What to know?
- Javascript fundamentals(Objects, Arrays, Conditionals, etc.)
- Basic Node.js and NPM
- HTTP status codes
- JSON
- High order Array methods - forEach, map, filter
- Arrow functions () => {}

# Basic Server syntax
    const express = require('express');

    const app = express();

    app.get('/', function(req, res){
        res.send('Hello World!');
    });

    app.listen(5000);