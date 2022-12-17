document.getElementById('btnId').addEventListener("click",(e) =>{
    e.preventDefault()
    let othername = document.getElementById("othername").value;
    let firstName = document.getElementById("firstname").value
    let surname = document.getElementById("surname").value;
    let password =document.getElementById("password").value;
    let genders= document.getElementsByName("gender");
    let email= document.getElementById("email").value;
    let age = document.getElementsByName("age").value;
   



    let myGenderSelect=""
    for(let i=0; i<genders.length;i++){
        if(genders[i].checked){
            myGenderSelect = genders[i].value
            break
        }
    }
    
    // empty  form not validate

    //if(othername === ''){
        // let other_name_error=  document.getElementById("other_name_error");
      //other_name_error.innerHTML = "Empty other name field"
       // return
    //}else{
       // other_name_error.innerHTML = ""
    //}
    
if(email === "" || firstName === "" || othername === ""){
    alert("some field is empty")
    return
}

fetch("./flatfile.json",{
    method:"POST",
    body:"amen"
}).then(res=>res.json()).then(data=>{
    console.log(data)
})

const objAr = []
    let ans = {
        other_name:othername,
        firstName:firstName,
        surname:surname,
        email:email,
        password:password,
        gender:myGenderSelect,
        age:age,
        
        
    }
    localStorage.setItem("formdata",JSON.stringify(ans))
    console.log(ans)
    email = ""
    firstName = ''

    });

 

 const desiralizeObj = localStorage.getItem("formdata")
 let my_data = JSON.parse(desiralizeObj)

console.log(my_data); 
