const getGitInfo = () => {
    const username = document.getElementById("usernameInput").value;
    const url = `https://api.github.com/users/${username}`;
    document.querySelector(".container").style.display = 'flex';
    const ajax = new XMLHttpRequest();
    ajax.open('GET', url);

    ajax.onreadystatechange = () => {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                const info = JSON.parse(ajax.responseText);

                const email = document.querySelector(".mail");
                email.href = `mailto:${info.email}`;

                const profilePic = document.querySelector(".image");
                profilePic.style.backgroundImage = `url(${info.avatar_url})`;

                const profileName = document.getElementById("profileName");
                profileName.innerHTML = info.name

                const login = document.getElementById("login");
                login.innerHTML = '@' + info.login

                const btnFollow = document.getElementById("btnFollow");
                btnFollow.href = info.html_url;

                const about = document.getElementById("about");
                about.innerHTML = info.bio;

                const git = document.getElementById("link-git");
                git.href = info.html_url;

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
