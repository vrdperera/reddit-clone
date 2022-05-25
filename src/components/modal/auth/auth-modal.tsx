import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Flex,
  Text,
} from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';
import AuthInputs from './auth-inputs';
import OAuthButtons from './oAuthButtons';
import { Divider } from '@chakra-ui/react';

const AuthModal: React.FC = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);

  const handleClose = () => {
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
  };

  return (
    <>
      <Modal
        isOpen={modalState.open}
        onClose={handleClose}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent width="1000px">
          <ModalHeader textAlign="center">
            {modalState.view === 'login' && 'Login'}
            {modalState.view === 'signup' && 'Sign Up'}
            {modalState.view === 'resetPassword' && 'Reset Password'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            pb={6}
          >
            <Flex
              direction="column"
              justify="center"
              align="center"
              width="70%"
            >
              <OAuthButtons />
              <Divider orientation="horizontal" />
              <Text color="gray.500" fontWeight={700}>
                OR
              </Text>
              <AuthInputs />
              {/* {PasswordReset} */}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;
