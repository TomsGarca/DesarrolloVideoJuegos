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
            { key: '0', url: ['YamatoR.png'] },
            { key: '1', url: ['KataR.png'] },
            { key: '2', url: ['NamiR.png'] },
            { key: '3', url: ['TankManR.png'] },
            { key: '4', url: ['ZoroGodR.png'] },
            { key: '5', url: ['DoflamingoR.png'] },
            { key: '6', url: ['MarcoR.png'] },
            { key: '7', url: ['CoraGodR.png'] },
            { key: '8', url: ['GarpR.png'] },
            { key: '9', url: ['KaidoHR.png'] },
        ]);
        this.load.audio(
            { key: 'song', url: ['michino-timothy.ogg'] }
        );
        this.load.audio(
            { key: 'click', url: ['click.ogg'] }
        );

        this.max = 0;
        this.maxaux = 0;
        this.errores = 0;
        this.score = 0;
        this.array = new Array(20);
        this.arrayC = new Array(20);
        this.arrayB = new Array(10);
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
        for (let index = 0; index < (this.arrayB.length); index++){
            this.arrayB[index] = false;
        }

        const eventos = Phaser.Input.Events;
        console.log(eventos);
        
        this.music = this.sound.add('song');
        this.music2 = this.sound.add('click');
        // this.music.play();
        this.music.volume = 0.02;

        this.text1 = this.add.text(600, 15, 'Memory Card Game', {
            fontFamily: 'Consolas', fontSize: '40px'
        });
        this.text2 = this.add.text(1100, 15, 'Score: ' + this.score, {
            fontFamily: 'Consolas', fontSize: '40px'
        });
        this.text3 = this.add.text(1500, 15, 'Errors: ' + this.errores, {
            fontFamily: 'Consolas', fontSize: '40px'
        });

        //
        this.input.on(eventos.GAMEOBJECT_DOWN, (pointer, gameObject) => {
            if (this.max < 2) {
            gameObject.visible = false;
            this.max = this.max + 1;
            setTimeout(() => {
                gameObject.visible = true;
                if (this.max > 0) {
                    this.max = this.max - 1;
                }
            }, 2500);
            }
        });
        this.input.on(eventos.GAMEOBJECT_POINTER_OVER, (pointer, gameObject) => {
            this.music2.play();
            this.music2.volume = 1.0;

        });
    }
        
        update(time, delta) 
        {
            this.text2.setText('Score: ' + this.score);
            this.text3.setText('Errors: ' + this.errores);
            for (let index = 0; index < this.arrayC.length / 2; index++) {
                if (!this.arrayC[index].visible && !this.arrayC[index + 10].visible && !this.arrayB[index]) {
                    this.arrayB[index] = true;
                    this.score = this.score + 100;
                    this.max = 0;
                }
                console.log(index);
                for (let index2 = 0; index2 < this.arrayC.length; index2++) {
                    if (index != index2) {
                        console.log(" -- " + index2);
                        if (!this.arrayC[index] && !this.arrayC[index2]) {
                            this.errores = this.errores + 1;
                            // console.log(this.errores);
                        }
                    }

                }
                if (this.arrayB[index]) {
                    this.arrayC[index].visible = false;
                    this.arrayC[index + 10].visible = false;

                }
            }
        }
    } 
    
export default Bootloader;