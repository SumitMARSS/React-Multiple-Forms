// App.js
import React from 'react';
import { SurveyProvider } from './SurveyContext';
import SurveyForm from './SurveyForm';

const App = () => {
  return (
    <SurveyProvider>
      <SurveyForm />
    </SurveyProvider>
  );
};

export default App;
