window.onload=()=>{
  displayStores();

}




function initMap() {
    var losAngeles = {lat:34.063380, lng: -118.358080};
    map = new google.maps.Map(document.getElementById('map'), {
      center: losAngeles,
      zoom: 11,
      });
//       var marker = new google.maps.Marker({
//         position: myLatLng,
//         map: map,
//         title: 'Hello World!'
//       });

//       var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
// var mapOptions = {
//   zoom: 4,
//   center: myLatlng
// }
// var map = new google.maps.Map(document.getElementById("map"), mapOptions);

// var marker = new google.maps.Marker({
//     position: myLatlng,
//     title:"Hello World!"
// });

// // To add the marker to the map, call setMap();
// marker.setMap(map);
    
  }
  function displayStores(){
    let storesHtml=' ';
    stores.forEach((store,index)=>{
      console.log(store,index)
      
      // var address=store.addressLines;

      storesHtml+=` <div class="store-container">
      <div class="store-info-container">
      <div class="store-address">
    
    <span>${store.addressLines[0]}</span>
       <span>${store.addressLines[1]}</span>
       
      </div>
       <div class="store-phone-number">
       <span> ${store.phoneNumber}</span>
     
     </div>
   </div>
     <div class="store-number-container">
       <div class="store-number">1</div>
     </div>
     </div>`
    })

    document.querySelector('.stores-list').innerHTML=storesHtml;

    }
  //   stores.forEach((store,index)=>{
  //     console.log(store,index)
  //     var address=store.addressLines;
  //     storesHtml+=` <div class="store-container">
  //     <div class="store-info-container">
  //     <div class="store-address">
  //   "addressLines": ["257 S. La Cienega Blvd.", "Beverly Hills, CA 90211"],
  //   <span>${address[0]}span>
  //      <span>${address[1]}</span>
       
  //     </div>
  //      <div class="store-phone-number">
  //      <span> ${store.phoneNumber}</span>
     
  //    </div>
  //  </div>
  //    <div class="store-number-container">
  //      <div class="store-number">1</div>
  //    </div>
  //    </div>`
  //   })

  //   document.querySelector('.stores-list').innerHTML=storesHtml;


  // }

  