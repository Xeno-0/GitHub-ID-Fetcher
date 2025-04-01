document.getElementById("submit-btn").addEventListener("click", searchId)

function searchId() {
    var gitUser = (document.getElementById("gitUser-el").value).toString()
    console.log("Button clicked!")
    var finalUser = gitUser.split(' ').join('')
    console.log(finalUser)
    let url = "https://api.github.com/users/" + finalUser
    let repoUrl = "https://github.com/" + finalUser + "?tab=repositories"
    fetch(url).then(res=>res.json()).then(data=>{
        if(data.message){
            document.getElementById("res").innerText = "Profile Not Found"
        } else{
            document.getElementById("res").innerHTML = `
                <img src = "${data.avatar_url} style="width:25%" id="pfp">
                <p id="userName">${data.name}</p>
                <p class="userDetails">${data.followers} Followers , ${data.following} Following</p>
                <p class="userDetails"><i class="fa-solid fa-location-dot"></i>  ${data.location}</p>
                <p class="userDetails">${data.bio}</p>
                <a href="${repoUrl}" target=_blank >View Repositories</a>
            `
        }
    }).catch(e=>{
        console.log(e)
    })

}

