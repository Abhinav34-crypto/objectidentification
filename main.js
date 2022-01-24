img="";
objectstatus="";
objects = [];

function setup(){
    canvas=createCanvas(620, 480);
    canvas.center();
    objectdetector=ml5.objectDetector("cocossd" ,modelLoaded);
    document.getElementById("status").innerHTML="Detecting Object";
}
function modelLoaded(){
    console.log('Model Is Initialized');
    objectstatus=true;
    objectdetector.detect(img , gotResults)
}

function preload(){
   img=loadImage("dog_cat.jpg");
}

function gotResults(error , results){
     if(error){
        console.log(error);
     }else{
         console.log(results);
         objects= results;
     }
     
}

function draw(){    
    image(img, 0 , 0 , 620 , 480);
    
       if(objectstatus!=""){
            for(i=0; i<objects.length; i++)
            {
                document.getElementById("status").innerHTML= "Status: Object Detected";
                fill("#0000FF");
                percentage= floor(objects[i].confidence * 100);
                text(objects[i].label + " "+ percentage + "%" , objects[i].x , objects[i].y);
                noFill();
                stroke("#0000FF");
                rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height );
            }
       }
 
      
}
