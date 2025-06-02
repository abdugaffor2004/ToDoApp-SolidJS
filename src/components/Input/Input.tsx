import { createEffect, type Component } from 'solid-js';
import type { JSX } from 'solid-js/jsx-runtime';

export const Input: Component<JSX.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  let inputRef!: HTMLInputElement;

  createEffect(() => (inputRef && props.autofocus ? inputRef.focus() : null));

  return <input ref={inputRef} type="text" {...props} />;
};
