import { createRoutesFromElements, Route } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { IssueDetails } from './pages/IssuePage'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/issues/:number" element={<IssueDetails />} />
    </Route>,
  ),
)
