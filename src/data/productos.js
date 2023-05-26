
const productos = [
      {
        id: 1,
        nombre: "Croquetas para perros",
        descripcion: "Alimento balanceado para perros de todas las edades y tamaños.",
        precio: 25.99,
        stock: 50,
        imagen: "https://placehold.co/200?text=Imagen",
        categoria: "Alimentos",
      },
      {
        id: 2,
        nombre: "Juguete interactivo para gatos",
        descripcion: "Juguete con plumas y ratón para mantener entretenido a tu gato.",
        precio: 9.99,
        stock: 20,
        imagen: "https://placehold.co/200?text=Imagen",
        categoria: "Juguetes",
      },
      {
        id: 3,
        nombre: "Arena para gatos",
        descripcion: "Arena aglomerante para mantener la higiene de la caja de arena de tu gato.",
        precio: 12.5,
        stock: 30,
        imagen: "https://placehold.co/200?text=Imagen",
        categoria: "Higiene",
      },
      {
        id: 4,
        nombre: "Correa retráctil para perros",
        descripcion: "Correa ajustable y retráctil para pasear a tu perro cómodamente.",
        precio: 19.99,
        stock: 15,
        imagen: "https://placehold.co/200?text=Imagen",
        categoria: "Accesorios",
      },
      {
        id: 5,
        nombre: "Jaula para pájaros",
        descripcion: "Jaula espaciosa para alojar a tus pájaros de forma segura y cómoda.",
        precio: 49.99,
        stock: 10,
        imagen: "https://placehold.co/200?text=Imagen",
        categoria: "Hábitats",
      },
      {
        id: 6,
        nombre: "Croquetas premium para perros",
        descripcion: "Alimento premium para perros de todas las razas y tamaños.",
        precio: 39.99,
        stock: 40,
        imagen: "https://placehold.co/200?text=Imagen",
        categoria: "Alimentos",
      },
      {
        id: 7,
        nombre: "Rascador para gatos",
        descripcion: "Rascador de sisal para que tu gato afile sus uñas y se divierta.",
        precio: 14.99,
        stock: 25,
        imagen: "https://placehold.co/200?text=Imagen",
        categoria: "Juguetes",
      },
      {
        id: 8,
        nombre: "Arenero automático para gatos",
        descripcion: "Arenero automático con autolimpieza para mantener la higiene de tu gato.",
        precio: 79.99,
        stock: 12,
        imagen: "https://placehold.co/200?text=Imagen",
        categoria: "Higiene",
      },
      {
        id: 9,
        nombre: "Cama acolchada para perros",
        descripcion: "Cama acolchada de lujo para que tu perro descanse cómodamente.",
        precio: 29.99,
        stock: 18,
        imagen: "https://placehold.co/200?text=Imagen",
        categoria: "Accesorios",
      },
      {
        id: 10,
        nombre: "Terrario para reptiles",
        descripcion: "Terrario de vidrio ideal para alojar reptiles y anfibios.",
        precio: 89.99,
        stock: 8,
        imagen: "https://placehold.co/200?text=Imagen",
        categoria: "Hábitats",
      },
      {
        id: 11,
        nombre: "Comida húmeda para perros",
        descripcion: "Comida enlatada de alta calidad para perros de todas las edades.",
        precio: 2.99,
        stock: 60,
        imagen: "https://placehold.co/200?text=Imagen",
        categoria: "Alimentos",
      },
      {
        id: 12,
        nombre: "Pelota de caucho para perros",
        descripcion: "Pelota de caucho resistente para juegos de lanzar y buscar con tu perro.",
        precio: 7.99,
        stock: 30,
        imagen: "https://placehold.co/200?text=Imagen",
        categoria: "Juguetes",
      },
      {
        id: 13,
        nombre: "Arena de sílice para gatos",
        descripcion: "Arena de sílice absorbente para controlar los olores en la caja de arena de tu gato.",
        precio: 14.5,
        stock: 35,
        imagen: "https://placehold.co/200?text=Imagen",
        categoria: "Higiene",
      },
      {
        id: 14,
        nombre: "Bozal ajustable para perros",
        descripcion: "Bozal de nylon ajustable para evitar mordidas y ladridos excesivos.",
        precio: 9.99,
        stock: 20,
        imagen: "https://placehold.co/200?text=Imagen",
        categoria: "Accesorios",
      },
      {
        id: 15,
        nombre: "Terrario para reptiles y anfibios",
        descripcion: "Terrario de plástico resistente para alojar reptiles y anfibios.",
        precio: 39.99,
        stock: 10,
        imagen: "https://placehold.co/200?text=Imagen",
        categoria: "Hábitats",
      },
      {
        id: 16,
        nombre: "Jaula grande para pájaros",
        descripcion: "Jaula espaciosa con perchas y comederos para alojar a tus pájaros de forma segura y cómoda.",
        precio: 59.99,
        stock: 15,
        imagen: "https://placehold.co/200?text=Imagen",
        categoria: "Hábitats",
      },
      {
        id: 17,
        nombre: "Terrario de cristal para reptiles",
        descripcion: "Terrario de cristal resistente con tapa de malla para alojar reptiles y anfibios.",
        precio: 79.99,
        stock: 10,
        imagen: "https://placehold.co/200?text=Imagen",
        categoria: "Hábitats",
      },
      {
        id: 18,
        nombre: "Cama acolchada para perros",
        descripcion: "Cama acolchada de lujo para que tu perro descanse cómodamente.",
        precio: 29.99,
        stock: 20,
        imagen: "https://placehold.co/200?text=Imagen",
        categoria: "Accesorios",
      },
      {
        id: 19,
        nombre: "Bozal ajustable para perros",
        descripcion: "Bozal de nylon ajustable para evitar mordidas y ladridos excesivos.",
        precio: 9.99,
        stock: 30,
        imagen: "https://placehold.co/200?text=Imagen",
        categoria: "Accesorios",
      },
      {
        id: 20,
        nombre: "Collar antipulgas para gatos",
        descripcion: "Collar repelente de pulgas y garrapatas para proteger a tu gato de parásitos externos.",
        precio: 14.99,
        stock: 25,
        imagen: "https://placehold.co/200?text=Imagen",
        categoria: "Higiene",
      },
      {
        id: 21,
        nombre: "Cepillo de dientes para perros",
        descripcion: "Cepillo de dientes y pasta dental especial para perros, ideal para mantener su higiene bucal.",
        precio: 8.99,
        stock: 35,
        imagen: "https://placehold.co/200?text=Imagen",
        categoria: "Higiene",
      },
      {
        id: 22,
        nombre: "Pelota resistente para perros",
        descripcion: "Pelota de caucho resistente para juegos de lanzar y buscar con tu perro.",
        precio: 6.99,
        stock: 40,
        imagen: "https://placehold.co/200?text=Imagen",
        categoria: "Juguetes",
      },
      {
        id: 23,
        nombre: "Juguete interactivo para gatos",
        descripcion: "Juguete con plumas y ratón para mantener entretenido a tu gato.",
        precio: 9.99,
        stock: 30,
        imagen: "https://placehold.co/200?text=Imagen",
        categoria: "Juguetes",
      },
      {
        id: 24,
        nombre: "Comida seca para perros",
        descripcion: "Alimento seco de alta calidad para perros de todas las edades y tamaños.",
        precio: 24.99,
        stock: 50,
        imagen: "https://placehold.co/200?text=Imagen",
        categoria: "Alimentos",
      },
      {
        id: 25,
        nombre: "Comida húmeda para gatos",
        descripcion: "Comida enlatada de alta calidad para gatos de todas las edades.",
        precio: 2.99,
        stock: 60,
        imagen: "https://placehold.co/200?text=Imagen",
        categoria: "Alimentos",
      },
  ] 

export default productos
