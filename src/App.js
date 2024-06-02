import About from "./components/About"
import Info from "./components/Info"
import Footer from "./components/Footer"
import Interest from "./components/Interest"

export default function App() {
  return (
    <div className="app-container">
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  )
}