async function getData(){
    const result = await fetch('https://fakestoreapi.com/products/');
    const products = await result.json();
    console.log(products)
    const jsonArr = products.map(elemento => Object.entries(elemento));
    console.log(jsonArr)
    const productsArrSlice = jsonArr.slice(0,2);
    products.forEach(element => {
        const randomInt = randomData(1, jsonArr.length);
        const randomIndex = randomInt;
        for(i = 0; i < productsArrSlice.length ; i++){
            if(element.id == i){
                const image = document.createRange().createContextualFragment(`
                <div class="card-1">
                    <img class="img-1" src="${jsonArr[randomIndex][5][1]}" alt="">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam est omnis inventore distinctio excepturi molestiae dolorem cum cupiditate nisi consequuntur deserunt commodi in, hic quibusdam quaerat eius ea. Nisi sed fugit similique molestiae fuga. 
                      <br>
                      <br>
                    Possimus aliquid atque tempora dicta voluptate, reprehenderit nemo ea eum, odit eius veniam impedit a nisi rerum quo facilis, aspernatur et numquam molestias? Provident ipsam explicabo magni vel rem culpa laboriosam magnam ratione impedit deserunt dignissimos eaque adipisci cumque quasi, molestias odio sequi asperiores a voluptatem. Voluptatibus, atque culpa. Voluptate minus iure magnam voluptatibus. Sit iste numquam facilis pariatur similique minus sunt totam adipisci accusantium provident quam officia mollitia porro iusto consequuntur veniam illo, ipsum unde. Dignissimos nesciunt facilis ratione, deleniti hic nobis in rerum sunt perspiciatis quo maxime rem dolores officia veritatis, aperiam voluptatibus sit nemo sed culpa tempore, dolorem aut modi suscipit quis.</p>
              
                </div>
                    
                    `)
                    const features_row = document.querySelector('.features-row');
                    features_row.append(image)
            }
        }
        function randomData(min, max){
            return Math.floor(Math.random() * (min - max + 1) + max)
        }
    });
}

async function getData2(){
    const result = await fetch('https://fakestoreapi.com/products/');
    const products = await result.json();
    console.log(products)
    const jsonArr = products.map(elemento => Object.entries(elemento));
    console.log(jsonArr)
    const productsArrSlice = jsonArr.slice(0,2);
    products.forEach(element => {
        const randomInt = randomData(1, jsonArr.length);
        const randomIndex = randomInt;
        for(i = 0; i < productsArrSlice.length ; i++){
            if(element.id == i){
                const image = document.createRange().createContextualFragment(`
                <div class="card-1">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam est omnis inventore distinctio excepturi molestiae dolorem cum cupiditate nisi consequuntur deserunt commodi in, hic quibusdam quaerat eius ea. Nisi sed fugit similique molestiae fuga. 
                      <br>
                      <br>
                    Possimus aliquid atque tempora dicta voluptate, reprehenderit nemo ea eum, odit eius veniam impedit a nisi rerum quo facilis, aspernatur et numquam molestias? Provident ipsam explicabo magni vel rem culpa laboriosam magnam ratione impedit deserunt dignissimos eaque adipisci cumque quasi, molestias odio sequi asperiores a voluptatem. Voluptatibus, atque culpa. Voluptate minus iure magnam voluptatibus. Sit iste numquam facilis pariatur similique minus sunt totam adipisci accusantium provident quam officia mollitia porro iusto consequuntur veniam illo, ipsum unde. Dignissimos nesciunt facilis ratione, deleniti hic nobis in rerum sunt perspiciatis quo maxime rem dolores officia veritatis, aperiam voluptatibus sit nemo sed culpa tempore, dolorem aut modi suscipit quis.</p>
                    <img class="img-1" src="${jsonArr[randomIndex][5][1]}" alt="">
                </div>
                    
                    `)
                    const features_row = document.querySelector('.features-row');
                    features_row.append(image)
            }
        }
        function randomData(min, max){
            return Math.floor(Math.random() * (min - max + 1) + max)
        }
    });
}


const btn_enviar = document.getElementById('btn-enviar');

const validaEmail = (e) => {
    e.preventDefault();
    const showcase_email = document.getElementById('showcase-email');
    if(showcase_email.value == ""){
        alertify.error( "El campo no puede estar vacío" );
        return false;
    }if(!emailValido(showcase_email)){
        alertify.error( "El campo Email no tiene el formato correcto" );
        return false;
    }
    alertify.success( "Formato Email correcto, Email enviado" );
    showcase_email.value = "";
    return true;
}

const emailValido = (showcase_email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(showcase_email.value)
}

btn_enviar.addEventListener("click", validaEmail)
getData()
getData2()