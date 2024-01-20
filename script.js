function getData(){
    console.log("button clicked");

    // step 1:create an XHR object
    var xhr = new XMLHttpRequest();
    console.log("unsent",xhr.readyState);

    // step 2:request specifiction
    //xhr.open("GET","input.txt",true);
    // xhr.open("GET","data.json",true);
    xhr.open("GET","https://jsonplaceholder.typicode.com/users",true);
    console.log("open",xhr.readyState);

    // step 3:sending the request
    xhr.send();
     
    // step 4: create an event listner
    xhr.onreadystatechange = function(){
        console.log("done",xhr.readyState);
        if(xhr.readyState== 4 && xhr.status == 200){
           // var date =this.responsetext; 
            var data =JSON.parse(this.responseText);
             console.log(data)
             var output=`<tr>
             <th>Name</th>
             <th>Email</th>
             </tr>`
             for(let i =0;i<data.length;i++){
                // output +=`<ul><li>${data[i].name}</li><li>${data[i].email}</li> </ul>`
                output +=`<tr>
                <td>${data[i].name}</td>
                <td>${data[i].emil}</td>
                </tr>
             }
            document.getElementById("s").innerHTML =output;
        }
    }
}