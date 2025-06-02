export const getPosition = <T extends HTMLElement>(elementRef: T) => {
  if (!elementRef) return { top: 0, left: 0 };
  const rect = elementRef.getBoundingClientRect();
  return {
    top: rect.bottom + window.scrollY,
    left: rect.left + window.scrollX,
  };
};
