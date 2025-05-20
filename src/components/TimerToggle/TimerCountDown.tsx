import { createEffect, createMemo, createSignal } from 'solid-js';

interface TimerCountDownProps {
  duration: number;
  onChange?: () => void;
}

export const TimerCountDown = (props: TimerCountDownProps) => {
  const endTime = createMemo(
    () => new Date().getTime() + props.duration * 1000 * 60
  );
  const [timeLeft, setTimeLeft] = createSignal(props.duration * 60 * 1000);

  const hours = createMemo(() =>
    Math.floor((timeLeft() / (1000 * 60 * 60)) % 24)
  );
  const minutes = createMemo(() => Math.floor((timeLeft() / (1000 * 60)) % 60));
  const seconds = createMemo(() => Math.floor((timeLeft() / 1000) % 60));

  createEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const remaining = endTime() - now;

      if (remaining < 0) {
        clearInterval(interval);
        setTimeLeft(0);
        props.onChange?.();
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    return interval;
  });

  return (
    <div>
      {String(hours()).padStart(2, '0')}:{String(minutes()).padStart(2, '0')}:
      {String(seconds()).padStart(2, '0')}
    </div>
  );
};
