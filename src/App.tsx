import './App.css'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Navbar from './components/navbar/menu'
import Introducao from './components/introducao/introducao'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contacts from './components/Contacts/Contacts'
import { Trans } from 'react-i18next'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Introducao />
        <About />
        <Projects />
        <Contacts />
      </main>
      <footer className="bg-black text-white text-center font-inter font-semibold py-6 text-sm md:text-base">
        <Trans i18nKey="description.footer">© 2026 Pedro Henrique Alves Lima. All rights reserved.</Trans>
      </footer>
    </div>
  )
}

export default App
