import { IconButton, Tooltip, useColorMode } from "@chakra-ui/react";
import { BsMoon, BsStar } from "react-icons/bs";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const lightModeColorScheme = {
    bg: "purple.300",
    hoverBg: "purple.400",
    iconColor: "white",
    label: "To Dark Mode",
  };

  const darkModeColorScheme = {
    bg: "orange.200",
    hoverBg: "orange.300",
    iconColor: "gray.800",
    label: "To Light Mode",
  };

  // Determine the current color scheme based on the color mode
  const colorScheme =
    colorMode === "dark" ? darkModeColorScheme : lightModeColorScheme;

  return (
    // <HStack>
    <Tooltip label={colorScheme.label}>
      <IconButton
        onClick={toggleColorMode}
        p={2}
        borderRadius={20}
        aria-label="theme switch"
        bg={colorScheme.bg}
        color={colorScheme.iconColor}
        _hover={{ bg: colorScheme.hoverBg }}
      >
        {colorMode === "dark" ? <BsStar /> : <BsMoon />}
      </IconButton>
    </Tooltip>
  );
};

export default ColorModeSwitch;
