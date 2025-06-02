import { createEffect, type Component, type JSX } from 'solid-js';

interface TextareaProps {
  autofocus?: boolean;
}

export const Textarea: Component<
  TextareaProps & JSX.TextareaHTMLAttributes<HTMLTextAreaElement>
> = (props) => {
  let textareaRef!: HTMLTextAreaElement;

  createEffect(() =>
    textareaRef && props.autofocus ? textareaRef.focus() : null
  );

  return <textarea {...props} ref={textareaRef} />;
};
