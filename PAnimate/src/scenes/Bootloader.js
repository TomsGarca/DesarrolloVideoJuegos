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
        this.load.image(['canvas1']);

        this.load.spritesheet('tomato_spacing', 'tomato_spacing/tomato_spacing.png', {
            frameWidth: 16,
            frameHeight: 25,
            margin: 1,
            spacing: 2
            });


            this.load.atlas('tomato', 'tomato_atlas/tomato.png','tomato_atlas/tomato_atlas.json');

            //this.load.atlas('tomato', 'tomato_atlas/tomato.png', 'tomato_atlas/tomato_atlas.json');
            this.load.animation('tomatoAnim', 'tomato_atlas/tomato_anim.json');
    }

    create() {

        
        this.add.image(0, 0, "canvas1").setOrigin(0, 0).setDepth(-1);
        //this.puntero = this.add.image(0, 0, 'cursor2').setOrigin(0.15, 0.15).setDepth(5);
        //this.canvas.setDepth(-1);

        //this.yoshi = this.add.image(100, 100, 'yoshi');
        // this.tomato = this.add.sprite(100, 100, 'tomato', 0);
        // this.tomato = this.add.sprite(100, 100, 'tomato', 0).setScale(4);
        this.tomato_spacing = this.add.sprite(100, 220, 'tomato_spacing',0).setScale(4);


        this.anims.create({
            // Nombre de la animación
            key: 'tomato_camina',
            // Se cargan los frames por números
            // NOTA: generateFrameNames() se
            // usa cuando ya existe un Atlas
            frames: this.anims.generateFrameNumbers('tomato_spacing', {
            start: 0,
            end: 7
            }),
            repeat: -1,
            frameRate: 15
            });

            frames: this.anims.generateFrameNumbers('tomato_spacing', {
                frames: [0, 1, 2, 3, 4, 5, 6, 7]
                }),

            this.tomato_spacing.anims.play('tomato_camina');

            // this.anims.play('tomato_camina', this.tomato_spacing);
            // console.log(this.anims.generateFrameNumbers('tomato_spacing', {
            //     start: 0,
            //     end: 7
            //     }));

            // this.anims.create({
            //     key: 'tomato_camina',
            //     frames: this.anims.generateFrameNumbers('tomato_spacing', {
            //     start: 0,
            //     end: 7,
            //     }),
            //     repeat: -1
            //     });



            this.tomato = this.add.sprite(100, 100, 'tomato').setScale(4);

            this.anims.create({
                key: 'tomato_walk',
                frames: this.anims.generateFrameNames('tomato', {
                prefix: 'tomato_animation_1_',
                start: 0,
                end: 7
                }),
                repeat: -1,
                frameRate: 10
                });

                this.tomato.anims.play('tomato_walk');

                
    }

    update(time, delta) {
        
    }
}

export default Bootloader;