import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import AddGroup from './pages/AddGroup'
import Groups from './pages/Groups'
import Messages from './pages/Messages'
import BottomNav from './components/BottomNav'
import './App.css'


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/groups" element={<Groups />} />
                <Route path="/add" element={<AddGroup />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <BottomNav />
        </BrowserRouter>
    )
}
