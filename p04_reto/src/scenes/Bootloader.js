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
            this.bandC3 = false;
            this.bandC5 = false;
            this.bandC7 = false;
            this.bandC9 = false;
            this.bandC11 = false;
            this.bandC13 = false;
            this.bandC15 = false;
            this.bandC17 = false;
            this.bandC19 = false;

            this.max = 0;
            this.maxaux = 0;
            this.errores = 0;
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
            this.text3 = this.add.text(1500, 15, 'Errors: ' + this.errores, {
                    fontFamily: 'Consolas', fontSize: '40px'});
            
            //
            this.input.on(eventos.GAMEOBJECT_DOWN, (pointer, gameObject) => {
                // if (this.maxaux < 2) {
                    gameObject.visible = false;
                    this.max = this.max + 1;
                    setTimeout(() => {
                        gameObject.visible = true;
                        if (this.max > 0)
                        {
                            this.max = this.max - 1;
                        }
                    }, 2500);
                // }
            });
            
            
            // this.input.on(eventos.GAMEOBJECT_UP, (pointer, gameObject) => {
            //     gameObject.clearTint();
            //     gameObject.setAlpha(1);
            // });
        }
        
        update(time, delta) 
        {
            // console.log(this.max);
            // console.log(this.errores);
            // this.comparar(this.card1, this.card2, this.bandC1);
            this.text3.setText('Errors: ' + this.errores);
            if (this.max == 2) {
                // this.maxaux = this.max;
                // setTimeout(() => {
                    if (this.card1.visible == false && this.card2.visible == false && !this.bandC1) {
                        // console.log("Se volteo pareja");
                        this.bandC1 = true; 
                        // setTimeout(() => {
                            this.max = 0;
                            this.maxaux = this.max;
                        // }, 1500);
                    }
                    else if (this.card3.visible == false && this.card4.visible == false && !this.bandC3) {
                        // console.log("Se volteo pareja");
                        this.bandC3 = true;
                        // setTimeout(() => {
                            this.max = 0;
                            this.maxaux = this.max;
                        // }, 1500);
                    }
                    else if (this.card5.visible == false && this.card6.visible == false && !this.bandC5) {
                        // console.log("Se volteo pareja");
                        this.bandC5 = true;
                        // setTimeout(() => {
                            this.max = 0;
                            this.maxaux = this.max;
                        // }, 1500);
                    }
                    else if (this.card7.visible == false && this.card8.visible == false && !this.bandC7) {
                        // console.log("Se volteo pareja");
                        this.bandC7 = true;
                        // setTimeout(() => {
                            this.max = 0;
                            this.maxaux = this.max;
                        // }, 1500);
                    }
                    else if (this.card9.visible == false && this.card10.visible == false && !this.bandC9) {
                        // console.log("Se volteo pareja");
                        this.bandC9 = true;
                        // setTimeout(() => {
                            this.max = 0;
                            this.maxaux = this.max;
                        // }, 1500);                
                    }
                    else if (this.card11.visible == false && this.card12.visible == false && !this.bandC11) {
                        // console.log("Se volteo pareja");
                        this.bandC11 = true;
                        // setTimeout(() => {
                            this.max = 0;
                            this.maxaux = this.max;
                        // }, 1500);
                    }
                    else if (this.card13.visible == false && this.card14.visible == false && !this.bandC13) {
                        // console.log("Se volteo pareja");
                        this.bandC13 = true;
                        // setTimeout(() => {
                            this.max = 0;
                            this.maxaux = this.max;
                        // }, 1500);
                    }
                    else if (this.card15.visible == false && this.card16.visible == false && !this.bandC15) {
                        // console.log("Se volteo pareja");
                        this.bandC15 = true;
                        // setTimeout(() => {
                            this.max = 0;
                            this.maxaux = this.max;
                        // }, 1500);
                    }
                    else if (this.card17.visible == false && this.card18.visible == false && !this.bandC17) {
                        // console.log("Se volteo pareja");
                        this.bandC17 = true;
                        // setTimeout(() => {
                            this.max = 0;
                            this.maxaux = this.max;
                        // }, 1500);
                    }
                    else if (this.card19.visible == false && this.card20.visible == false && !this.bandC19) {
                        // console.log("Se volteo pareja");
                        this.bandC19 = true;
                        // setTimeout(() => {
                            this.max = 0;
                            this.maxaux = this.max;
                        // }, 1500);
                    }
                    else{
                        this.errores = this.errores + 1;
                        // setTimeout(() => {
                            this.max = 0;
                        // }, 1500);
                    }
                // }, 1500);
                // setTimeout(() => {
                //     this.maxaux = 0;
                // }, 2500);
            } 
            
            
            if (this.bandC1) {
                this.card1.visible = false;
                this.card2.visible = false;
            }
            if (this.bandC3) {
                this.card3.visible = false;
                this.card4.visible = false;
            }
            if (this.bandC5) {
                this.card5.visible = false;
                this.card6.visible = false;
            }
            if (this.bandC7) {
                this.card7.visible = false;
                this.card8.visible = false;
            }
            if (this.bandC9) {
                this.card9.visible = false;
                this.card10.visible = false;
            }
            if (this.bandC11) {
                this.card11.visible = false;
                this.card12.visible = false;
            }
            if (this.bandC12) {
                this.card13.visible = false;
                this.card14.visible = false;
            }
            if (this.bandC15) {
                this.card15.visible = false;
                this.card16.visible = false;
            }
            if (this.bandC17) {
                this.card17.visible = false;
                this.card18.visible = false;
            }
            if (this.bandC19) {
                this.card19.visible = false;
                this.card20.visible = false;
            }
            if (this.bandC1 && this.bandC3 && this.bandC5 && this.bandC7 && this.bandC9 && this.bandC11 && this.bandC13 && this.bandC15 && this.bandC17 && this.bandC19)
            {
                console.log("GANASTE");
            }
        }
    } 
    
export default Bootloader;