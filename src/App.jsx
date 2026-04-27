import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Tasks from "./pages/Tasks"
import AddTask from "./pages/AddTask"
import Snippet from "./pages/Snippet"
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
              <Route path="/tasks" element={<Tasks />} />
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