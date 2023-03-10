const infos = document.getElementById('infos')
const imgProfile = document.getElementById('imgProfile')
const modal = document.getElementById('modal')
const api = 'https://api.github.com/users'
let searchUser = document.getElementById('searchUser')


// Função para enviar evento do input através do botão Enter
function keyUper(){
    searchUser.addEventListener('keyup', (event) =>{
        if (event.key === 'Enter') {
            event.preventDefault();
             document.getElementById("btnSearch").click();
        }
    })
}

keyUper();

// Função que traz informações do user através da API
function getUser(user){
    fetch(`${api}/${user}`)
    .then(response => response.json())
    .then(data => {
            if(data.message === 'Not Found'){
                infos.style.opacity = '0'
                imgProfile.style.opacity = '0'
                modal.style.display = 'flex'
                title_user.textContent = ''
                searchUser.value = '' //Zerando valor do input
            }else{
                searchUser.value = '' //Zerando valor do input
                infos.style.opacity = '1'
                imgProfile.style.opacity = '1'
                title_user.textContent = data.login
                img_profile.src = data.avatar_url
                following.textContent = `Seguindo: ${data.following}`
                followers.textContent = `Seguidores: ${data.followers}`
                public_repos.textContent = `Repositórios: ${data.public_repos}`
                locations.textContent = `Localidade: ${data.location}`

                changeBackground()
            }
    })
    .catch(error => console.error(error));
}

// Função de fechar modal
function closeModal(){
    modal.style.display = 'none';
}

// Função que troca a cor do card
function changeBackground(){
    let backCard = document.getElementById('backCard')
    let colors = ['blue', 'green', 'red', 'white', 'brown', 'yellow', 'purple', 'black', 'pink', 'orange', 'lemon']
    cor = 0
    cor = Math.floor(Math.random() * (colors.length - 1));

    backCard.style.backgroundColor = colors[cor];
}   

