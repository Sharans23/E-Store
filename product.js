
fetch('https://fakestoreapi.com/products').then((data)=>{

    return data.json();
}).then((completedata)=>{
    // console.log(completedata);
    let data1="";
    completedata.map((values)=>{
        data1=`<div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img src=${values.image} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3"> ${values.title}</h1>
          <p class="lead">Descrition:- ${values.description}</p>
          <p class="categories">Category:- ${values.category}</p>
          <p class="prices">Price:- $${values.price}</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" class="btn btn-dark btn-lg px-4 me-md-2">Add to Cart</button>
          </div>
        </div>
        </div>`
    });
    document.getElementById("pro").innerHTML=data1;
}).catch((err)=>{
    console.log(err);;
})



