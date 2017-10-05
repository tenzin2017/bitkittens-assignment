document.addEventListener('DOMContentLoaded', function(){

  var button = document.querySelector('button');
  button.addEventListener('click', function(){

    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'JSON',
      // data: ''
    }).done(function(e){
      for(var i=0; i<e.cats.length; i++){
      var div1 = document.querySelector('#cat1');
      var div2 = document.querySelector('#cat2');
      var div3 = document.querySelector('#cat3');

      var imgTag = document.createElement('img');
      var cat1 = e["cats"][i]["photo"];
      var catName = e["cats"][i]["name"];
      imgTag.src = cat1;
      imgTag.alt = catName;
      if(div1.innerHTML === ""){
        div1.append(imgTag);
      } else if (div2.innerHTML === ""){
        div2.append(imgTag);
      } else if (div3.innerHTML === ""){
        div3.append(imgTag);
      }
     }


      // var div3 = document.querySelector('#cat3');
      // div3.innerHTML = " ";
      // div3.append(imgTag);

    });
  })

})
