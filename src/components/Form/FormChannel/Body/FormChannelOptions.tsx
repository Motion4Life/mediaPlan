import React from 'react';
import { Box } from '@components/Box';
import { useDispatch, useSelector } from 'react-redux';
import {
  ChannelItemKeys,
  ChannelOption,
  Channels,
  RadioType,
} from '@type/index';
import { mediaPlanActions } from '@store/feature/mediaPlan';
import { State } from '@store/interface';
import { useTheme } from '@emotion/react';
import { Baseline } from '@interface/index';
import {
  FormChannelText,
  FormChannelRow,
  FormChannelTextField,
  FormChannelRadio,
} from '@components/Form/FormChannel';

interface Props {
  channelOptions: ChannelOption[];
}

export const FormChannelOptions = ({ channelOptions }: Props): JSX.Element => {
  const dispatch = useDispatch();
  const { baseline }: Baseline = useTheme();
  const { channelItems } = useSelector((state: State) => state.mediaPlan);

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value } = event.target;

    const payload = {
      name: name as Channels,
      type: type as ChannelItemKeys,
      value: value as RadioType | string,
    };

    dispatch(mediaPlanActions.handleChannelItem(payload));
  };

  return (
    <Box mt={`${baseline.b4}px`}>
      {channelOptions.map((option: ChannelOption) => {
        return (
          <FormChannelRow
            key={option.id}
            component={[
              <FormChannelText text={option.text} />,
              <FormChannelTextField
                name={option.text}
                value={channelItems[option.text].text}
                isError={isNaN(+channelItems[option.text].text)}
                helperText={'Enter numbers only'}
                handleChange={onHandleChange}
              />,

              <FormChannelRadio
                name={option.text}
                value={'constant'}
                checked={channelItems[option.text].radio === 'constant'}
                id={`${option.id}`}
                handleChange={onHandleChange}
              />,

              <FormChannelRadio
                name={option.text}
                value={'exclude'}
                checked={channelItems[option.text].radio === 'exclude'}
                id={`${option.id + 1}`}
                handleChange={onHandleChange}
              />,
            ]}
          />
        );
      })}
    </Box>
  );
};
