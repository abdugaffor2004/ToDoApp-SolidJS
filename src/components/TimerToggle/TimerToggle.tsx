import { IconAlarm } from '@tabler/icons-solidjs';
import { createEffect, createSignal } from 'solid-js';
import { TimerCountDown } from './TimerCountDown';

export const TimerToggle = () => {
  const [isFocusModeOn, setIsFocusModeOn] = createSignal(false);

  createEffect(() => console.log(isFocusModeOn()));
  return (
    <button
      onClick={() => setIsFocusModeOn((prev) => !prev)}
      class={`btn  text-black text-[1rem]  ${
        isFocusModeOn() ? 'bg-red-500 text-white' : 'bg-white'
      }`}
    >
      <IconAlarm size={22} />
      {isFocusModeOn() ? <TimerCountDown duration={30} /> : 'Focus mode'}
    </button>
  );
};
