class Bootloader extends Phaser.Scene{
    constructor(){
    super({
    key: "Bootloader" //Nombre interno o clave de referencia
    });
    }
    init () {}
        
    preload()
    {
            this.load.path = "./assets/"; //Ruta de todas las imágenes
            this.load.image("yamato", "YamatoR.png"); //alias y archivo
            this.load.image("kata", "KataR.png");
            this.load.image("nami", "NamiR.png");
            this.load.image("tankMan", "TankManR.png");
            this.load.image("zoro", "ZoroGodR.png");
            this.load.image("mingo", "DoflamingoR.png");
            this.load.image("marco", "MarcoR.png");
            this.load.image("cora", "CoraGodR.png");
            this.load.image("garp", "GarpR.png");
            this.load.image("kaido", "KaidoHR.png");
            this.load.image("carta", "Carta.png");
            this.load.image("fondo", "fondo.png");

            this.bandC1 = false;
            this.bandC2 = false;

            // this.load.audio({
            //     key: 'song',
            //     url: [ 'michino-timothy.ogg' ]
            // });
        }

    create() {
            this.fondo = this.add.image(1280,800, "fondo");
            this.fondo2 = this.add.image(1280 + 2560 ,800, "fondo");
            
            this.yamato = this.add.image(250, 650, "yamato"); //Relaciona la imagen "yoshi" al objeto yoshi
            this.card1 = this.add.image(250, 650 - 34, "carta").setInteractive();
            
            this.yamato2 = this.add.image(250 + 2560, 650, "yamato"); //Relaciona la imagen "yoshi" al objeto yoshi
            this.card2 = this.add.image(250 + 2560, 650 - 34, "carta").setInteractive(); 

            this.kata = this.add.image(750, 650, "kata"); //atributo
            this.card3 = this.add.image(750, 650 - 34, "carta").setInteractive(); 

            this.kata2 = this.add.image(750 + 2560, 650, "kata"); //atributo
            this.card4 = this.add.image(750 + 2560, 650 - 34, "carta").setInteractive(); 

            this.nami = this.add.image(1300, 650, "nami"); //atributo
            this.card5 = this.add.image(1300, 650 - 34, "carta").setInteractive(); 

            this.nami2 = this.add.image(1300 + 2560, 650, "nami"); //atributo
            this.card6 = this.add.image(1300 + 2560, 650 - 34, "carta").setInteractive(); 

            this.tkman = this.add.image(1800, 650, "tankMan"); //atributo
            this.card7 = this.add.image(1800, 650 - 34, "carta").setInteractive(); 
            
            this.tkman2 = this.add.image(1800 + 2560, 650, "tankMan"); //atributo
            this.card8 = this.add.image(1800 + 2560, 650 - 34, "carta").setInteractive(); 

            this.zoro = this.add.image(2300, 650, "zoro"); //atributo
            this.card9 = this.add.image(2300, 650 - 34, "carta").setInteractive(); 
            
            this.zoro2 = this.add.image(2300 + 2560, 650, "zoro"); //atributo
            this.card10 = this.add.image(2300 + 2560, 650 - 34, "carta").setInteractive(); 
            
            this.mingo = this.add.image(250, 1250, "mingo"); //atributo
            this.card11 = this.add.image(250, 1250 - 34, "carta").setInteractive(); 
            
            this.mingo2 = this.add.image(250 + 2560, 1250, "mingo"); //atributo
            this.card12 = this.add.image(250 + 2560, 1250 - 34, "carta").setInteractive(); 

            this.marco = this.add.image(750, 1250, "marco"); //atributo
            this.card13 = this.add.image(750, 1250 - 34, "carta").setInteractive(); 

            this.marco2 = this.add.image(750 + 2560, 1250, "marco"); //atributo
            this.card14 = this.add.image(750 + 2560, 1250 - 34, "carta").setInteractive(); 

            this.cora = this.add.image(1300, 1250, "cora"); //atributo
            this.card15 = this.add.image(1300, 1250 - 34, "carta").setInteractive(); 
            
            this.cora2 = this.add.image(1300 + 2560, 1250, "cora"); //atributo
            this.card16 = this.add.image(1300 + 2560, 1250 - 34, "carta").setInteractive(); 

            this.garp = this.add.image(1800, 1250, "garp"); //atributo
            this.card17 = this.add.image(1800, 1250 - 34, "carta").setInteractive(); 
            
            this.garp2 = this.add.image(1800 + 2560, 1250, "garp"); //atributo
            this.card18 = this.add.image(1800 + 2560, 1250 - 34, "carta").setInteractive(); 

            this.kaido = this.add.image(2300, 1250, "kaido"); //atributo
            this.card19 = this.add.image(2300, 1250 - 34, "carta").setInteractive(); 

            this.kaido2 = this.add.image(2300 + 2560, 1250, "kaido"); //atributo
            this.card20 = this.add.image(2300 + 2560, 1250 - 34, "carta").setInteractive(); 
            //this.puntero = this.add.image(700, 300, "puntero").setInteractive(); //atributo

            const eventos = Phaser.Input.Events; //La constante guarda las variables de eventos de entrada posibles de phaser
            // const teclado = Phaser.Input.Keyboard; //La constante guarda las teclas del teclado segun como lo tiene Phaser
            console.log(eventos);
            //Sonido
            // this.music = this.sound.add('song');
            // this.music.play();
            // this.music.volume = 0.01;

            //Texto informativo 
            this.text1 = this.add.text(600, 15, 'Memory Card Game', {
                fontFamily: 'Consolas', fontSize: '40px'});
            this.text2 = this.add.text(1100, 15, 'Score: ', {
                fontFamily: 'Consolas', fontSize: '40px'});
            
            //
            this.input.on(eventos.GAMEOBJECT_DOWN, (pointer, gameObject) => {
                gameObject.visible = false;
                setTimeout(() => {
                    gameObject.visible = true;
                }, 2500);
            });
            
            
            // this.input.on(eventos.GAMEOBJECT_UP, (pointer, gameObject) => {
            //     gameObject.clearTint();
            //     gameObject.setAlpha(1);
            // });
        }
        
        update(time, delta) 
        {
            if (this.card1.visible == false)
            {
                // console.log("Se volteo");
                if (this.card2.visible == false) {
                    // console.log("Se volteo pareja");
                    this.bandC1 = true;
                    this.bandC2 = true;
                }
                if (this.bandC1 && this.bandC2) {
                    this.card1.visible = false;
                    this.card2.visible = false;
                }
            }

            // else if(condition)
            // {
                
            // }
            // else if(condition)
            // {
                
            // }
            // else if(condition)
            // {
                
            // }
            // else if(condition)
            // {
                
            // }
            // else if(condition)
            // {
                
            // }
            // else if(condition)
            // {
                
            // }
            // else if(condition)
            // {
                
            // }
            // else if(condition)
            // {
                
            // }
            // else if(condition)
            // {
                
            // }
            // else if(condition)
            // {
                
            // }
            // else if(condition)
            // {
                
            // }
            // else if(condition)
            // {
                
            // }
            // else if(condition)
            // {
                
            // }
            // else if(condition)
            // {
                
            // }
            // else if(condition)
            // {
                
            // }
            // else if(condition)
            // {
                
            // }
            // else if(condition)
            // {
                
            // }
            // else if(condition)
            // {
                
            // }
            // else if(condition)
            // {
                
            // }
            // else if(condition)
            // {
                
            // }
        }
    } 
    
export default Bootloader;