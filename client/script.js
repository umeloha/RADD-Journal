let entryInput = document.getElementById("textArea");

try {
entryInput.addEventListener("keyup", function(e){
    if (e.key === 'Enter') {
        e.preventDefault();
        console.log(entryInput.value);
        postToServer(entryInput.value);
    }
})
} catch (error) {
console.log(error)
}

function clearInput() {
    document.getElementById("textArea").value = '';
}

function deletePost() {
    deleteFromServer(this.value);
}

async function postToServer(value){
    const postData = {
        name: value
    };
    try {
        const response = await fetch('http://localhost:3007/', {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
        });
        if (!response.ok) {
        const message = 'Error with Status Code: ' + response.status;
        throw new Error(message);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

//postToServer("jhello")

async function deleteFromServer(){
    try {
        const response = await fetch('http://localhost:3007/', {
          method: "delete"
        });
        if (!response.ok) {
          const message = 'Error with Status Code: ' + response.status;
          throw new Error(message);
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
}


async function obtainFromServer(){
    try {
        const response = await fetch('http://localhost:3007/api/');
        if (!response.ok) {
          const message = 'Error with Status Code: ' + response.status;
          throw new Error(message);
        }
        const data = await response.json();
        console.log(data);
        let para = document.createElement("p");
        para.textContent = data.x
        document.getElementById('x').insertAdjacentElement("afterbegin", para);
      } catch (error) {
        console.log(error);
      }
}

obtainFromServer();

// use insertAdjacentElement('afterbegin', element) to add each new post to top of page
