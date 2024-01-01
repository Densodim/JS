const $box = document.getElementById('box');


$box.innerText = 'New text';
console.log($box.innerText);

$box.style.backgroundColor = 'green';
$box.style.width = '500px';

$box.addEventListener('click', function (){
    alert('Click...');
})