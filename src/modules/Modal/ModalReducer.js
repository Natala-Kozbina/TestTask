import { OPEN, CLOSE } from './ModalActions';

const initialState = {
  isOpen: false,
};

const ModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN: {
      return {
        isOpen: true,
      };
    }

    case CLOSE: {
      return {
        isOpen: false,
      };
    }

    default: {
      return state;
    }
  }
};

export const isModalOpen = state => state.modal.isOpen;

export default ModalReducer;
