import styled from 'styled-components'
import Footer from '../components/Footer'
import Message from '../components/Message'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'

const Container = styled.div``
const Title = styled.h1`
	margin: 20px;
`
const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
`
const Filter = styled.div`
	margin: 20px;
`
const FilterText = styled.span`
	font-size: 20px;
	font-weight: 600;
	margin-right: 20px;
`
const Select = styled.select`
	-webkit-appearance: menulist-button;
	padding: 10px;
	margin-right: 20px;
`
const Option = styled.option`
	padding: 10px;
`

const ProductList = () => {
	return (
		<Container>
			<Navbar />
			<Message />
			<Title>Dresses</Title>
			<FilterContainer>
				<Filter>
					<FilterText>Filter Products</FilterText>
					<Select>
						<Option>White</Option>
						<Option>Black</Option>
						<Option>Red</Option>
						<Option>Blue</Option>
						<Option>Yellow</Option>
						<Option>Green</Option>
					</Select>
					<Select>
						<Option disabled selected>
							Size
						</Option>
						<Option>XS</Option>
						<Option>S</Option>
						<Option>M</Option>
						<Option>L</Option>
						<Option>XL</Option>
					</Select>
				</Filter>
				<Filter>
					<FilterText>Sort Products</FilterText>
					<Select>
						<Option selected>Newest</Option>
						<Option>Price (low - high)</Option>
						<Option>Price (high - low)</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<Products />
			<Newsletter />
			<Footer />
		</Container>
	)
}

export default ProductList
