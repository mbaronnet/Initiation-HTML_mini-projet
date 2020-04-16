function MdpOpen(){

    var mot = document.getElementById('mdp').value

    if (mot == "coucou"){
        document.location.href="site_prof2.html"; 
    }
    else{ alert("Mauvais mot de passe")}
  }