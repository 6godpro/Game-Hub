import { HStack, Image, Switch } from "@chakra-ui/react"
import  logo from '../assets/logo.webp';


const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize='60px'/>
      <Switch colorScheme="green" />
    </HStack>
  )
}

export default NavBar