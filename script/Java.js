
 
    
function ouvreNav() {
    document.getElementById("Snav").style.width = "325px";
  

  }
  
   
function FermeNav() {
  document.getElementById("Snav").style.width = "0";
 
}
function ApageG(){
  $("main").load("../html/Glossaire.html");}
  
  function ApageQ(){
  $("main").load("../html/QUIZZ.html");}
  
  function ApageC(){
  $("main").load("../html/Cours.html");}
  
  function ApageR(){
  $("main").load("../html/Ref.html");}
  
  function ApageA(){
      $("main").load("../html/Accueil.html");
  }

  function ApageB1C(){
    $("main").load("../html/BLOC1C.html");
}

  function ApageB3C(){
  $("main").load("../html/BLOC3C.html");
  }

  function ApageB1Q(){
    $("main").load("../html/BLOC1Q.html");
}

function ApageB3Q(){
  $("main").load("../html/BLOC3Q.html");
}


function ApageB2C(){
  $("main").load("../html/BLOC2C.html");
}

 
  
  $(document).ready(
      function ApageA(){
          $("main").load("../html/Accueil.html");
      }
  )








//  quizz num 1



$("form1").submit=(function() {
  
  p1 = parseInt(document.querySelector('input[name = "p1"]:checked').value);
  p2 = parseInt(document.querySelector('input[name = "p2"]:checked').value);
  p3 = parseInt(document.querySelector('input[name = "p3"]:checked').value);
  imp = parseInt(document.querySelector('input[name = "imp"]:checked').value);
  imp2 = parseInt(document.querySelector('input[name = "imp2"]:checked').value);
  imp3 = parseInt(document.querySelector('input[name = "imp3"]:checked').value);
  imp4 = parseInt(document.querySelector('input[name = "imp4"]:checked').value);
  pro = parseInt(document.querySelector('input[name = "pro"]:checked').value);
  pro2 = parseInt(document.querySelector('input[name = "pro2"]:checked').value);
  pro3 = parseInt(document.querySelector('input[name = "pro3"]:checked').value);
  pro4 = parseInt(document.querySelector('input[name = "pro4"]:checked').value);
  gras = parseInt(document.querySelector('input[name = "gras"]:checked').value);
  gras2 = parseInt(document.querySelector('input[name = "gras2"]:checked').value);
  link = parseInt(document.querySelector('input[name = "link"]:checked').value);
  link2 = parseInt(document.querySelector('input[name = "link2"]:checked').value);
  link3 = parseInt(document.querySelector('input[name = "link3"]:checked').value);
  link4 = parseInt(document.querySelector('input[name = "link4"]:checked').value);
  html = parseInt(document.querySelector('input[name = "html"]:checked').value);
  html2 = parseInt(document.querySelector('input[name = "html2"]:checked').value);
  html2 = parseInt(document.querySelector('input[name = "html3"]:checked').value);
  html4 = parseInt(document.querySelector('input[name = "html4"]:checked').value);


result = p1 + p2 + p3 + imp + imp2 + imp3 + imp4 + pro + pro2 + pro3 + pro4 + gras + gras2 + link + link2 + link3 + link4 + html + html2 + html3 + html4;

document.getElementById("grade").innerHTML = result;
return false;
})


// quizz num 2



$("form2").submit=(function() {
  
 
  pro = parseInt(document.querySelector('input[name = "pro"]:checked').value);
  pro2 = parseInt(document.querySelector('input[name = "pro2"]:checked').value);
  link = parseInt(document.querySelector('input[name = "link"]:checked').value);
  link2 = parseInt(document.querySelector('input[name = "link2"]:checked').value);
  link3 = parseInt(document.querySelector('input[name = "link3"]:checked').value);
  link4 = parseInt(document.querySelector('input[name = "link4"]:checked').value);
  html = parseInt(document.querySelector('input[name = "html"]:checked').value);
  html2 = parseInt(document.querySelector('input[name = "html2"]:checked').value);
  html2 = parseInt(document.querySelector('input[name = "html3"]:checked').value);
  html4 = parseInt(document.querySelector('input[name = "html4"]:checked').value);


result =   pro + pro2 + link + link2 + link3 + link4 + html + html2 + html3 + html4;

document.getElementById("grade").innerHTML = result;
return false;
})
