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
    
        this.load.image("fondo", "Fondo.png");
        this.load.image("fondoEMP", "FondoEmpty.png");
        this.load.image('Puntero','Puntero.png');


        this.load.image([
            { key: '0', url: ['Cards/CardBN1.png'] },
            { key: '1', url: ['Cards/CardBN2.png'] },
            { key: '2', url: ['Cards/CardBN3.png'] },
            { key: '3', url: ['Cards/CardBN4.png'] },
            { key: '4', url: ['Cards/Card1.png'] },
            { key: '5', url: ['Cards/Card2.png'] },
            { key: '6', url: ['Cards/Card3.png'] },
            { key: '7', url: ['Cards/Card4.png'] }
        ]);

        this.arrayCards = new Array(4);
        this.arrayFront = new Array(4);
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

        this.load.spritesheet('hiero','Hiero/Idle.png',
        {
            frameWidth: 288,
            frameHeight: 128,
            //margin: 2,
            //spacing: 60
        })

        // WITCH IDLE                          
        this.load.atlas('witch_idle', 'witch/witch_idle/witch_idle.png', //IMG con los recortes unidos y hecho el json
        'witch/witch_idle/witch_idle_atlas.json');
        this.load.animation('witch_idle', 'witch/witch_idle_anim/witch_idle_anim.json');  
        //WITCH ATTACK
        this.load.atlas('witch_attack', 'witch/witch_attack/witch_attack.png', //IMG con los recortes unidos y hecho el json
        'witch/witch_attack/witch_attack_atlas.json');
        this.load.animation('witch_attack', 'witch/witch_attack_anim/witch_attack_anim.json');  
        this.load.atlas('witch_charge', 'witch/witch_charge/witch_charge.png', //IMG con los recortes unidos y hecho el json
        'witch/witch_charge/witch_charge_atlas.json');
        this.load.animation('witch_charge', 'witch/witch_charge_anim/witch_charge_anim.json');
        this.load.atlas('witch_run', 'witch/witch_run/witch_run.png', //IMG con los recortes unidos y hecho el json
        'witch/witch_run/witch_run_atlas.json');
        this.load.animation('witch_run', 'witch/witch_run_anim/witch_run_anim.json');  
        //El atributo key del json debe de ser el mismo que el primer argumento de .animation()  
        
    }
    
    create() {

        this.add.image(0, 0, "fondo").setOrigin(0, 0).setDepth(-1);
        this.puntero = this.add.image(0, 0, 'Puntero').setOrigin(0.15, 0.15).setDepth(5).setScale(1.5);
        
        const keyCodes = Phaser.Input.Keyboard.KeyCodes;
        const eventos = Phaser.Input.Events;

        for (let index = 0; index < this.arrayCards.length; index++) {
            this.arrayCards[index] = this.add.image(130 + (index*434), 275, index).setOrigin(0,0).setScale(1.05).setTint(0x4A148C,0xEA80FC,0x37474F,0x000099);
        }

        this.moon = this.add.sprite(270, 590, 'moon', 0).setScale(5);
        // this.anims.create({
        //     // Nombre de la animación
        //     key: 'moon_indle',
        //     // Se cargan los frames por números
        //     // NOTA: generateFrameNames() se
        //     // usa cuando ya existe un Atlas
        //     frames: this.anims.generateFrameNumbers('moon', {
        //         start: 0,
        //         end: 10
        //     }),
        //     repeat: -1,
        //     frameRate: 12
        // });
        
        // this.moon.anims.play('moon_indle');

        this.king = this.add.sprite(550, 420, 'king', 0).setScale(6);
        // this.anims.create({
        //     // Nombre de la animación
        //     key: 'king_indle',
        //     // Se cargan los frames por números
        //     // NOTA: generateFrameNames() se
        //     // usa cuando ya existe un Atlas
        //     frames: this.anims.generateFrameNumbers('king', {
        //         start: 0,
        //         end: 7
        //     }),
        //     repeat: -1,
        //     frameRate: 8
        // });
        
        // this.king.anims.play('king_indle');

        this.hiero = this.add.sprite(1180, 270, 'hiero', 0).setScale(8);
        // this.anims.create({
        //     // Nombre de la animación
        //     key: 'hiero_idle',
        //     // Se cargan los frames por números
        //     // NOTA: generateFrameNames() se
        //     // usa cuando ya existe un Atlas
        //     frames: this.anims.generateFrameNumbers('hiero', {
        //         start: 0,
        //         end: 15
        //     }),
        //     repeat: -1,
        //     frameRate: 15
        // });
        
        // this.hiero.anims.play('hiero_idle');

        this.witch = this.add.sprite(1620, 575, 'witch_idle',0).setScale(6);
        // this.witch.anims.play('witch_idle'); //El argumento debe de ser el mismo nombre de la animacion 


        this.sys.canvas.style.cursor = 'none';
        this.input.on(eventos.POINTER_MOVE, (evento) => {
            this.puntero.x = evento.worldX;
            this.puntero.y = evento.worldY;
        });
        
        this.add.image(0, 0, "fondoEMP").setOrigin(-0.01, 0);
        
        for (let index = 0; index < this.arrayCards.length; index++) {
            this.arrayFront[index] = this.add.image(127 + (index*434), 269, index+4).setOrigin(0,0).setScale(1.05).setInteractive();
        }

        this.input.on(eventos.GAMEOBJECT_OVER, (pointer, gameObject) => {

            gameObject.setTint(0x4A148C,0xEA80FC,0x37474F,0x000099);
            // gameObject.setTint(0x3b1771,0x4040ff,0x19e619,0x3b1771);
            // gameObject.setTint(0x2C148C,0x2C148C,0x2C148C,0x2C148C);
        });

        this.input.on(eventos.GAMEOBJECT_OUT, (pointer, gameObject) => {

            gameObject.clearTint();
        });
        
        this.teclas = this.input.keyboard.addKeys({
            izq: keyCodes.A,
            der: keyCodes.D,
            sup: keyCodes.W,
            powQ: keyCodes.Q,
            powR: keyCodes.R,
        });
        this.teclas.izq.on('down', ()=>{
            // console.log('MOVER personaje izq');
            this.witch.flipX = true;
            this.witch.play('witch_run');
        });
        this.teclas.der.on('down', ()=>{
            // console.log('MOVER personaje der');
            this.witch.flipX = false;
            this.witch.play('witch_run');
        });
        this.teclas.powQ.on('down', ()=>{
            if (this.witch.flipX == false) {
                this.witch.x = 1770;
            }
            else
            {
                this.witch.x = 1470;
            }
            this.witch.play('witch_attack');
        });
        this.teclas.powQ.on('up', ()=>{
            this.witch.x = 1620;
            this.witch.play('witch_attack');
        });
        this.teclas.powR.on('down', ()=>{
            this.witch.play('witch_charge');
        });
        // .setTint(0x4A148C,0xEA80FC,0x37474F,0x000099)
    }
    
    update(time, delta) {
        // if(this.teclas.der.isDown){
            //     console.log('derecha');
            //     this.witch.x += 3;
        // }
        // if(this.teclas.izq.isDown){
            //     console.log('izq');
            //     this.witch.x -= 3;
            // }
            
            // if(Phaser.Input.Keyboard.JustDown(this.teclas.powQ)){
        //     this.witch.play("witch_attack");
        // }
        if(Phaser.Input.Keyboard.JustUp(this.teclas.izq)){
            this.witch.play("witch_idle");
        }
        if(Phaser.Input.Keyboard.JustUp(this.teclas.der)){
            this.witch.play("witch_idle");
        }
        if(Phaser.Input.Keyboard.JustUp(this.teclas.powQ)){
            this.witch.play("witch_idle");
        }
        if(Phaser.Input.Keyboard.JustUp(this.teclas.powR)){
            this.witch.play("witch_idle");
        }
    }
}

export default Bootloader;