const frame = document.querySelector("tbody");

fetch('data.json')
.then(data=>{
    return data.json();
})
.then(json=>{
    console.log(json.data);
    const posts = json.data;

    let tags = '';

    posts.map((data,index)=>{
        console.log(data);
        
        tags += `
            <tr>
                <td>${index+1}</td>
                <td>${data.title}</td>
                <td>${data.Date}</td>
            </tr>
        `;
    })

    frame.innerHTML = tags;
})