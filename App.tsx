import React, { Suspense } from 'react';

const Dashboard = React.lazy(() => import('./screens/Dashboard'));
function App(): JSX.Element {

  return (
    <Suspense>
   <Dashboard/>

    </Suspense>
  );
}

export default App;
