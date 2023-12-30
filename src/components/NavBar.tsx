import { Box, Tooltip, Link, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchTerm: string) => void;
}

const NavBar: React.FC<Props> = ({ onSearch }) => {
  return (
    <HStack pl={3} align="center" height="100%">
      <Tooltip label="Gamer Hub" placement="right">
        <Box
          display="inline-block" // Makes the Box inline for the hover effect to work properly
          transition="transform 0.2s ease-in-out" // Smooth transition for the transform property
          _hover={{
            transform: "rotate(360deg) scale(1.1)", // Scales up the logo to 110% of its size
          }}
        >
          <Link href="/" isExternal={false}>
            <Image
              src={logo}
              alt="Logo"
              htmlWidth="50px"
              htmlHeight="60px"
              objectFit="contain"
              maxHeight="auto"
              maxWidth="100px"
            />
          </Link>
        </Box>
      </Tooltip>

      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
