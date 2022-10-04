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
    
        this.load.image(['fondo']);

        this.load.spritesheet('moon','Hero Knight/Idle.png',
        {
            frameWidth: 180,
            frameHeight: 180,
            margin: 1,
            // spacing: 60
        })

        this.load.spritesheet('king','Medieval King/Sprites/Idle.png',
        {
            frameWidth: 100,
            frameHeight: 111,
            // margin: 2,
            spacing: 60
        })


    }

    create() {
        
        
        this.add.image(0, 0, "fondo").setOrigin(0, 0).setDepth(-1);
        
        this.moon = this.add.sprite(270, 590, 'moon', 0).setScale(5);
        this.anims.create({
            // Nombre de la animación
            key: 'moon_indle',
            // Se cargan los frames por números
            // NOTA: generateFrameNames() se
            // usa cuando ya existe un Atlas
            frames: this.anims.generateFrameNumbers('moon', {
                start: 0,
                end: 10
            }),
            repeat: -1,
            frameRate: 12
        });
        
        this.moon.anims.play('moon_indle');

        this.king = this.add.sprite(550, 420, 'king', 0).setScale(6);
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