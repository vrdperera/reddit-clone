import { Flex } from '@chakra-ui/react';
import AuthModal from '../../modal/auth/auth-modal';
import AuthButtons from './authButtons';

interface RightContentProps {}

const RightContent: React.FC<RightContentProps> = () => {
  return (
    <>
      <AuthModal />

      <Flex justify="center" align="center">
        <AuthButtons />
      </Flex>
    </>
  );
};
export default RightContent;
