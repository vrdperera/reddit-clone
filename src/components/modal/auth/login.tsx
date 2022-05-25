import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [login, setLogin] = useState({ email: '', password: '' });
  const setAuthModalState = useSetRecoilState(authModalState);

  const handleSubmit = () => {};

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin((prev) => ({
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
      <Button width="100%" height="36px" mt={2} mb={2} type="submit">
        LOG IN
      </Button>
      <Flex fontSize="9pt" justify="center">
        <Text mr={2}>New here</Text>
        <Text
          color="blue.500"
          cursor="pointer"
          fontWeight={700}
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: 'signup',
            }))
          }
        >
          SIGN UP
        </Text>
      </Flex>
    </form>
  );
};
export default Login;
