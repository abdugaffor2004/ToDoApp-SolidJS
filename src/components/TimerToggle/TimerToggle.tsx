import { IconAlarm } from '@tabler/icons-solidjs';
import { type Component } from 'solid-js';
import { TimerCountDown } from './TimerCountDown';

interface TimerToggleProps {
  value: boolean;
  onChange: (isFocusModeOn: boolean) => void;
}

export const TimerToggle: Component<TimerToggleProps> = (props) => {
  const handleTimerButtonClick = () => {
    props.onChange(!props.value);
  };

  return (
    <button
      onClick={handleTimerButtonClick}
      class={`btn  text-black text-[1rem]  ${
        props.value ? 'bg-red-500 text-white' : 'bg-white'
      }`}
    >
      <IconAlarm size={22} />
      {props.value ? <TimerCountDown duration={30} /> : 'Focus mode'}
    </button>
  );
};
