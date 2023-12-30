import { Heading } from "@chakra-ui/react";

interface Props {
  selectedPlatform: string | null;
  selectedGenre: string | null;
}

const GameHeading: React.FC<Props> = ({ selectedPlatform, selectedGenre }) => {
  const heading = [selectedPlatform || "", selectedGenre || "", "Games"]
    .join(" ")
    .trim();

  return (
    <Heading as="h2" marginBottom={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
