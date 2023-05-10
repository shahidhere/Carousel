let images = document.querySelectorAll('.imageWithText');

let  sizeOfImages = images.length;
let a = 1;

let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');

// This image will be visible when we visit the website
images[0].style.display = "block";

// This will show every image in the loop
let e = setInterval(function(){
           
           if(a === sizeOfImages){
               images[a-1].style.display = "none";
               a = 0;
               images[a].style.display = "block";
           }

           else{
               if(a === 0){
                  images[sizeOfImages-1].style.display = "none";
               }
               else{
                images[a-1].style.display = "none";
               }
               images[a].style.display = "block";
           }
           
           a++;
}, 2000);


function slideShow(num){
      if(num === 1){
          clearInterval(e);
           if(a === 0){
              a = sizeOfImages -1;
           }
           else{
              a -= 1;
           }
      }
      else{
         clearInterval(e);
         if(a === sizeOfImages -1){
            a = 0;
         }
         else{
            a += 1;
         }
      }
}
