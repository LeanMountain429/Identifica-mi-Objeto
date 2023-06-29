imgCambio= 1
function preload(){
    img= loadImage("lOl.webp")
    img1= loadImage("LoLoL.jpg")
}
function setup(){
    caanvas= createCanvas(750,500)
    modelo= ml5.objectDetector("cocossd",coocoossd)
    cAmAwEb= createCapture(VIDEO)
    cAmAwEb.hide()
}
function draw(){
    if (imgCambio==1){
        image(img,0,0,750,500)
        stroke("#234567")
        strokeWeight(5)
        noFill()
        rect(50,0,680,490)
        fill("#c20002")
        text("Michi Alias: Puss in Boots",100,25)
        textSize(25)
    }
    else if (imgCambio==2){
        image(img1,0,0,750,500)
        coocoossd()
        for (var foor = 0; foor < reeesuuults.length; foor++) {
            objetodetectador= reeesuuults[foor].label;
            confidencedetectador= reeesuuults[foor].confidence
            xdetectador= reeesuuults[foor].x+125
            ydetectador= reeesuuults[foor].y
            heightdetectador= reeesuuults[foor].height
            widhtdetectador= reeesuuults[foor].width
            noFill()
            rect(xdetectador,ydetectador,widhtdetectador,heightdetectador)
            text(objetodetectador,xdetectador+25,ydetectador+50)
        }
    }
    else{
        image(cAmAwEb,0,0,750,500)
        coocoossd()
        for (var foor = 0; foor < reeesuuults.length; foor++) {
            objetodetectador= reeesuuults[foor].label;
            confidencedetectador= Math.round(reeesuuults[foor].confidence*100)
            xdetectador= reeesuuults[foor].x+125
            ydetectador= reeesuuults[foor].y
            heightdetectador= reeesuuults[foor].height
            widhtdetectador= reeesuuults[foor].width
            noFill()
            rect(xdetectador,ydetectador,widhtdetectador,heightdetectador)
            text(objetodetectador+" "+confidencedetectador+"%",xdetectador+25,ydetectador+50)
        }
    }
}
function coocoossd(){
    console.log("Cargo")
    if (imgCambio==1){
        modelo.detect(img,reesuults)
    }
    else if (imgCambio==2){
        modelo.detect(img1,reesuults)
    }
    else{
        modelo.detect(cAmAwEb,reesuults)
    }
}
function reesuults(error,results){
    if (error){
        console.error(error)
    }
    else{
        console.log(results)
        reeesuuults= results
    }
}
function CambiarImagen(){
    if (imgCambio==1){
        imgCambio= imgCambio+1
    }
    else if (imgCambio==2){
        imgCambio= imgCambio+1
    }
    else{
        imgCambio= 1
    }
}