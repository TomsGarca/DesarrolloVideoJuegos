class Bootloader extends Phaser.Scene{
    constructor(){
        super({
            key: 'Bootloader'
        });
    }

    init() {
        console.log('Escena Bootloader');
    }
    
    preload() {
        this.load.path = './assets/';
        
        // this.load.image(['yoshif', 'yoshi']);


        // this.load.spritesheet('tomato', 'tomato/tomato.png', {
        //     frameWidth: 16,
        //     frameHeight: 25
        //     });
        this.load.image(['canvas1', 'Emperor']);

        this.load.spritesheet('king','Medieval King/Sprites/Idle.png',
        {
            frameWidth: 100,
            frameHeight: 111,
            // margin: 2,
            spacing: 60
        })


        this.load.atlas('tomato', 'tomato_atlas/tomato.png','tomato_atlas/tomato_atlas.json');

            //this.load.atlas('tomato', 'tomato_atlas/tomato.png', 'tomato_atlas/tomato_atlas.json');
        this.load.animation('tomatoAnim', 'tomato_atlas/tomato_anim.json');
    }

    create() {

        
        this.add.image(0, 0, "canvas1").setOrigin(0, 0).setDepth(-1);
        // this.add.image(0, 0, "Emperor").setOrigin(0, 0).setDepth(2);

        this.king = this.add.sprite(550, 420, 'king', 0).setScale(6);
        //this.puntero = this.add.image(0, 0, 'cursor2').setOrigin(0.15, 0.15).setDepth(5);
        //this.canvas.setDepth(-1);

        //this.yoshi = this.add.image(100, 100, 'yoshi');
        // this.tomato = this.add.sprite(100, 100, 'tomato', 0);
        // this.tomato = this.add.sprite(100, 100, 'tomato', 0).setScale(4);
        // this.tomato_spacing = this.add.sprite(100, 220, 'tomato_spacing',0).setScale(4);


        this.anims.create({
            // Nombre de la animación
            key: 'king_indle',
            // Se cargan los frames por números
            // NOTA: generateFrameNames() se
            // usa cuando ya existe un Atlas
            frames: this.anims.generateFrameNumbers('king', {
            start: 0,
            end: 7
            }),
            repeat: -1,
            frameRate: 8
        });

        this.king.anims.play('king_indle');     
    }

    update(time, delta) {
        
    }
}

export default Bootloader;