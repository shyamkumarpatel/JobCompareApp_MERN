import { Route, Routes } from 'react-router-dom';
import DisplayJobCard from './views/JobDetails';
import CreateJobPage from './views/CreateJobPage';
import Dashboard from './views/Dashboard';
import CompareSeclectionPage from './views/CompareSeclectionPage';
import CompareJobPage from './views/CompareJobPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/jobs/new" element={<CreateJobPage/>}/>
        <Route path="/jobs/:id" element={<DisplayJobCard/>}/>
        <Route path="/jobs/app/:id" element={<Dashboard/>}/>
        <Route path="/jobs/compare/:id/" element={<CompareSeclectionPage/>}/>
        <Route path="/jobs/compare/:id/:id2" element={<CompareJobPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
