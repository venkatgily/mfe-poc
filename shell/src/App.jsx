import React, { Suspense } from "react";

const Header = React.lazy(() => import("header/Header"));
const Footer = React.lazy(() => import("footer/Footer"));

const App = () => (
  <div>
    <Suspense fallback={<div>Loading Header...</div>}>
      <Header />
    </Suspense>
    
    <h1>Welcome to the Shell</h1>
    
    <Suspense fallback={<div>Loading Footer...</div>}>
      <Footer />
    </Suspense>
  </div>
);

export default App;
