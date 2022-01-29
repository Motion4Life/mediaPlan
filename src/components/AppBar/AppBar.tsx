import styled from '@emotion/styled';
import facepaint from 'facepaint';
import { Box } from '@components/Box';
import { Property } from 'csstype';
import { Icon } from '@components/Icon';
import { Button } from '@components/Button';

type Props = {
  backgroundColor?: Property.BackgroundColor;
};

const breakPoints = [600, 900];

const mediaQuery = facepaint(
  breakPoints.map((breakpoint) => `@media (min-width: ${breakpoint}px)`)
);

const StyledAppBar = styled.div<Props>(
  mediaQuery({ height: [56, 64] }),

  (props) => ({
    padding: `0 ${props.theme.baseline.b3}px`,
    backgroundColor: props.backgroundColor,
  })
);

export const AppBar = ({ backgroundColor }: Props) => {
  return (
    <StyledAppBar backgroundColor={backgroundColor}>
      <Box
        height={'100%'}
        width={'100%'}
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Icon type={'menuIcon'} />
        <Button variant={'contained'} color={'#28abe2'} size={'small'}>
          Dark Mode
        </Button>
      </Box>
    </StyledAppBar>
  );
};
