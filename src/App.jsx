import './App.css'
import Form from './components/Form'
import { ThemeProvider } from './context/ThemeContext'
import ToggleTheme from './components/ToggleTheme'

export default function MyApp() {
	return (
		<ThemeProvider>
			<Form />
			<ToggleTheme />
		</ThemeProvider>
	)
}
