import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App'
import ToggleButton from './pages/ToggleButton'; 
import FavoriteColorPicker from './pages/FavoriteColorPicker';
import TextLengthChecker from './pages/TextLengthChecker'; 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ToggleButton />
    <FavoriteColorPicker />
    <TextLengthChecker />
  </StrictMode>,
)
