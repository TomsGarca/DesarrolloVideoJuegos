class Level extends Phaser.Scene{
    constructor(){
        super({
            key: 'Level'
        });
    }

    init() {
        console.log('Escena Level');
        this.width = this.sys.game.canvas.width;
        this.height = this.sys.game.canvas.height;
        this.maximo=690;
        this.minimo=0;
        this.direc=true;

        //this.minScale = 0.75;
        //this.maxScale = 1;
        //this.deckSizeDelta = 0.05;

      //  this.bgDelta = 2;
    }
    
    preload() {
        this.load.path = './assets/';
        this.load.image(['Puntero','FondoStart',
        ]);

        this.load.spritesheet('king','Medieval King/Sprites/Idle.png',
        {
            frameWidth: 160,
            frameHeight: 111
        })

        this.load.spritesheet('king_r','Medieval King/Sprites/Run.png',
        {
            frameWidth: 160,
            frameHeight: 111,
        })

        this.load.spritesheet('king_j','Medieval King/Sprites/Jump.png',
        {
            frameWidth: 160,
            frameHeight: 111,
        })

        this.load.spritesheet('king_q','Medieval King/Sprites/Attack1.png',
        {
            frameWidth: 160,
            frameHeight: 111
        })

        this.load.spritesheet('king_e','Medieval King/Sprites/Attack2.png',
        {
            frameWidth: 160,
            frameHeight: 111
        })
        
    }

    create(){
        this.bgs = [
            this.add.image(0, 0, "FondoStart").setOrigin(0, 0).setDepth(-1).setScale(2),
            this.add.image(0, 0, "FondoStart").setOrigin(0, 0).setDepth(-1).setScale(2),
        ];
        this.bgs[1].x = this.bgs[0].displayWidth;
        const keyCodes = Phaser.Input.Keyboard.KeyCodes;
        const eventos = Phaser.Input.Events;

        this.king = this.add.sprite(300, 720, 'king', 0).setScale(5);
        //this.text = this.add.text(500, 250, 'PRESIONA\t[→] [D]', {
        //     fontFamily: 'Consolas', fontSize: '30px'
        // }).setDepth(10);

        this.anims.create({
            // Nombre de la animación
            key: 'king_idle',
            // Se cargan los frames por números
            // NOTA: generateFrameNames() se
            // usa cuando ya existe un Atlas
            frames: this.anims.generateFrameNumbers('king', {
                start: 0,
                end: 7
            }),
            repeat: -1,
            frameRate: 6
        });


        this.king.anims.play('king_idle');


        this.anims.create({
            // Nombre de la animación
            key: 'king_run',
            // Se cargan los frames por números
            // NOTA: generateFrameNames() se
            // usa cuando ya existe un Atlas
            frames: this.anims.generateFrameNumbers('king_r', {
                start: 0,
                end: 7
            }),
            repeat: -1,
            frameRate: 6
        });

        this.anims.create({
            // Nombre de la animación
            key: 'king_jump',
            // Se cargan los frames por números
            // NOTA: generateFrameNames() se
            // usa cuando ya existe un Atlas
            frames: this.anims.generateFrameNumbers('king_j', {
                start: 0,
                end: 1
            }),
            repeat: -1,
            frameRate: 1
        });

        this.anims.create({
            // Nombre de la animación
            key: 'king_attack',
            // Se cargan los frames por números
            // NOTA: generateFrameNames() se
            // usa cuando ya existe un Atlas
            frames: this.anims.generateFrameNumbers('king_q', {
                start: 0,
                end: 3
            }),
            repeat: 0,
            frameRate: 2
        });

        this.anims.create({
            // Nombre de la animación
            key: 'king_attack2',
            // Se cargan los frames por números
            // NOTA: generateFrameNames() se
            // usa cuando ya existe un Atlas
            frames: this.anims.generateFrameNumbers('king_e', {
                start: 0,
                end: 3
            }),
            repeat: 0,
            frameRate: 2
        });

        this.teclas = this.input.keyboard.addKeys({
            izq: keyCodes.A,
            der: keyCodes.D,
            powQ: keyCodes.Q,
            powR: keyCodes.R,
            kspc: keyCodes.SPACE
        });

        this.teclas.izq.on('down', ()=>{
                this.king.flipX = true;
                this.king.anims.play('king_run');
        });

        this.teclas.izq.on('up', ()=>{
            this.king.anims.stop();
            this.king.anims.play('king_idle');
        });

        this.teclas.der.on('down', ()=>{
            this.king.flipX = false;
            this.king.anims.play('king_run');
                
        });

        this.teclas.der.on('up', ()=>{
            this.king.anims.stop();
            this.king.anims.play('king_idle');
        });

        this.teclas.powQ.on('down', ()=>{
            this.king.play('king_attack');
        });

        this.teclas.powQ.on('up', ()=>{
            this.king.anims.stop();
            this.king.play('king_idle');
        });

        this.teclas.powR.on('down', ()=>{
            this.king.play('king_attack2');
        });
        this.teclas.powR.on('up', ()=>{
            this.king.anims.stop();
            this.king.play('king_idle');
        });
     
    }
    update(time, delta) {
        if (this.teclas.der.isDown)
        {
            this.king.x += 2;
            if (this.king.x >= 1820) {
                this.king.x = 1820;
            }

            if (this.bgs[1].x >= - this.bgs[1].displayWidth + 1920) {
                this.bgs[0].x -= 2;
                this.bgs[1].x -= 2;
            }
            // this.bgs.forEach((bg) => {
            //     bg.x -= this.bgDelta;
            //     // if (bg.x >= bg.displayWidth) {
            //     //     bg.x = - bg.displayWidth + bg.x % bg.displayWidth;
            //     // }
            // })
        }

        if (this.teclas.izq.isDown)
        {
            this.king.x -= 2;
            if (this.king.x <= 100) {
                this.king.x = 100;
            }

            if (this.bgs[0].x <= 0) {
                this.bgs[0].x += 2;
                this.bgs[1].x += 2;
            }
            // this.bgs.forEach((bg) => {
            //     bg.x += this.bgDelta;
            //     if (bg.x >= bg.displayWidth) {
            //         bg.x = - bg.displayWidth + bg.x % bg.displayWidth;
            //     }
            // })
        }

        if (this.teclas.powQ.isDown)
        {
            
        }

        if (this.teclas.powR.isDown)
        {
            
        }

        if (this.teclas.kspc.isDown) {
            
        }
    }
}

export default Level;