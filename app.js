const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

//içerisinde fotoğraf ve menuinfonun bulunacağı bir div oluşturdum ve  class ekledim
const menuContainer = document.createElement("div");
menuContainer.classList.add('row', 'gx-4');

//menümüz array halinde ve içindeki tüm itemlere etki etmek istediğimden for each kullandım 
menu.forEach((item) => {
  const menuItem = document.createElement("div");//div oluşturdum ve classlar verdim
  menuItem.classList.add('menu-items', 'col-12', 'col-md-6', 'mb-4');
  menuItem.dataset.category = item.category; //bu kısım kategori tanımlaması yapıyor ilerde kategori butonları için kullanılacak
  const menuInfo = document.createElement("div");//menü iteminin isim fiyat bilgisi ve açıklamasını içerecek div oluşturdum
  menuInfo.className = 'menu-info';
  const titlePrice = document.createElement("span");//bu kısımda span içerisine h4 etiketli başlık ve ücret ekledim. div de olabilirdi.
  titlePrice.innerHTML = `<h4>${item.title}</h4> <h4>${item.price}</h4>`;
  titlePrice.classList.add('menu-title');
  menuItem.appendChild(menuInfo); //burda artık oluşturduğum divlerin içlerine eklemelerimi yapıyorum. dışardaki divim olan menuItem içine menuInfoyu ekliyorum
  const desc = document.createElement("p"); //burada açıklama için p elementi ekliyorum 
  desc.textContent = item.desc;
  desc.className = 'menu-text';
  menuInfo.appendChild(titlePrice);//titlePrice'ı ve açıklamayı (desc) menuInfonun içine yerleştiriyorum
  menuInfo.appendChild(desc);

  const img = document.createElement("img"); //görseli ekliyorum
  img.src = item.img;
  img.className = 'photo';
  menuItem.appendChild(img);
  menuItem.appendChild(menuInfo);
  menuContainer.appendChild(menuItem);
});

document.querySelector('.section-center').appendChild(menuContainer);

//2 yol kullanarak button eklenebilir. 1. forEach metodu kullanarak. Diğeri sadece for kullanarak 

//const btnItem = [ "All", "Korea", "Japan", "China"];
//btnItem.forEach(function(el) {
//  var btn = document.createElement("button");
//  btn.classList.add('btn-item');
//  btn.innerHTML = el;
//  document.querySelector('.btn-container').appendChild(btn);
//})

//btnItem adında bir dizi (array) oluşturuyorum ve içinde "All", "Korea", "Japan", "China" olmak üzere dört farklı string (metin) değer bulunuyor.
const btnItem = ["All", "Korea", "Japan", "China"]; 
//Bir for döngüsü başlatıyorum. Döngü i değişkenini 0'dan başlatıyor ve i, btnItem dizisinin uzunluğundan (4 eleman) küçük olduğu sürece döngü çalışacak. Her döngü adımında i bir arttırılıyor (i += 1).
for (let i = 0; i < btnItem.length; i += 1) {
  const btn = document.createElement("button");//button oluşturuyorum ve class ekliyorum
  btn.classList.add('btn-item', 'btn', 'btn-outline-dark');
  //btnItem dizisindeki her bir eleman (btnItem[i]), butonun içeriği olarak atanıyor. Örneğin, ilk döngüde btn.innerHTML = "All";, ikinci döngüde ise "Korea" olarak atanır. Bu, butonun üzerinde görünecek metni belirler
  btn.innerHTML = btnItem[i];
  //Burada butona bir "click" (tıklama) olayı dinleyicisi ekliyorum. Kullanıcı butona tıkladığında, bir fonksiyon çalıştırılacak. (e) parametresi, tıklama olayını temsil eder ve tıklama hakkında bilgi sağlar (örneğin, tıklanan öğe).
  btn.addEventListener('click', (e) => {
    const category = e.target.textContent; //e.target, kullanıcının tıkladığı butonu ifade eder. textContent özelliği ile tıklanan butonun içindeki metin (örneğin, "All", "Korea", vb.) alınır ve category adlı değişkene atanır.
    filterMenuItems(category);//filterMenuItems adında bir fonksiyon çağrıyorum
  })
  document.querySelector('.btn-container').appendChild(btn);//oluşturduğum btn, btn-container'in içine yerleştiriyorum. Bu işlem her döngüde gerçekleşir, yani her bir buton sırasıyla bu container'a eklenir.

}
//filterMenuItems adında fonksiyon tanımlıyorum bu fonksiyon bir parametre alıyor: category. Bu parametre, filtreleme yapılacak kategoriyi temsil ediyor (örneğin: "Korea", "Japan", vb.).
function filterMenuItems(category) {
  const menuItems = document.querySelectorAll('.menu-items'); //tüm menu-items öğelerini seçiyorum.

  //forEach metodu ile menuItems listesindeki her bir öğe (menuItem) üzerinde bir döngü oluşturuluyor. Döngü her bir menü öğesi için sırayla çalışacak.
  menuItems.forEach((menuItem) => {

    //menuItem.dataset.category ile, menü öğesinin HTML'de data-category olarak belirtilen özelliği alınıyor. Bu, öğenin hangi kategoriye ait olduğunu gösteriyor.
    if (menuItem.dataset.category === category || category === 'All') { //Eğer menü öğesinin kategorisi (menuItem.dataset.category) ile seçilen kategori (category) aynıysa veya seçilen kategori "All" ise, koşul doğru olarak kabul ediliyor. Yani, bu menü öğesi ya ilgili kategoriye ait olmalı ya da "All" kategorisi seçilmiş olmalı.
      menuItem.style.display = 'flex'; //eğer yukarıdaki koşul doğruysa display özelliği flex olsun diyorum. block olursa alt alta gelir
    } else {
      //ğer menü öğesinin data-category değeri, seçilen kategoriyle eşleşiyorsa veya kategori "All" ise, o öğe görünür hale getiriliyor (display: flex). Aksi durumda, menü öğesi gizleniyor (display: none).
      menuItem.style.display = 'none';
    }
  });
}





