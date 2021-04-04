const images = [
  {
    "path": "https://placehold.jp/6d3d70/ffffff/500x500.png",
    "name": "name01",
    "caption": "コメント1"
  },
  {
    "path": "https://placehold.jp/e529f2/ffffff/500x500.png",
    "name": "name02",
    "caption": "コメント2"
  },
];

let img;
let caption;
let div;
img = document.createElement('img');
img.setAttribute('src', images[0].path);
caption = document.createElement('div');
caption.className = 'inner';
caption.innerHTML = '<p>' + images[0].caption + '<span>' + images[0].name + '</span>' +  '</p>';
div = document.createElement('div');
div.className = 'photo';
div.appendChild(img);
div.appendChild(caption);


document.getElementById('img_unit').appendChild(div);

