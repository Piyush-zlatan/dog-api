let dropdown = document.getElementById('dogs-dropdown');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Choose Breed';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = 'https://dog.ceo/api/breeds/list';

const request = new XMLHttpRequest();
request.open('GET', url, true);
request.send();
request.onload = function() {
    if (request.status === 200) {
      //  console.log(request.responseText);
      const data = JSON.parse(request.responseText);
    //  console.log(data.message[0]);
      let option;
      for (let i = 0; i < data.message.length; i++) {
        option = document.createElement('option');
        option.text = data.message[i];
        option.value = data.message[i];
        dropdown.add(option);
      }
     } else {
      // Reached the server, but it returned an error
    }
       
  }

  var breed = document.getElementById('dogs-dropdown');
    var breedVal = breed.options[breed.selectedIndex].value;
function fetchRandomDogImage(){

    var xhrRequest = new XMLHttpRequest();
    breed = document.getElementById('dogs-dropdown');
    breedVal = breed.options[breed.selectedIndex].value;
    xhrRequest.onload = function(){
        console.log(xhrRequest.response);
        var responseJSON = JSON.parse(xhrRequest.response);
        var imageURl = responseJSON.message;
        $('#dog-image').attr('src',imageURl);
    };
    xhrRequest.open('get','https://dog.ceo/api/breed/'+breedVal+'/images/random');
    xhrRequest.send();

}

$('#fetch-dog-image-button').click(fetchRandomDogImage);



function fetchNextDogImage(){
    var xhrRequest = new XMLHttpRequest();
    //var breed = document.getElementById('dogs-dropdown');
   // var breedVal = breed.options[breed.selectedIndex].value;
    xhrRequest.onload = function(){
        console.log(xhrRequest.response);
        var responseJSON = JSON.parse(xhrRequest.response);
        var imageURl = responseJSON.message;
        $('#dog-image').attr('src',imageURl);
    };
    xhrRequest.open('get','https://dog.ceo/api/breed/'+breedVal+'/images/random');
    xhrRequest.send();

}



$('#next-image').click(fetchNextDogImage);