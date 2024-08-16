// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';
import UserProfile from './src/screens/UserProfile';
// import store from './src/store';
// import YourMainComponent from './src/YourMainComponent'; // Replace with your main component

const App = () => {
  return (
    <Provider store={store}>
      <UserProfile />
    </Provider>
  );
};

export default App;