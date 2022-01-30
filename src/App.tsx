import { ToastComponent as Toast } from './components/Toast';
import { Container } from './components/Container';
import { AppBar } from '@components/AppBar';
import { useTheme } from '@emotion/react';
import { Wrapper } from '@components/Wrapper';
import { Box } from '@components/Box';

export const App = () => {
  const { colors, baseline } = useTheme();

  return (
    <>
      <AppBar backgroundColor={colors.primary} />
      <Box mt={`${baseline.b4}px`}>
        <Toast />
      </Box>
      <Wrapper>
        <Container />
      </Wrapper>
    </>
  );
};

export default App;
