import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Header from './header/Header.jsx'
import About from './about/About.jsx'
import Education from './education/Education.jsx'
import TechnicalSkills from './technicalskills/TechnicalSkills.jsx'
import Experience from './experience/Experience.jsx'
import Certification from './certification/Certification.jsx'
import Pandp from './pandp/Pandp.jsx'
import Contact from './contact/Contact.jsx'

let router=createBrowserRouter([
    {path:'/', element:<About></About>},
    {path:'/education', element:<Education></Education>},
    {path:'/skills', element:<TechnicalSkills></TechnicalSkills>},
    {path:'/experience', element:<Experience></Experience>},
    {path:'/certification', element:<Certification></Certification>},
    {path:'/pandp', element:<Pandp></Pandp>},
    {path:'/contact', element:<Contact></Contact>}
  ])

const App = () => {
  return (
    <>
   <Header></Header>
   <RouterProvider router={router}></RouterProvider>
  </>
  );
};

export default App;

