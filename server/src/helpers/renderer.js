import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import Routes from '../client/Routes';

export default (req) => {
    const content = renderToString(
        <StaticRouter location={req.path} context={{}}>
            <Routes></Routes>
        </StaticRouter>);
    return `
        <html lang="en">
            <head>
                <title>My title</title>
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
}