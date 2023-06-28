import './App.css'
import Application from './components/application/application'
import Counter from './components/counter/counter'
import Skills from './components/skills/skills'
import MuiMode from './components/mui/muiMode'

import { AppProviders } from './providers/app-providers'

function App() {
  // const skills = ["html", "css", "js", "ts"];
  return (
    <AppProviders>
      <div className="App">
        {/* <header className="App-header">
          <Application />
          <Skills skills={skills} />
          <Counter />
        </header> */}
        <MuiMode />
      </div>
    </AppProviders>
  )
}

export default App
