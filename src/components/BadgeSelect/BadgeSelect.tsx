import { IconChevronDown, IconCircleFilled } from '@tabler/icons-solidjs';
import { For } from 'solid-js';
import { Portal } from 'solid-js/web';
import { getPosition } from '../../utils/getElementPosition';
import { COLORS } from '../../constants';

export type Priority = 'low' | 'medium' | 'high';

interface BadgeSelectProps {
  options: Priority[];
  value: Priority;
  onChange: (priority: Priority) => void;
}

export const BadgeSelect = (props: BadgeSelectProps) => {
  let buttonRef!: HTMLButtonElement;
  let dropdownRef!: HTMLDivElement;

  return (
    <div class="relative">
      <button
        onBlur={() => (dropdownRef.style.display = 'none')}
        ref={buttonRef}
        onClick={(e) => {
          dropdownRef.style.display = 'block';
          e.stopPropagation();
        }}
        class={`badge badge-xl border-${COLORS[props.value]}-500  bg-${
          COLORS[props.value]
        }-100`}
      >
        <IconCircleFilled color={COLORS[props.value]} size={10} />
        <h4 class={`text-sm text-${COLORS[props.value]}-500 `}>
          {props.value}
        </h4>
        <IconChevronDown color={COLORS[props.value]} size={14} />
      </button>

      <Portal>
        <div
          ref={dropdownRef}
          class="fixed z-[999] hidden"
          style={{
            top: `${getPosition(buttonRef).top}px`,
            left: `${
              getPosition(buttonRef).left + buttonRef.offsetWidth / 18
            }px`,
          }}
        >
          <div class="menu bg-white text-black drop-shadow-xl mt-4 gap-2 min-w-28">
            <For each={props.options}>
              {(option) => {
                return (
                  <button
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
