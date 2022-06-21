import ErrorBoundaryWrapper from 'components/common/ErrorBoundaryWrapper/ErrorBoundaryWrapper';
import Input from 'components/common/Input/Input';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Input/>
      <ErrorBoundaryWrapper>
        <button>에러</button>
      </ErrorBoundaryWrapper>
    </div>
  );
}

export default App;
