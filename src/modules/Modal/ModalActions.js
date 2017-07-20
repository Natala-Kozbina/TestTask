export const OPEN = 'MODAL/OPEN';
export const CLOSE = 'MODAL/CLOSE';

export const closeModal = () => ({
  type: CLOSE,
});

export const openModal = () => ({
  type: OPEN,
});
