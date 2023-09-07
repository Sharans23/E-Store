fetch("https://fakestoreapi.com/products/category/women's clothing").then((data)=>{

    return data.json();
}).then((completedata)=>{
    // console.log(completedata);
    let data1="";
    completedata.map((values)=>{
        data1+=`<div class="card" style="width: 18rem;">
        <img src=${values.image} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${values.title.length > 16 ? values.title.substring(0,16).concat('  ...more'):values.title}</h5>
          <p class="descriptiom"><b>Description:-</b> ${values.description.length > 70 ? values.description.substring(0,70).concat('...more'):values.description}</p>
          <p class="category"><b>Category:-</b> ${values.category}</p>
          <p class="price"><b>Price:-</b> $${values.price}</p>
          <a href="#" class="btn btn-outline-dark">ADD TO CART</a>
        </div>
      </div>`
    });
    document.getElementById("cards").innerHTML=data1;
}).catch((err)=>{
    console.log(err);;
})