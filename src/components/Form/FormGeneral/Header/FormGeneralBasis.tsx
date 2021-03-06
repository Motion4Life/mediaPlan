import { useEffect } from 'react';
import { useTheme } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@components/Box';
import { Textfield } from '@components/Form/elements';
import { Baseline } from '@interface/index';
import { State } from '@store/interface';
import { mediaPlanActions } from '@store/feature/mediaPlan';
import { TypeVariants } from '@type/index';

export const FormGeneralBasis = (): JSX.Element => {
  const dispatch = useDispatch();

  const {
    title,
    type,
    startDate,
    endDate,
    isTitle,
    isStartDate,
    isEndDate,
    isDateError,
  } = useSelector((state: State) => state.mediaPlan);

  const { baseline }: Baseline = useTheme();

  // DEBOUNCE
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(mediaPlanActions.handleIsTitle(!!title));
      dispatch(mediaPlanActions.handleIsStartDate(!!startDate));
      dispatch(mediaPlanActions.handleIsEndDate(!!endDate));
    }, 300);

    return () => clearTimeout(timer);
  }, [title, startDate, endDate, dispatch]);

  // VALIDATE DATE
  useEffect(() => {
    const timer = setTimeout(() => {
      if (startDate && endDate) {
        const isError = Date.parse(startDate) > Date.parse(endDate);
        dispatch(mediaPlanActions.handleIsDateError(isError));
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [startDate, endDate, dispatch]);

  const onHandleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: TypeVariants
  ) => {
    const { value } = event.target;

    dispatch(mediaPlanActions.handleType(type));

    switch (type) {
      case 'title':
        dispatch(mediaPlanActions.handleTitle(value));
        break;
      case 'startDate':
        dispatch(mediaPlanActions.handleStartDate(value));
        break;
      case 'endDate':
        dispatch(mediaPlanActions.handleEndDate(value));
        break;
    }
  };

  return (
    <>
      <Textfield
        value={title}
        isValue={isTitle}
        helperText={'helperText.characterMax'}
        placeholder={'placeholder.title'}
        isCounter
        handleChange={(event) => onHandleChange(event, 'title')}
      />

      <Box display={'flex'} justifyContent={'space-between'}>
        <Textfield
          value={startDate}
          isValue={isStartDate}
          type={'date'}
          helperText={
            isDateError && type === 'startDate'
              ? 'Start date cannot start later'
              : 'helperText.startDate'
          }
          isError={isDateError && type === 'startDate'}
          width={`calc(50% - ${baseline.b2}px)`}
          handleChange={(event) => onHandleChange(event, 'startDate')}
        />

        <Textfield
          value={endDate}
          isValue={isEndDate}
          type={'date'}
          helperText={
            isDateError && type === 'endDate'
              ? 'Finish date cannot start earlier'
              : 'helperText.finishDate'
          }
          isError={isDateError && type === 'endDate'}
          width={`calc(50% - ${baseline.b2}px)`}
          handleChange={(event) => onHandleChange(event, 'endDate')}
        />
      </Box>
    </>
  );
};
