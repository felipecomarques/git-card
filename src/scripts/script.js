const getGitInfo = (username) => {
    const url = 'https://api.github.com/users/felipecomarques';
    const ajax = new XMLHttpRequest();
    ajax.open('GET', url);

    ajax.onreadystatechange = () => {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                const info = JSON.parse(ajax.responseText);

                const profilePic = document.getElementById("profile-pic");
                profilePic.style.backgroundImage = `url(${info.avatar_url})`;
                console.log(info.avatar_url)

                const profileName = document.getElementById("profileName");
                profileName.innerHTML = info.name

                const login = document.getElementById("login");
                login.innerHTML = '@' + info.login

                const btnFollow = document.getElementById("btnFollow");
                btnFollow.href = info.html_url;

                const about = document.getElementById("about");
                about.innerHTML = info.bio;

                const repo = document.getElementById("Repo");
                repo.innerHTML = info.public_repos;

                const followers = document.getElementById("Followers");
                followers.innerHTML = info.followers;

                const following = document.getElementById("Following");
                following.innerHTML = info.following;
            } else {
                alert('Erro na requisição');
            }
        }
    }
    
    ajax.send();
}

// Descomente as linhas abaixo se quiser acionar a função ao clicar em um botão
// const btnPesquisar = document.querySelector('#pesquisar-perfil');
// btnPesquisar.addEventListener("click", getGitInfo);

document.addEventListener('DOMContentLoaded', function() {
    getGitInfo();
});
