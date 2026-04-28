import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Projects from "./pages/Projects"
import ProjectTasks from "./pages/ProjectTasks"
import Snippet from "./pages/Snippet"

import AddProject from "./pages/AddProject"
import AddTask from "./pages/AddTask"
import AddSnippet from "./pages/AddSnippet"

import DefaultLayout from "./layouts/DefaultLayout"
import { GlobalProvider } from "./contexts/GlobalContext"

function App() {

  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectTasks />} />
              <Route path="/addProject" element={<AddProject />} />
              <Route path="/addTask" element={<AddTask />} />
              <Route path="/Snippet" element={<Snippet />} />
              <Route path="/addSnippet" element={<AddSnippet />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App