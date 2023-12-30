import { HStack, Tooltip } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaQuestionCircle,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiAtari, SiNintendo, SiSega } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIcon: React.FC<Props> = ({ platforms }) => {
  const iconMap: { [key: string]: IconType } = {
    "apple-ii": FaApple, // Assuming using the same Apple icon for all Apple-related products
    "game-boy-advance": SiNintendo,
    "game-boy-color": SiNintendo,
    "game-boy": SiNintendo,
    "nintendo-3ds": SiNintendo,
    "nintendo-64": SiNintendo,
    "nintendo-ds": SiNintendo,
    "nintendo-dsi": SiNintendo,
    "nintendo-switch": SiNintendo,
    "ps-vita": FaPlaystation,
    "wii-u": SiNintendo,
    "xbox-one": FaXbox,
    "xbox-series-x": FaXbox,
    "neo-geo": FaQuestionCircle,
    android: FaAndroid,
    atari: SiAtari,
    gamecube: SiNintendo,
    ios: MdPhoneIphone,
    linux: FaLinux,
    mac: FaApple,
    macintosh: FaApple,
    macos: FaApple,
    nes: SiNintendo,
    nintendo: SiNintendo,
    pc: FaWindows,
    playstation: FaPlaystation,
    playstation1: FaPlaystation,
    playstation2: FaPlaystation,
    playstation3: FaPlaystation,
    playstation4: FaPlaystation,
    playstation5: FaPlaystation,
    psp: FaPlaystation,
    sega: SiSega,
    snes: SiNintendo,
    web: BsGlobe,
    wii: SiNintendo,
    xbox: FaXbox,
    xbox360: FaXbox,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => {
        const Icon = iconMap[platform.slug] || FaQuestionCircle;
        return (
          <Tooltip
            key={platform.id}
            label={platform.name}
            placement="bottom"
            aria-label="Platform icon"
            fontSize="md"
          >
            <span>
              <Icon />
            </span>
          </Tooltip>
        );
      })}
    </HStack>
  );
};

export default PlatformIcon;
