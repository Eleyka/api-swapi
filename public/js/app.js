$(function() {
  $container = $('#response-container');

  // Primero llamamos a la data del api
  $.ajax({
    url: 'https://swapi.co/api/people/',
    method: 'GET',
    contentType: 'application/json',
    success: function(response) {
      console.log(response.results);
      // Aqui por cada uno de los datos traidos, necesito una etiqueta a
      $.each(response.results, function(index, value) {
        $container.append('<a href="#" class="name-swapi"/>');
        
      });
      // Selecciono los elementos a ya creados
      let a = $container.find('a');

      // Ahora los envuelvo con un div de la clase container-swapi
      a.wrap(' <div class=\'container-swapi\'/> ');

      // Luego a cada div de la clase container-swapi le adjunto un elemento img con la clase avatar-swapi y su modal
      $('.container-swapi').append('<img class="avatar-swapi" data-toggle="modal"data-target="#exampleModal"/>');
     
          // Ahora selecciono todas las etiquetas img, ya creadas.
          let img = $container.find('img');
          console.log(img);
    
          // Traemos la data de nuestro json data.json que tiene las imagenes,
          // seria el equivalente a una segunda api
    
          $.getJSON('data.json', function(data) {
            $.each(data, function(index, val) {
              img.eq(index).attr('src', val);
              /* console.log(val); */
              
            });
          });
    
          $.each(response.results, function(index, value) {
            a.eq(index).text(value.name);
            console.log(value.name)
    
    /*         img.on('click',function(){
              console.log(this)
            }); */
    
            $('.modal-body').append(value.name);
          
          });
    
    }
  });
});