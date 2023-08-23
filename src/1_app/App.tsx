import { Link } from 'react-router-dom'
import './styles/index.scss'
import { useTheme } from '1_app/providers/ThemeProvider'
import { AppRouter } from '6_shared/config'

export const App = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <div className={`main ${theme}`}>
            <Link to="/">Главная</Link>
            <Link to="/about">О нас</Link>

            <AppRouter />
            <button onClick={toggleTheme}>Тема</button>
        </div>
    )
}
