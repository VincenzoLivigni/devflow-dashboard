import { BrowserRouter, Route, Routes } from "react-router-dom"

import { ProjectsProvider } from "./contexts/ProjectsContext"
import { TasksProvider } from "./contexts/TasksContext"
import { SnippetsProvider } from "./contexts/SnippetsContext"

import Dashboard from "./pages/Dashboard"
import Projects from "./pages/Projects"
import Tasks from "./pages/Tasks"
import Snippets from "./pages/Snippets"

import AddProject from "./pages/AddProject"
import AddTask from "./pages/AddTask"
import AddSnippet from "./pages/AddSnippet"

import DefaultLayout from "./layouts/DefaultLayout"

function App() {

  return (
    <>
      <ProjectsProvider>
        <TasksProvider>
          <SnippetsProvider>
            <BrowserRouter>
              <Routes>
                <Route element={<DefaultLayout />}>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/projects/:id" element={<Tasks />} />
                  <Route path="/addProject" element={<AddProject />} />
                  <Route path="/addTask" element={<AddTask />} />
                  <Route path="/snippets" element={<Snippets />} />
                  <Route path="/addSnippet" element={<AddSnippet />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </SnippetsProvider>
        </TasksProvider>
      </ProjectsProvider>
    </>
  )
}

export default App