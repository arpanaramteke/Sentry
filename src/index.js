import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as Sentry  from '@sentry/react';
// import { Integrations as ApmIntegrations } from '@sentry/apm';
import * as serviceWorker from './serviceWorker';

Sentry.init({dsn: "https://5df6f8cea6804f3587d4f9050cc45763@o432126.ingest.sentry.io/5384323",
// release: 'my-project-name@' + process.env.npm_package_version,
//   integrations: [
//     new ApmIntegrations.Tracing(),
//   ],
//   tracesSampleRate: 1.0, // Be sure to lower this in production
  beforeSend(event, hint) {
    // Check if it is an exception, and if so, show the report dialog
    if (event.exception) {
      Sentry.showReportDialog({ eventId: event.event_id });
    }
    return event;
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
