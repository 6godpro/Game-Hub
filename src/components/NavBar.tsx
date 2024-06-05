import { HStack, Image, Input } from "@chakra-ui/react"
import  logo from '../assets/logo.webp';
import ColorModeSwitch from "./ColorModeSwitch";


const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding='10px'>
      <Image src={logo} boxSize='60px'/>
      <Input variant='filled' onChange={(e) => console.log(e.target.value)} placeholder='Search...' width='50%'/>
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar