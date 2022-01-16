import Navbar from '../components/Navbar'
import Message from '../components/Message'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
	return (
		<div>
			<Message />
			<Navbar />
			<Slider />
			<Categories />
			<Products />
			<Newsletter />
			<Footer />
		</div>
	)
}

export default Home
