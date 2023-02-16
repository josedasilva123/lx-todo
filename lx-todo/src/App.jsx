import { useContext } from 'react'
import { DarkModeContext } from './providers/DarkModeContext'
import AppRoutes from './routes/routes'
import { DarkTheme, LightTheme } from './styles';

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className="App">
      {darkMode === "TRUE" ? <DarkTheme /> : <LightTheme />}
      <AppRoutes />
    </div>
  )
}

export default App
