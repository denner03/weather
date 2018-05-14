const cidade = document.getElementById('cidade');
const btn = document.getElementById('btn-search');
const renderInfo = document.getElementById('info');
const tokenId = "f2118f88560e47ec0ed16848bc4e2d44";
const appId = "a16f2bea3c0d5b0ef61b2b031e8724d2";

btn.addEventListener('click', (e) => {
  e.preventDefault()
  const cidadeValue = cidade.value;
  consultaEstado(cidadeValue)
});

function consultaEstado(cidade) {
  const URL = `http://apiadvisor.climatempo.com.br/api/v1/locale/city?name=${cidade}&token=${tokenId}`;
  const request = fetch(URL)
  request
  .then(data => data.json())
  .then(data => {
    console.log(data)
  })
}