const store = Redux.createStore(moodReducer);

const face = document.getElementById('face');


document.getElementById('happy').addEventListener('click', function () {
    store.dispatch({ type: 'HAPPY', payload: 'ʘ‿ʘ' });
});

document.getElementById('sad').addEventListener('click', function () {
    store.dispatch({ type: 'SAD', payload: '⊙︿⊙' });
});

document.getElementById('mad').addEventListener('click', function () {
    store.dispatch({ type: 'MAD', payload: 'ಠ▃ಠ' });
});
function renderFace() {
    face.innerHTML = store.getState().face;
  };
renderFace()
store.subscribe(renderFace);