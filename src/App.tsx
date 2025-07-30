import { HashRouter, Route, Routes } from 'react-router'
import HomePage from './pages/Home'
import AIToolsPage from './pages/AIToolsPage'
import BlogPage from './pages/BlogPage'
import BlogDetailPage from './pages/BlogDetailPage'
import ContactPage from './pages/ContactPage'
import ScrollToTop from './components/ScrollToTop'
import LoadingProgress from './components/LoadingProgress'
import FeedbackWidget from './components/FeedbackWidget'

export default function App() {
  return (
    <HashRouter>
      <LoadingProgress />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ai-tools" element={<AIToolsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <ScrollToTop />
      <FeedbackWidget />
    </HashRouter>
  )
}
