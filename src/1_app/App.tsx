import { Link, Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import './styles/index.scss'
import { useTheme } from '1_app/providers/ThemeProvider'
import { Main } from '2_pages/Main'
import { About } from '2_pages/About'

export const App = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <div className={`main ${theme}`}>
            <Link to="/">Главная</Link>
            <Link to="/about">О нас</Link>

            <button onClick={toggleTheme}>Тема</button>

            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Suspense>
        </div>
    )
}

const Loading = () => <h2>🌀 Loading...</h2>
