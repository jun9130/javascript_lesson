// $(document).on('turbolinks:load', $(function() {

//   let image_tag;
//   let image_count = 0;
//   let change_count = 0;
//   const deletes = [];

//   // プレビュー画像ビルド
//   function buildImageTag(alt, src){
//     const html = `<div class= "img_view">
//                   <img alt="${alt}" src="${src}">
//                   <div class="image-upload-button">
//                     <div class="btn delete">削除</div>
//                   </div>
//                 </div>`
//     return html;
//   };

//   // 画像ラベルビルド
//   function buildNewFile(num){
//     const html = `<label class="uploader" id="image-label-${num}" for="shop_shop_images_attributes_${num}_image" style="display: none;">
//                   <pre>クリックしてアップロード</pre>
//                   <input class="image-box" type="file" name="shop[shop_images_attributes][${num}][image]" id="shop_shop_images_attributes_${num}_image">
//                 </label>`
//     return html;
//   }
  
//   // 画像アップロード時のプレビュー表示
//   $(document).on('change', '.image-box', function(e){
//     const file = $(this).prop('files')[0];
//     const file_reader = new FileReader();
//     const target_label = $(this).parent();
//     const target_id =target_label.attr('id');
//     const target_num = Number(target_id.replace('image-label-',''));
//     const display_num = target_num+1;

//     file_reader.onload = (function(){
//       return function (e) {
//         image_tag = buildImageTag(target_num, e.target.result);
        
//         if (image_count <= 4){
//           $('#preview').append(image_tag);
//           change_count += 1;
//         }
//         if(image_count == 5){
//           $('#preview').append(image_tag);
//           $('.image-uploader').css({'display': 'none'});
//         }
//       };
//     })(file);
    
//     file_reader.readAsDataURL(file);

  
//   if (change_count < 4){
//     $(`#image-label-${target_num}`).css('display', "none");
//     $(`#image-label-${display_num}`).css('display', "block");
//     }else{
//       const num = deletes[0];
//       $(`#image-label-${target_num}`).css('display', "none");
//       $(`#image-label-${num}`).css('display', "block");
//       deletes.shift();
//     };
//     image_count += 1;
//   });

//   // 画像の削除
//   $(document).on('click','.delete', function(){

//     // previewを消す
//     const target_image = $(this).parent().parent();
//     target_image.remove();
    
//     // labelを消す
//     const img_num = Number(target_image.children('img').attr('alt'));
//     $(`#image-label-${img_num}`).remove();
//     $('.image-upload').append(buildNewFile(img_num));
    
//     deletes.push(img_num);
//     if (image_count == 5){
//       const num = deletes[0];
//       $(`#image-label-${num}`).css('display', "block");
//       deletes.shift();
//     }
//     image_count -= 1;

//   })

// }));

// async function callApi(){
//   const res = await window.fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
//   const users = await res.json();
//   console.log(users);
// }

// callApi();