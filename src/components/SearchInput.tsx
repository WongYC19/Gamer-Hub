import { Tooltip, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

interface Props {
  onSearch: (search: string) => void;
}

const SearchInput: React.FC<Props> = ({ onSearch }) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const value = ref.current?.value;

      if (value) onSearch(value);
    }
  };

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    const value = ref.current?.value;
    if (value) onSearch(value);
  };

  return (
    <InputGroup ml={{ lg: 40 }}>
      <InputLeftElement
        borderRadius={20}
        onClick={handleClick}
        cursor="pointer"
      >
        <Tooltip hasArrow label="Click to search" placement="auto-end">
          <span>
            <BsSearch />
          </span>
        </Tooltip>
      </InputLeftElement>

      <Input
        borderRadius={20}
        type="text"
        placeholder="Search games..."
        variant="filled"
        onKeyDown={handleKeyDown}
        ref={ref}
      />
    </InputGroup>
  );
};

export default SearchInput;
