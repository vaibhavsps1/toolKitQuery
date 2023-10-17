// Import necessary components
import React from 'react';
import {WebView} from 'react-native-webview';

// Typeform URL
const typeformURL = 'https://tke7paqh8uk.typeform.com/to/g6koeSwy';

// React Native component
const TypeformScreen = () => {
  return (
    <WebView source={{uri: typeformURL} || {uri: null}} style={{flex: 1}} />
  );
};

export default TypeformScreen;
