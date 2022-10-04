class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader'); 
    }

    preload() {
        console.log('Bootloader');
        this.load.setPath('./assets/');

        // this.load.image('logo_gamma', 'logo_gamma.png');

        this.load.on('complete', () => {
            console.log('Load complete');
        });

        this.load.spritesheet('king','Medieval King/Sprites/Idle.png',
        {
            frameWidth: 100,
            frameHeight: 111,
            // margin: 2,
            spacing: 60
        })

    }
    
    create() {
        // this.add.image(this.scale.width / 2, this.scale.height / 2, 'logo_gamma');
        this.king = this.add.sprite(70, 100, 'king', 0).setScale(4);
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
}
export default Bootloader;