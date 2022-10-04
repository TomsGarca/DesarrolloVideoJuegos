class Start extends Phaser.Scene {
    constructor() {
        super({ key: 'Start' });
    }

    init() {
        
        this.width = this.sys.game.canvas.width;
        this.height = this.sys.game.canvas.height;

        this.minScale = 0.75;
        this.maxScale = 1;
        this.deckSizeDelta = 0.05;

        this.bgDelta = 2;
    }
    preload() {
        this.load.path = './assets/';
        this.load.image(['puntero','fondo4','title2', 'start'
        ]);
        this.load.audio({
            key: "musica",
            url: "cancion.mp3"
        });
    }
    create() {
        
       
        this.musica = this.sound.add("musica");
        this.musica.play({
            volume: 1,
            loop: true
        });

        this.puntero = this.add.image(0, 0, 'puntero').setOrigin(0.15, 0.15).setDepth(5);
       // this.add.image(0, 0, "fondo2").setOrigin(0.0).setDepth(-1);

        this.bgs = [
            this.add.image(0, 0, "fondo4").setOrigin(0, 0).setDepth(-1).setScale(2),
            this.add.image(0, 0, "fondo4").setOrigin(0, 0).setDepth(-1).setScale(2),
        ];
        this.bgs[1].x = - this.bgs[0].displayWidth;

        this.title = this.add.image(
            this.width / 2,
            this.height / 2 - 15,
            "title2",
        ).setDepth(0);


        this.start = this.add.image(
            this.width / 2,
            this.height / 2 + 80,
            "start",
        ).setDepth(0).setInteractive();


        const events = Phaser.Input.Events;

        this.input.on(events.GAMEOBJECT_DOWN, (_, gameObject) => {
            //this.music.stop();
            this.scene.start("Bootloader", {
            });
        })
        this.sys.canvas.style.cursor = 'none';
        this.input.on(events.POINTER_MOVE, (event) => {
            this.puntero.x = event.worldX;
            this.puntero.y = event.worldY;
        });
    }
    update(time, delta) {
    
        this.bgs.forEach((bg) => {
            bg.x += this.bgDelta;
            if (bg.x >= bg.displayWidth) {
                bg.x = - bg.displayWidth + bg.x % bg.displayWidth;
            }
        })
    
    }

    changeDeckSize(deck, way) {
        deck.scale += way * this.deckSizeDelta;
        deck.scale =
            deck.scale > this.maxScale
                ? this.maxScale
                : deck.scale;
        deck.scale =
            deck.scale < this.minScale
                ? this.minScale
                : deck.scale;
    }
}
export default Start;