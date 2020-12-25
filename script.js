const container = document.getElementById('container');

generateDog();

document.body.addEventListener('click', generateDog);

async function generateDog() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const res = await fetch('https://dog.ceo/api/breeds/image/random', config);

  const data = await res.json();

  container.innerHTML = '<img src="' + data.message + '">';
}
