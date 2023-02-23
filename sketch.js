function setup() {
    // put setup code here
    createCanvas(1000,500);
    background('#EE6C6C');
    y = 655
    z = 730
    a = 300
    x = 780
    w = 650
    j = 0
}  


    function draw() {
        // garis tengah
        line(500,0, 500, 500)
        strokeWeight(3); //ketebalan garis
        
        //GAMBAR BAGIAN KIRI
        //ekor
        fill('#FFCC33')
        ellipse(450,243,78,40)

        //badan
        fill('#FFCC33')
        ellipse(330,250,250,120)
        fill('#CC6600')
        ellipse(330,250,200,80)
        fill('#FFB266')
        ellipse(300,250,20,20)
        fill('#FFB266')
        ellipse(378,255,20,20)
        fill('#FFB266')
        ellipse(320,267,20,20)
        fill('#FFB266')
        ellipse(350,270,20,20)
        fill('#FFCC33') //tangan
        arc(280, 300, 40,80,0,PI)
        arc(380, 300, 40,80,0,PI)

        //kuping
        fill('#FFCC33')
        ellipse(150,152,55,45)
        ellipse(220,154,55,45)
        //kepala
        fill('#FFCC33')
        ellipse(180,230,155,130)

        //bibir
        fill('#FFCC33')
        arc(193, 250, 20,20,0,PI)
        fill('#FFCC33')
        arc(173, 250, 20,20,0,PI)
        fill('#FF0000')
        arc(183, 240, 20,20,0,PI,PIE) //hidung
        
        //mata
        fill('#FFFFFF')
        ellipse(145,220,30,30)
        fill('#FFFFFF')
        ellipse(220,220,30,30)
        fill('#000000')
        ellipse(150,220,17,17)
        fill('#000000')
        ellipse(225,220,17,17)
        fill('#FFFFFF')
        ellipse(155,220,8,8)
        fill('#FFFFFF')
        ellipse(230,220,8,8)
        
//GAMBAR BAGIAN KANAN       
        
//ekor
fill('#FFCC33')
ellipse(950,243,78,40)

//badan
fill('#FFCC33')
ellipse(830,250,250,120)
fill('#CC6600')
ellipse(830,250,200,80)
fill('#FFB266')
ellipse(800,250,20,20)
fill('#FFB266')
ellipse(878,255,20,20)
fill('#FFB266')
ellipse(820,267,20,20)
fill('#FFB266')
ellipse(850,270,20,20)

fill('#FFCC33') //tangan
var x = 780 + 10 * Math.sin(PI/3*j) 
j+=1
arc(x, 300, 40,80,0,PI)
var a = 878 + 10 * Math.sin(PI/3*j) 
j+=1
arc(a, 300, 40,80,0,PI)

//kuping
fill('#FFCC33')
ellipse(650,152,55,45)
ellipse(720,154,55,45)
//kepala
fill('#FFCC33')
ellipse(680,230,155,130)

//bibir
fill('#FFCC33')
arc(693, 250, 20,20,0,PI)
fill('#FFCC33')
arc(673, 250, 20,20,0,PI)
fill('#FF0000')
arc(683, 240, 20,20,0,PI,PIE) //hidung

//mata
fill('#FFFFFF')
ellipse(645,220,30,30)
fill('#FFFFFF')
ellipse(720,220,30,30)
fill('#000000')
var w = 650 + 3 * Math.sin(PI/3*j) 
j+=1
ellipse(w,220,17,17)
fill('#000000')
ellipse(725,220,17,17)
fill('#FFFFFF')
var y = 655 + 3 * Math.sin(PI/3*j) 
j+=1
ellipse(y,220,8,8)
fill('#FFFFFF')
var z = 730 + 3 * Math.sin(PI/3*j) 
j+=1
ellipse(z,220,8,8)    

    }
