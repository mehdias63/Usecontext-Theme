import { createContext, useState, useContext } from 'react'
export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
	const [theme, setTheme] = useState('light')
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export const useTheme = () => {
	const context = useContext(ThemeContext)
	if (context === undefined)
		throw new Error('ThemeContext was used outside of ThemeProvider')
	return context
}
