import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import IndexScreen from './src/screens/IndexScreen';
import { BlogProvider } from './src/context/BlogContext';  // curly braces are it is named export not export default

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
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
