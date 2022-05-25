import { Button, Flex, Image, Text } from '@chakra-ui/react';

const OAuthButtons: React.FC = () => {
  return (
    <Flex direction="column" mb={4} width="100%">
      <Button variant="oauth" mb={2}>
        <Image src="/images/googlelogo.png" alt="Google Logo" height="20px" />
        <Text ml={4}>Continue with google</Text>
      </Button>

      <Button variant="oauth" mb={2}>
        {/* <Image src="/images/googlelogo.png" alt="Google Logo" height="20px" /> */}
        <Text ml={4}>Continue with Email</Text>
      </Button>
    </Flex>
  );
};
export default OAuthButtons;
