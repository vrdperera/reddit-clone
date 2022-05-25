import { Input, Button, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';

const SignUp: React.FC = () => {
  const [signup, setSignUp] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const setAuthModalState = useSetRecoilState(authModalState);

  const handleSubmit = () => {};

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUp((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        required
        name="email"
        type="email"
        placeholder="EMAIL"
        mb={2}
        onChange={handleChange}
        fontSize="10pt"
        _placeholder={{ color: 'gray.500' }}
        _hover={{ bg: 'white', border: '1px solid ', borderColor: 'blue.500' }}
        _focus={{
          outline: 'none',
          bg: 'white',
          border: '1px solid ',
          borderColor: 'blue.500',
        }}
        bg="gray.50"
      />
      <Input
        required
        name="password"
        type="password"
        placeholder="PASSWORD"
        onChange={handleChange}
        fontSize="10pt"
        _placeholder={{ color: 'gray.500' }}
        _hover={{ bg: 'white', border: '1px solid ', borderColor: 'blue.500' }}
        _focus={{
          outline: 'none',
          bg: 'white',
          border: '1px solid ',
          borderColor: 'blue.500',
        }}
        bg="gray.50"
        mb={2}
      />
      <Input
        required
        name="confirmPassword"
        type="password"
        placeholder="CONFIRM PASSWORD"
        onChange={handleChange}
        fontSize="10pt"
        _placeholder={{ color: 'gray.500' }}
        _hover={{ bg: 'white', border: '1px solid ', borderColor: 'blue.500' }}
        _focus={{
          outline: 'none',
          bg: 'white',
          border: '1px solid ',
          borderColor: 'blue.500',
        }}
        bg="gray.50"
        mb={2}
      />

      <Button width="100%" height="36px" mt={2} mb={2} type="submit">
        SIGN Up
      </Button>
      <Flex fontSize="9pt" justify="center">
        <Text mr={2}>Already a redditor?</Text>
        <Text
          color="blue.500"
          cursor="pointer"
          fontWeight={700}
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: 'login',
            }))
          }
        >
          LOG IN
        </Text>
      </Flex>
    </form>
  );
};
export default SignUp;
