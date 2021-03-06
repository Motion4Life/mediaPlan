import { Box } from '@components/Box';
import { Radio } from '@components/Form/elements';
import { Channels, RadioType } from '@type/index';

interface Props {
  name: Channels;
  value: RadioType;
  id: string;
  checked?: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormChannelRadio = ({
  name,
  value,
  id,
  checked = false,
  handleChange,
}: Props) => {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      height={'56px'}
    >
      <Radio
        name={name}
        value={value}
        id={id}
        checked={checked}
        handleChange={handleChange}
      />
    </Box>
  );
};
