import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import PinterestIcon from '@material-ui/icons/Pinterest'
import RoomIcon from '@material-ui/icons/Room'
import PhoneIcon from '@material-ui/icons/Phone'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import CardLogos from '../assets/cardlogos.jpg'

const Container = styled.div`
	display: flex;
`
const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`
const Center = styled.div`
	flex: 1;
	padding: 20px;
`
const Right = styled.div`
	flex: 1;
	padding: 20px;
`
const Logo = styled.h1``
const Description = styled.p`
	margin: 20px 0px;
`
const SocialContainer = styled.div`
	display: flex;
`
const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${props => props.color};
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 20px;
`
const Title = styled.h3`
	margin-bottom: 30px;
`
const List = styled.ul`
	margin: 0px;
	padding: 0px;
	display: flex;
	list-style: none;
	flex-wrap: wrap;
`
const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`
const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
`
const Payment = styled.img`
	height: 30px;
`

const Footer = () => (
	<Container>
		<Left>
			<Logo>SHOP.</Logo>
			<Description>
				Veggies sunt bona vobis, proinde vos postulo esse magis sierra leone
				bologi garlic beetroot rock melon parsley soybean courgette green bean
				mung bean desert raisin bitterleaf avocado sweet pepper.
			</Description>
			<SocialContainer>
				<SocialIcon color='385999'>
					<FacebookIcon />
				</SocialIcon>
				<SocialIcon color='e4405f'>
					<InstagramIcon />
				</SocialIcon>
				<SocialIcon color='55acee'>
					<TwitterIcon />
				</SocialIcon>
				<SocialIcon color='e60023'>
					<PinterestIcon />
				</SocialIcon>
			</SocialContainer>
		</Left>
		<Center>
			<Title>Useful links</Title>
			<List>
				<ListItem>Home</ListItem>
				<ListItem>Cart</ListItem>
				<ListItem>Mens Fashion</ListItem>
				<ListItem>Womens Fashion</ListItem>
				<ListItem>Accessories</ListItem>
				<ListItem>My Account</ListItem>
				<ListItem>Order Tracking</ListItem>
				<ListItem>Wishlist</ListItem>
				<ListItem>Terms</ListItem>
			</List>
		</Center>
		<Right>
			<Title>Contact</Title>
			<ContactItem>
				<RoomIcon style={{ marginRight: '10px' }} />
				46 Church Street, Uckfield. TN22 1BT
			</ContactItem>
			<ContactItem>
				<PhoneIcon style={{ marginRight: '10px' }} />
				+44 1825 362877
			</ContactItem>
			<ContactItem>
				<MailOutlineIcon style={{ marginRight: '10px' }} />
				info@rickbrown.co.uk
			</ContactItem>
			<Payment src={CardLogos} />
		</Right>
	</Container>
)

export default Footer
