import { Route, Routes } from 'react-router-dom';
import CreateJobPage from './views/CreateJobPage';
import Dashboard from './views/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/jobs/new" element={<CreateJobPage/>}/>
        <Route path="/jobs/:id" element={<Dashboard/>}/>
        <Route path="/jobs/app/:id" element={<Dashboard/>}/>
        <Route path="/jobs/compare/:id/:id2" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
