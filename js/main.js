function getFetch(){
    let email=document.getElementById("email").value;
      fetch(`https://api.eva.pingutil.com/email?email=${email}`)
        .then(res => res.json())
        .then(data => {
            if(data.data.deliverable&&data.data.valid_syntax){
                console.log('valid');
                document.getElementById("validation").innerHTML=" ";

            }else{
                console.log('invalid');
                document.getElementById("validation").innerHTML='Email invalid';
                document.getElementById("validation").style.color="#ff0000"
            }
        })
        .catch(error => console.log('error', error));
}
