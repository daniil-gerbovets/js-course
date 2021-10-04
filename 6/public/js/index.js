const runButton = document.getElementById('button_run');
let count = 1;
// eslint-disable-next-line camelcase
let outputResponse;

runButton.addEventListener('click', () => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${count}`)
    .then((response) => response.json()).then(
      (json) => {
        outputResponse = json;
      },
    ).then(() => {
      const clone = document.querySelector('.item').cloneNode(true);

      clone.childNodes[2].setAttribute('id', `title_output${count}`);
      clone.style.display = 'block';

      clone.querySelector('#body_output').innerText = outputResponse.body;
      document.querySelector('.item_list').appendChild(clone);

      document.getElementById(`title_output${count}`).innerText = outputResponse.title;

      count += 1;
    });
});
