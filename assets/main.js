const api = 'https://api.github.com/users'

function getUser(id){
    fetch(`${api}/${id}`)
    .then(response => response.json())
    .then(data => {
        title_user.textContent = data.login
        img_profile.src = data.avatar_url
        following.textContent = `Seguindo: ${data.following}`
        followers.textContent = `Seguidores: ${data.followers}`
        public_repos.textContent = `Repositórios: ${data.public_repos}`
        locations.textContent = `Localidade: ${data.location}`
    })
    .catch(error => console.error(error));
}

getUser("facebook");

function changeBackground(){
    let backCard = document.getElementById('backCard')
    let colors = ['blue', 'green', 'red', 'white', 'brown', 'yellow', 'purple', 'black']
    cor = 0
    cor = Math.floor(Math.random() * (colors.length + 1));

    backCard.style.backgroundColor = colors[cor];
}   
