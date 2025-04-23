import './App.css'
import VisitorCounter from './components/VisitorCounter'
import './components/VisitorCounter.css'

function App() {
  return (
    <>
      <div className="app-container">
        <header>
          <h1>Visitor Counter App</h1>
          <p>A React application that tracks and displays visitor counts using Redis</p>
        </header>
        
        <main>
          <VisitorCounter />
        </main>
        
        <footer>
          <p>Built with React, Express, and Redis</p>
        </footer>
      </div>
    </>
  )
}

export default App
