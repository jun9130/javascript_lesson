const images = [
  {
    "path": "https://placehold.jp/35c3e6/ffffff/500x500.png",
    "name": "name01",
    "caption": "コメント1"
  },
  {
    "path": "https://placehold.jp/e529f2/ffffff/500x500.png",
    "name": "name02",
    "caption": "コメント2"
  },
  {
    "path": "https://placehold.jp/388210/ffffff/500x500.png",
    "name": "name03",
    "caption": "コメント3"
  },
];

let img;
let caption;
let div;

for (let i = 0; i < images.length; i++) {
  img = document.createElement('img');
  img.setAttribute('src', images[i].path);
  caption = document.createElement('div');
  caption.className = 'inner';
  caption.innerHTML = '<p>' + images[i].caption + '<span>' + images[i].name + '</span>' + '</p>';
  div = document.createElement('div');
  div.className = 'photo';
  div.appendChild(img);
  div.appendChild(caption);
  document.getElementById('img_unit').appendChild(div);
}

