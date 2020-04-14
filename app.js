window.onload=()=>{
  
 

}
var map;
      var markers = [];
      var infoWindow;

function initMap() {
    var losAngeles = {lat:34.063380, lng: -118.358080};
    map = new google.maps.Map(document.getElementById('map'), {
      center: losAngeles,
      zoom: 11,
      });
      infoWindow = new google.maps.InfoWindow();
      displayStores();
      showStoresMarker();
      setOnCLickListner();
      searchStore();
      
     }

      function searchStore(){
        
        const zipCode=document.getElementById('z-code-input');
        console.log(zipCode);
        zipCode.addEventListener('click',event=>
        {if(event.target.classList.contains==='fas fa-search-location'){
          console.log(event.target.value);
        }
      })
    }

    
      
        
     

  function setOnCLickListner(){

    const storeElements=document.querySelectorAll('.store-container');
    storeElements.forEach((elem,index)=>{
      elem.addEventListener('click',function(){
       new google.maps.event.trigger(markers[index], 'click');

      })
    })

  }
  function displayStores(){
    let storesHtml=' ';
    stores.forEach((store,index)=>{
      

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
       <div class="store-number">${index+1}</div>
     </div>
     </div>`
    })
    document.querySelector('.stores-list').innerHTML=storesHtml;

    }
  

  function showStoresMarker(){

    var bounds = new google.maps.LatLngBounds();
    stores.forEach((store,index)=>{
      const name=store.name;
      const address=store.addressLines[0];
      const latlng = new google.maps.LatLng(
        store.coordinates.latitude,
        store.coordinates.longitude)

        const openStatusText=store.openStatusText;
        const phoneNumber=store.phoneNumber;

         bounds.extend(latlng);
        createMarker(latlng,name,address,openStatusText,phoneNumber,index+1)
    });
    map.fitBounds(bounds)

  }

     function createMarker(latlng,name,address,openStatusText,phoneNumber,index) {
      var html = `
      <div class="store-info-window">
      <div class="store-info-name">${name}</div>
      <div class="store-info-status">${openStatusText}</div>
      <div class="store-info-address"><i class="fas fa-address-card"></i>
      ${address}
      </div>
      <div class="store-info-phonenumber">
      <i class="fas fa-phone-alt"></i>
      ${phoneNumber}
      </div>
      </div>
      `;

      var marker = new google.maps.Marker({
        map: map,
        position: latlng,
        label:String(index)
      });
      google.maps.event.addListener(marker, 'click', function() {
        infoWindow.setContent(html);
        infoWindow.open(map, marker);
      });
      markers.push(marker);
    }
  
