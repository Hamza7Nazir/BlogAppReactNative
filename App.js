import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';  // curly braces are it is named export not export default

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
    },
  }
);
const App = createAppContainer(navigator); // instead of export default  createAppContainer(navigator); - for Context management

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  ); // Passing App as prop children so all the screen will be children of BlogProvider and data can be transfered to them
};
