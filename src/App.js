import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation bar */}
        <nav style={{ padding: '10px', backgroundColor: '#f0f0f0', marginBottom: '20px' }}>
          <Link to="/avto" style={{ marginRight: '10px' }}>Avto</Link>
          <Link to="/users" style={{ marginRight: '10px' }}>Users</Link>
          <Link to="/rentals">Rentals</Link>
        </nav>

        <Routes>
          <Route path="/avto/*" element={<iframe src="http://localhost:3001" title="Avto" style={{ width: '100%', height: '100vh', border: 'none' }} />} />
          <Route path="/users/*" element={<iframe src="http://localhost:3002" title="Users" style={{ width: '100%', height: '100vh', border: 'none' }} />} />
          <Route path="/rentals/*" element={<iframe src="http://localhost:3003" title="Rentals" style={{ width: '100%', height: '100vh', border: 'none' }} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
