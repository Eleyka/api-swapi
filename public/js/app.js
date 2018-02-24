$(document).ready(function(){
  //traemos los elementos que escogemos
  const $responseContainer = $('#response-container');
  const $myModalTitle = $('#myModalLabel');
  const $modalBody = $('.modal-body');
 //creamos un div interno en mi containerresponse
  $responseContainer.append('<div class="row"/>');

 //llamamos a la data del API
  $.ajax({
    url:' https://swapi.co/api/people/',
    method:'GET',
    contentType: 'application/json',
    success: function(response){
      console.log(response.results);
      //por cada uno de los datos traidos
      $.each(response.results, function(index, obj){
        //seleccionamos todos los row y agregamos cada obj un div con su respectiva clase
        $responseContainer.find('.row').append('<div class="container-img col-xs-6 col-sm-2"/>');
        //seleccionamos todos los elementos con clase container-img / .eq(index) para cada objeto sino agregaria de manera descendente
        $responseContainer.find('.container-img').eq(index).append('<img src="#" class="img-response" data-toggle="modal" data-target="#myModal"/>');
        //seleccionamos todos los elementos con clase  container-img 
        $responseContainer.find('.container-img').eq(index).append('<p class="img-name"/>');
        //Seleccionamos tolos las etiquetas img y a cada una le agregamos su atributo src con su respectivo valor 
        $responseContainer.find('img').eq(index).attr('src','https://starwars-visualguide.com/assets/img/characters/'+(index+1)+'.jpg');
        //Seleccionamos todos las etiquetas img y agregamos el atributo data-name con el valor del api (name)
        $responseContainer.find('img').eq(index).attr('data-name',response.results[index].name);
        //Seleccionamos todos las etiquetas img ya gregamos el atributo  data-gender con su valor del api (gender)
        $responseContainer.find('img').eq(index).attr('data-gender', response.results[index].gender);
        //Seleccionamos todos las etiquetas img ya gregamos el atributo  data-birth con su valor del api (birth)
        $responseContainer.find('img').eq(index).attr('data-bith',response.results[index].birth_year);
        //Seleccionamos todos los p y le agregamos el nombre de  la data de cada persona
        $responseContainer.find('p').eq(index).append(response.results[index].name);
      });
    },
    fail: function(request){
      if(request){
        alert(request.message);
      }
    }
  });
//...


});
