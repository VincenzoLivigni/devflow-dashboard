import { BrowserRouter, Route, Routes } from "react-router-dom"
import Tasks from "./pages/Tasks"
import Snippet from "./pages/Snippet"
import Dashboard from "./pages/Dashboard"
import DefaultLayout from "./layouts/DefaultLayout"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/snippet" element={<Snippet />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App