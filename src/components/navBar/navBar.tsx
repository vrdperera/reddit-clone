import { Flex, Image } from '@chakra-ui/react';

const NavBar: React.FC = () => {
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align="center">
        <Image src="/images/redditFace.svg" alt="Reddit Logo" height="30px" />
        <Image
          src="/images/redditText.svg"
          alt="Reddit Word-Mark"
          height="46"
        />
      </Flex>
    </Flex>
  );
};

export default NavBar;
