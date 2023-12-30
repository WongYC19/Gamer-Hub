import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import PlatformIcon from "./PlatformIcon";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden" boxShadow="md">
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <HStack justifyContent="space-between" mb={3}>
          <PlatformIcon
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <HStack justifyContent="space-between" alignItems="center">
          <Heading fontSize="2xl">{game.name}</Heading>
          <Emoji rating={game.rating_top} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
