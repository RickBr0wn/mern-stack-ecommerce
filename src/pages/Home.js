import Navbar from '../components/Navbar'
import Message from '../components/Message'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'

const Home = () => {
	return (
		<div>
			<Message />
			<Navbar />
			<Slider />
			<Categories />
			<Products />
		</div>
	)
}

export default Home
