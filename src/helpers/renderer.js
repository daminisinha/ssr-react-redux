import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {renderRoutes} from 'react-router-config';
import Routes from '../client/Routes';
//creates a URL encoded text string string by serializing form values for XSS atack
import serialize  from 'serialize-javascript';

//express routing
export default (req,store)=>{
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
         <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
      </Provider>
    );
    return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script>
        window.INITIAL_STATE =${JSON.stringify(serialize(store.getState()))};
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};