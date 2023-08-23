import { Link, Route, Routes } from 'react-router-dom'
import { AboutAsync } from './pages/About.async'
import { MainAsync } from './pages/Main.async'
import { Suspense } from 'react'
import './styles/index.scss'
import { useTheme } from './theme/useTheme'

export const App = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <div className={`main ${theme}`}>
            <Link to="/">Главная</Link>
            <Link to="/about">О нас</Link>

            <button onClick={toggleTheme}>Тема</button>

            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<MainAsync />} />
                    <Route path="/about" element={<AboutAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}

function Loading() {
    return <h2>🌀 Loading...</h2>
}
