import React from "react";
import { Button, Tooltip } from "@chakra-ui/react";
import { IconBaseProps } from "react-icons";
import {
  FaFrownOpen,
  FaLaughBeam,
  FaMeh,
  FaSadTear,
  FaSmile,
} from "react-icons/fa";

interface Props {
  rating: number;
}

const Emoji: React.FC<Props> = ({ rating }) => {
  const emojiMap: {
    [key: number]: React.ComponentType<IconBaseProps>;
  } = {
    1: FaSadTear,
    2: FaFrownOpen,
    3: FaMeh,
    4: FaSmile,
    5: FaLaughBeam,
  };

  const EmojiIcon = emojiMap[rating] || null; // Fallback to null if the rating is not found

  return (
    EmojiIcon && (
      <Tooltip label={`Rating: ${rating}/5`}>
        <Button
          leftIcon={<EmojiIcon />}
          isDisabled={true}
          bg={{}}
          _hover={{}}
          _focus={{}}
          p={0}
          fontSize="x-large"
        />
      </Tooltip>
    )
  );
};

export default Emoji;
