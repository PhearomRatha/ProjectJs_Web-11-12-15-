let result="";
let resultClothes="";


fetch("Product.json")
.then(res=>res.json())
.then(data=>{
    data.Products.forEach((value=>{
        result += `
         <div class="col-lg-3 mt-4"  key=${value.id}>
          <div class="card">
                    <img src="${value.image}" alt="${value.name}" class="card-img-top">
                    <div class="card-body">
                      <h3 class="card-title">${value.Price}$  </h3>
                      <p class="card-text">${value.title}</p>
                      <a href="${value.link}" class="btn btn-primary">BUY NOW</a>
                    </div>
            </div>
          </div>
        `
        
    })),
    // getclothes
    data.Clothes.forEach((value=>{
      resultClothes +=`
      <div class="col-lg-3 mt-4"  key=${value.id}>
          <div class="card">
                    <img src="${value.image}" alt="${value.name}" class="card-img-top">
                    <div class="card-body">
                      <h3 class="card-title">${value.price}$  </h3>
                      <p class="card-text">${value.title}</p>
                      <a href="${value.link}" class="btn btn-primary">BUY NOW</a>
                    </div>
            </div>
          </div>
    
      `;
    }))

    
  
    document.getElementById("result").innerHTML=result;
    document.getElementById("getClothes").innerHTML=resultClothes;
})
 .catch(error=>{
                console.error(error);
                
  })