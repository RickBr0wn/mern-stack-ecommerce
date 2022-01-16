import Navbar from '../components/Navbar'
import Message from '../components/Message'
import Slider from '../components/Slider'
import Categories from '../components/Categories'

const Home = () => {
	return (
		<div>
			<Message />
			<Navbar />
			<Slider />
			<Categories />
		</div>
	)
}

export default Home
