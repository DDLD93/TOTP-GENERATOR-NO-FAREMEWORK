var firebaseConfig = {
	apiKey: "AIzaSyD-tedQTg4b0EIkw8WahJkCEf2MziZP3L0",
    authDomain: "totp-generator-12baa.firebaseapp.com",
    databaseURL: "https://totp-generator-12baa-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "totp-generator-12baa",
    storageBucket: "totp-generator-12baa.appspot.com",
    messagingSenderId: "337057138190",
    appId: "1:337057138190:web:3a4e1c4d7eb410a57c5e5f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const list = []

var finalList



const anchor = document.querySelector(".anchor")


	
	db.collection('auth').get().then((data) =>{
		data.docs.forEach((e) => {
		  list.push(e.data())
	 // console.log(e.data())
		})
	}).then(() => {
        getdata()
    })
        
const getdata = () => {
    const newList = []
    list.map((e) => {
			var sublist = e
			fetch(`http://localhost:3001/auth/${e.key}`).then((response) => {
				response.text().then((e) => {
					sublist.code = e
					console.log(newList);
					newList.push(sublist)
					
					cardCreate(sublist.product, sublist.user, sublist.code)
				})
			}).catch((err) => {console.log(err);})
		})
}    
	
setInterval(() => {
   
}, 5000);


function cardCreate(product, usermane, code) {
  var div1 = document.createElement("div");
      div1.classList.add('card')
      div1.style.border = '0px'
      div1.style.width = '18rem'
      anchor.appendChild(div1); 

  var div2 = document.createElement("div");  
      div2.classList.add('card-body')
      div1.appendChild(div2)

  var cTitle = document.createElement("h5")
      cTitle.classList.add('card-title')
      cTitle.innerText= product
      div2.appendChild(cTitle)

  var cUser = document.createElement("h6")
      cUser.classList.add('card-subtitle', 'mb-2','text-muted')
      cUser.innerText= usermane
      cTitle.appendChild(cUser);

  var cCode = document.createElement("h2")
      cCode.classList.add("card-text")
      cCode.innerText= code
      cTitle.appendChild(cCode)
     
  var hr = document.createElement("hr")
      cCode.appendChild(hr) 
}