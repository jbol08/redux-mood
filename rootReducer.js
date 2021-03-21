const INITIAL_STATE = {
    face: '◔_◔'
 }
function moodReducer (state =INITIAL_STATE, action) {
  switch (action.type) {
      case 'HAPPY':
          return { ...state, face: action.payload };
      case 'SAD':
          return { ...state, face: action.payload };
      case 'MAD':
          return { ...state, face: action.payload };
      default:
          return state;
  }
};

