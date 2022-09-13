class Bootloader extends Phaser.Scene{
    constructor(){
        super({
            key: "Bootloader" //Nombre interno o clave de referencia
        });
    }
    init () {}
        
    preload() {

        this.load.path = "./assets/"; //Ruta de todas 
        this.load.image("carta", "Carta.png");
        this.load.image("fondo", "fondo.png");

        this.load.image([
            { key: '0', url: ['YamatoR.png'], index: 1 },
            { key: '1', url: ['KataR.png'], index: 2 },
            { key: '2', url: ['NamiR.png'], index: 3 },
            { key: '3', url: ['TankManR.png'], index: 4 },
            { key: '4', url: ['ZoroGodR.png'], index: 5 },
            { key: '5', url: ['DoflamingoR.png'], index: 6 },
            { key: '6', url: ['MarcoR.png'], index: 7 },
            { key: '7', url: ['CoraGodR.png'], index: 8 },
            { key: '8', url: ['GarpR.png'], index: 9 },
            { key: '9', url: ['KaidoHR.png'], index: 10 },
        ]);
        this.load.audio(
            { key: 'song', url: ['michino-timothy.ogg'] }
        );

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
        this.array = new Array(20);
        this.arrayC = new Array(20);
    }

    create() {
        this.fondo = this.add.image(0, 0, "fondo").setOrigin(0, 0);
        this.fondo2 = this.add.image(2560, 0, "fondo").setOrigin(0, 0);

        for (let index = 0; index < (this.array.length)/2; index++){
            this.array[index] = this.add.image(125 + (index*500), 350, index).setOrigin(0,0);
            this.array[index + 10] = this.add.image(125 + (index*500), 950, index).setOrigin(0,0);
        }
        for (let index = 0; index < (this.arrayC.length)/2; index++){
            this.arrayC[index] = this.add.image(125 + (index*500), 350 - 34, "carta").setOrigin(0,0).setInteractive();
            this.arrayC[index + 10] = this.add.image(125 + (index*500), 950 - 34, "carta").setOrigin(0,0).setInteractive();
        }
        const eventos = Phaser.Input.Events;
        console.log(eventos);
        this.music = this.sound.add('song');
        this.music.play();
        this.music.volume = 0.02;

        this.text1 = this.add.text(600, 15, 'Memory Card Game', {
            fontFamily: 'Consolas', fontSize: '40px'
        });
        this.text2 = this.add.text(1100, 15, 'Score: ', {
            fontFamily: 'Consolas', fontSize: '40px'
        });
        this.text3 = this.add.text(1500, 15, 'Errors: ' + this.errores, {
            fontFamily: 'Consolas', fontSize: '40px'
        });

        //
        this.input.on(eventos.GAMEOBJECT_DOWN, (pointer, gameObject) => {
            // if (this.maxaux < 2) {
            gameObject.visible = false;
            this.max = this.max + 1;
            setTimeout(() => {
                gameObject.visible = true;
                if (this.max > 0) {
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
            // if (this.max == 2) {
                // this.maxaux = this.max;
                // setTimeout(() => {
            //         if (this.card1.visible == false && this.card2.visible == false && !this.bandC1) {
            //             // console.log("Se volteo pareja");
            //             this.bandC1 = true; 
            //             // setTimeout(() => {
            //                 this.max = 0;
            //                 this.maxaux = this.max;
            //             // }, 1500);
            //         }
            //         else if (this.card3.visible == false && this.card4.visible == false && !this.bandC3) {
            //             // console.log("Se volteo pareja");
            //             this.bandC3 = true;
            //             // setTimeout(() => {
            //                 this.max = 0;
            //                 this.maxaux = this.max;
            //             // }, 1500);
            //         }
            //         else if (this.card5.visible == false && this.card6.visible == false && !this.bandC5) {
            //             // console.log("Se volteo pareja");
            //             this.bandC5 = true;
            //             // setTimeout(() => {
            //                 this.max = 0;
            //                 this.maxaux = this.max;
            //             // }, 1500);
            //         }
            //         else if (this.card7.visible == false && this.card8.visible == false && !this.bandC7) {
            //             // console.log("Se volteo pareja");
            //             this.bandC7 = true;
            //             // setTimeout(() => {
            //                 this.max = 0;
            //                 this.maxaux = this.max;
            //             // }, 1500);
            //         }
            //         else if (this.card9.visible == false && this.card10.visible == false && !this.bandC9) {
            //             // console.log("Se volteo pareja");
            //             this.bandC9 = true;
            //             // setTimeout(() => {
            //                 this.max = 0;
            //                 this.maxaux = this.max;
            //             // }, 1500);                
            //         }
            //         else if (this.card11.visible == false && this.card12.visible == false && !this.bandC11) {
            //             // console.log("Se volteo pareja");
            //             this.bandC11 = true;
            //             // setTimeout(() => {
            //                 this.max = 0;
            //                 this.maxaux = this.max;
            //             // }, 1500);
            //         }
            //         else if (this.card13.visible == false && this.card14.visible == false && !this.bandC13) {
            //             // console.log("Se volteo pareja");
            //             this.bandC13 = true;
            //             // setTimeout(() => {
            //                 this.max = 0;
            //                 this.maxaux = this.max;
            //             // }, 1500);
            //         }
            //         else if (this.card15.visible == false && this.card16.visible == false && !this.bandC15) {
            //             // console.log("Se volteo pareja");
            //             this.bandC15 = true;
            //             // setTimeout(() => {
            //                 this.max = 0;
            //                 this.maxaux = this.max;
            //             // }, 1500);
            //         }
            //         else if (this.card17.visible == false && this.card18.visible == false && !this.bandC17) {
            //             // console.log("Se volteo pareja");
            //             this.bandC17 = true;
            //             // setTimeout(() => {
            //                 this.max = 0;
            //                 this.maxaux = this.max;
            //             // }, 1500);
            //         }
            //         else if (this.card19.visible == false && this.card20.visible == false && !this.bandC19) {
            //             // console.log("Se volteo pareja");
            //             this.bandC19 = true;
            //             // setTimeout(() => {
            //                 this.max = 0;
            //                 this.maxaux = this.max;
            //             // }, 1500);
            //         }
            //         else{
            //             this.errores = this.errores + 1;
            //             // setTimeout(() => {
            //                 this.max = 0;
            //             // }, 1500);
            //         }
            //     // }, 1500);
            //     // setTimeout(() => {
            //     //     this.maxaux = 0;
            //     // }, 2500);
            // // } 
            
            
            // if (this.bandC1) {
            //     this.card1.visible = false;
            //     this.card2.visible = false;
            // }
            // if (this.bandC3) {
            //     this.card3.visible = false;
            //     this.card4.visible = false;
            // }
            // if (this.bandC5) {
            //     this.card5.visible = false;
            //     this.card6.visible = false;
            // }
            // if (this.bandC7) {
            //     this.card7.visible = false;
            //     this.card8.visible = false;
            // }
            // if (this.bandC9) {
            //     this.card9.visible = false;
            //     this.card10.visible = false;
            // }
            // if (this.bandC11) {
            //     this.card11.visible = false;
            //     this.card12.visible = false;
            // }
            // if (this.bandC13) {
            //     this.card13.visible = false;
            //     this.card14.visible = false;
            // }
            // if (this.bandC15) {
            //     this.card15.visible = false;
            //     this.card16.visible = false;
            // }
            // if (this.bandC17) {
            //     this.card17.visible = false;
            //     this.card18.visible = false;
            // }
            // if (this.bandC19) {
            //     this.card19.visible = false;
            //     this.card20.visible = false;
            // }
            // if (this.bandC1 && this.bandC3 && this.bandC5 && this.bandC7 && this.bandC9 && this.bandC11 && this.bandC13 && this.bandC15 && this.bandC17 && this.bandC19)
            // {
            //     console.log("GANASTE");
            // }
        }
    } 
    
export default Bootloader;