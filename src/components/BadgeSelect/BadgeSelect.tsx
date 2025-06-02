import { IconChevronDown, IconCircleFilled } from '@tabler/icons-solidjs';
import { createMemo, For, mergeProps } from 'solid-js';
import { Portal } from 'solid-js/web';
import { getPosition } from '../../utils/getElementPosition';
import { COLORS } from '../../constants';

export type Priority = 'low' | 'medium' | 'high';
interface Offset {
  top: number;
  left: number;
}

interface BadgeSelectProps {
  options: Priority[];
  value: Priority;
  offset?: Offset;
  onChange: (priority: Priority) => void;
}

export const BadgeSelect = (initialProps: BadgeSelectProps) => {
  const props = mergeProps(
    {
      offset: {
        top: 0,
        left: 0,
      },
    },
    initialProps
  );

  let buttonRef!: HTMLButtonElement;
  let dropdownRef!: HTMLDivElement;

  const initialColor = createMemo(() => COLORS[props.value]);

  return (
    <div class="relative">
      <button
        ref={buttonRef}
        onClick={(e) => {
          dropdownRef.style.display = 'block';
          dropdownRef.focus();
          e.stopPropagation();
        }}
        class={`badge badge-xl border-${initialColor()}-500  bg-${initialColor()}-100`}
      >
        <IconCircleFilled color={initialColor()} size={10} />
        <h4 class={`text-sm text-${initialColor()}-500 `}>{props.value}</h4>
        <IconChevronDown color={initialColor()} size={14} />
      </button>

      <Portal>
        <div
          onMouseLeave={() => (dropdownRef.style.display = 'none')}
          ref={dropdownRef}
          class="fixed z-[999] hidden"
          style={{
            top: `${getPosition(buttonRef).top + props.offset.top}px`,
            left: `${getPosition(buttonRef).left + props.offset.left}px`,
          }}
        >
          <div class="menu bg-white text-black drop-shadow-xl mt-2 gap-2 min-w-28">
            <For each={props.options}>
              {(option) => {
                return (
                  <button
                    onClick={() => props.onChange(option)}
                    class={`badge badge-lg border-${COLORS[option]}-500  bg-${COLORS[option]}-100  w-full`}
                  >
                    <h4 class={`text-sm text-${COLORS[option]}-500 `}>
                      {option}
                    </h4>
                  </button>
                );
              }}
            </For>
          </div>
        </div>
      </Portal>
    </div>
  );
};
