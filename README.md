# Basit Yemek Kategorisi Filtreleme Uygulaması (TR)

Bu, kullanıcıların belirli kategorilere göre yemekleri filtreleyip görüntüleyebileceği basit bir web uygulamasıdır. Kategoriler "Hepsi", "Kore", "Japonya" ve "Çin" şeklindedir. Kullanıcı, bir kategori seçtiğinde yalnızca o kategoriye ait yemekler görüntülenir.

## Ekran Görüntüsü
![screenshot](/screenshot/ss.png)

## Özellikler

- **Dinamik Kategori Filtreleme**: Kullanıcılar, "Hepsi", "Kore", "Japonya" ve "Çin" kategorileri arasında seçim yaparak yemekleri filtreleyebilir.
- **Duyarlı Tasarım**: Uygulama, farklı ekran boyutlarına uyum sağlayarak yemekleri düzenli bir şekilde gösterir.
- **Etkileşimli Arayüz**: Her kategoriye karşılık gelen bir buton vardır. Bir butona tıklandığında, yalnızca seçilen kategoriye ait yemekler gösterilir.

## Kullanılan Teknolojiler

- **HTML5**: Web sayfasının yapısal içeriğini oluşturmak için kullanıldı.
- **CSS3**: Butonların ve düzenin stilini belirlemek için kullanıldı.
- **JavaScript**: Seçilen kategoriye göre yemekleri dinamik olarak filtrelemek için kullanıldı.

## Nasıl Çalışır?

1. Uygulama, bir dizi kategori butonu görüntüler.
2. Her buton, tıklandığında tetiklenen bir olay dinleyicisine sahiptir.
3. Butona tıklandığında, `filterMenuItems(category)` fonksiyonu çağrılır ve seçilen kategoriye göre yemekler filtrelenip görüntülenir.
4. "Hepsi" seçildiğinde, tüm yemekler gösterilir.

## Kod Açıklaması

### Kategori Butonlarının Oluşturulması
```javascript
const btnItem = ["Hepsi", "Kore", "Japonya", "Çin"];
for (let i = 0; i < btnItem.length; i += 1) {
  const btn = document.createElement("button");
  btn.classList.add('btn-item', 'btn', 'btn-outline-dark');
  btn.innerHTML = btnItem[i];
  btn.addEventListener('click', (e) => {
    const category = e.target.textContent;
    filterMenuItems(category);
  });
  document.querySelector('.btn-container').appendChild(btn);
}
```
### Filtreleme Fonksiyonu

```javascript
function filterMenuItems(category) {
  const menuItems = document.querySelectorAll('.menu-items');
  menuItems.forEach((menuItem) => {
    if (menuItem.dataset.category === category || category === 'Hepsi') {
      menuItem.style.display = 'flex';
    } else {
      menuItem.style.display = 'none';
    }
  });
}
```
- ```filterMenuItems``` fonksiyonu, seçilen kategoriye göre yemekleri filtreler.
- Eğer kategori "Hepsi" ise, tüm yemekler gösterilir. Aksi takdirde, yalnızca seçilen kategoriye ait olan yemekler görüntülenir.

## Lisans
Bu proje MIT Lisansı ile lisanslanmıştır. Kendi projelerinizde kullanabilir ve değiştirebilirsiniz.
<br><br><br>

# Simple Food Category Filter App (EN)

This is a simple web application that filters and displays food items based on selected categories. The categories include "All", "Korea", "Japan", and "China". The user can select a category using the buttons, and only the corresponding food items will be displayed.

## Features

- **Dynamic Category Filtering**: The app allows users to filter food items by categories: "All", "Korea", "Japan", and "China".
- **Responsive Design**: The layout adapts to different screen sizes and displays food items in a clean and organized manner.
- **Interactive UI**: Each category has a corresponding button. When a button is clicked, only the food items from the selected category are shown.

## Technologies Used

- **HTML5**: For structuring the content of the web page.
- **CSS3**: For styling the buttons and layout.
- **JavaScript**: For dynamically filtering the food items based on the selected category.

## How It Works

1. The app displays a series of buttons representing food categories.
2. Each button has an event listener that triggers when clicked.
3. Upon clicking a button, the `filterMenuItems(category)` function is called, which filters and displays only the food items belonging to the selected category.
4. If "All" is selected, all food items are shown.

## Code Explanation

### Category Button Creation
```javascript
const btnItem = ["All", "Korea", "Japan", "China"];
for (let i = 0; i < btnItem.length; i += 1) {
  const btn = document.createElement("button");
  btn.classList.add('btn-item', 'btn', 'btn-outline-dark');
  btn.innerHTML = btnItem[i];
  btn.addEventListener('click', (e) => {
    const category = e.target.textContent;
    filterMenuItems(category);
  });
  document.querySelector('.btn-container').appendChild(btn);
}
```
### Filtering Function
```javascript
function filterMenuItems(category) {
  const menuItems = document.querySelectorAll('.menu-items');
  menuItems.forEach((menuItem) => {
    if (menuItem.dataset.category === category || category === 'All') {
      menuItem.style.display = 'flex';
    } else {
      menuItem.style.display = 'none';
    }
  });
}
```
- The ```filterMenuItems``` function filters the food items based on the selected category.
- If the category is "All", all food items are displayed. Otherwise, only the items matching the selected category are shown.

## License

This project is licensed under the MIT License. Feel free to use and modify it for your own projects.


