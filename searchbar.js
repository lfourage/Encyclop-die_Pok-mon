
addEventListener('input', searchbar())

function searchbar(){
    let input = document.getElementsByTagName('input').value;
    input = input.toLowerCase();
    const fiches = document.querySelectorAll('.fiche');

    for(i = 0; i < fiches.length; i++)
    {
        if(!fiches[i].textContent.toLowerCase().includes(input)){
            fiches[i].style.display = 'none';
        }
    }
}