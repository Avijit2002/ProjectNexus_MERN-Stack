import './index.css';
import { useEffect, useState } from 'react';
import StudentHomePage from './pages/StudentHomePage';
import AddProject from './pages/AddProject';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProjectDetails from './pages/ProjectDetails';
import StudentProfile from './pages/StudentProfile';
import CollegeProfile from './pages/CollegeProfile';
function App() {

  const [post,setPost] = useState([]);

  useEffect(()=>{
    async function getData(){
        try {
            const res = await fetch("http://localhost:1234/post")
            const post = await res.json()
            setPost(post)
        } catch (error) {
            console.log(error)
        }  
    }
    getData();
},[setPost])

//console.log(post)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentHomePage post={post}/>} />
          <Route path="/add-project" element={<AddProject />} />
          <Route path="/project-details/:id" element={<ProjectDetails post={post}/>} />
          <Route path="/student-profile" element={<StudentProfile />} />
          <Route path="/college-profile" element={<CollegeProfile post={post}/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}


export default App;
