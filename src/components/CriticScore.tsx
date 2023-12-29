import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore: React.FC<Props> = ({ score }) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      colorScheme={color}
      fontSize={14}
      paddingX={2}
      paddingY={1}
      borderRadius={4}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
