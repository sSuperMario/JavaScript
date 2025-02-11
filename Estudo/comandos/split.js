let textodemonstrativo = "Esse é um testo para testar o metodo slice e algumas testar testar possibilidades do que ele pode fazer somado a ele pegarei um texto qualquer que eu encontrar pela internet Lorem ipsum dolor sit amet consectetur adipiscing elit blandit gravida malesuada efficitur tristique, eu finibus facilisis lacinia commodo quam vel vehicula varius urna. Vivamus mattis natoque vestibulum eu posuere faucibus lorem parturient, facilisis eget lobortis platea velit montes lacus, quam tincidunt facilisis elit morbi ullamcorper taciti. Ante nascetur accumsan dictum faucibus velit mauris eget arcu, ultricies non curabitur eu augue orci nisi vehicula, magna blandit consectetur amet malesuada pharetra justo. Aliquam magnis penatibus conubia ac tempus per tincidunt dui dolor, luctus congue ullamcorper varius quam integer pellentesque ad montes lacinia, habitant lacus rhoncus vestibulum id enim sit turpis. Tortor justo viverra quis rutrum aenean taciti consectetur sed";

let abc = textodemonstrativo.split(" ", 20)
console.log(abc)

// Ex²:

let categorias = "tv, celular, sofa, cama, notebook, livro";
let arrayCategorias = categorias.split(", ")
console.log(arrayCategorias)

// ao contrario

let categorias2 = ['tv', 'celular', 'sofa', 'cama', 'notebook', 'livro'];
let strCategorias = categorias2.join(" - ");
console.log(strCategorias)