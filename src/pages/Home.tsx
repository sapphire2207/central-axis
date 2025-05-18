import BookDemo from "../components/BookDemo"
import BuildForAi from "../components/BuildForAi"
import BuildForScale from "../components/BuildForScale"
import FAQ from "../components/FAQ"
import Footer from "../components/Footer"
import Future from "../components/Future"
import Integrations from "../components/Intergrations"
import Landing from "../components/Landing"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <Integrations />
      <BuildForAi />
      <Future />
      <BuildForScale />
      <BookDemo />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home
