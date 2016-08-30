var context = require.context('./app', true, /\.js$/);
context.keys().forEach(context);
