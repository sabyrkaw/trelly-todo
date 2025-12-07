import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Header } from './components/Header.tsx'
import { PageTitle } from './components/PageTitle.tsx'
import { TaskList } from './components/TaskList.tsx'
import { TaskDetails } from './components/TaskDetails.tsx'
import { Footer } from './components/Footer.tsx'
// import { Users } from './components/Users.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/*<Users />*/}
    {/*<MainPage />*/}
  </StrictMode>,
)

function MainPage() {
  return (
    <div>
      <Header />
      <PageTitle />
      <div style={{ display: "flex", gap: "30px" }}>
        <TaskList />
        <TaskDetails />
      </div>
      <Footer />
    </div>
  )
}
