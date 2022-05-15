function selectState(id_estado){            
    console.log('Se selecciono el estado: '+ id_estado+' - '+ state_names[id_estado]);
    //alert('Se selecciono el estado: '+ id_estado+' - '+ state_names[id_estado]);
}

var state_names = new Array();
state_names[1]="Aguascalientes";state_names[2]="Baja California";state_names[3]="Baja California Sur";state_names[4]="Campeche";state_names[5]="Coahuila";state_names[6]="Colima";state_names[7]="Chiapas";state_names[8]="Chihuahua";state_names[9]="Distrito Federal";state_names[10]="Durango";state_names[11]="Guanajuato";state_names[12]="Guerrero";state_names[13]="Hidalgo";state_names[14]="Jalisco";state_names[15]="Estado de M&eacute;xico";state_names[16]="Michoac&aacute;n";state_names[17]="Morelos";state_names[18]="Nayarit";state_names[19]="Nuevo Le&oacute;n";state_names[20]="Oaxaca";state_names[21]="Puebla";state_names[22]="Quer&eacute;taro";state_names[23]="Quintana roo";state_names[24]="San Luis Potos&iacute;";state_names[25]="Sinaloa";state_names[26]="Sonora";state_names[27]="Tabasco";state_names[28]="Tamaulipas";state_names[29]="Tlaxcala";state_names[30]="Veracruz";state_names[31]="Yucat&aacute;n";state_names[32]="Zacatecas";

$(function () { 

  $('.area').hover(function () {
          var id_estado = $(this).data('id-estado');
          var meid = $(this).attr('id');
          $('#edo').html(state_names[id_estado]);                                
          if(last_selected_id_estado!==null){

          }
          $('.escudo').addClass(meid);
      }).mouseout(function () {
          var meid = $(this).attr('id');                
          if(last_selected_id_estado!==null){
              $('#edo').html(state_names[last_selected_id_estado]);                    
          }else{                    
              $('#edo').html("&nbsp;");
              $('.escudo').removeClass('escudo_img');                    
          }
      });

  var areaLastClicked=null;
  var last_selected_id_estado=null;
  $('.area').click(function (e) {
          e.preventDefault();
          var $area = $(this);
          var meid = $area.attr('id');                
          var data = $area.data('maphilight') || {};                    
          if(areaLastClicked!==null){                        
              var lastData = areaLastClicked.data('maphilight') || {};
              lastData.alwaysOn=false;
              $('#letras'+areaLastClicked.attr('id')).removeClass('listaEdosActive');                        
          }
          $('#letras'+meid).addClass('listaEdosActive');
          areaLastClicked=$area;                
          data.alwaysOn = true;
          $(this).data('maphilight', data).trigger('alwaysOn.maphilight');
          last_selected_id_estado = $(this).data('id-estado');
          selectState(last_selected_id_estado);
  });

  $('.map').maphilight({ fade: true,strokeColor: '950054', fillColor: '950054', fillOpacity: 0.3 });
  
});