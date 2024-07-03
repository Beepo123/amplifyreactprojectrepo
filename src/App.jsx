import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to My App</h1>
      {/* Your app's components go here */}
    </div>
  );
}

export default withAuthenticator(App);
