class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader'); 
    }

    init () {}

    preload() {
        console.log('Bootloader');
        this.load.setPath('./assets/');

        this.load.image('rc', 'RC.jpg');
        this.load.image("drop", "drop.png");
        this.load.image([
            { key: '0', url: "11.png"  },
            { key: '1', url: "12.png"  },
            { key: '2', url: "13.png"  },
            { key: '3', url: "14.png"  },
            { key: '4', url: "15.png"  },
            { key: '5', url: "16.png"  },
            { key: '6', url: "21.png"  },
            { key: '7', url: "22.png"  },
            { key: '8', url: "23.png"  },
            { key: '9', url: "24.png"  },
            { key: '10', url: "25.png"  },
            { key: '11', url: "26.png"  },
            { key: '12', url: "31.png"  },
            { key: '13', url: "32.png"  },
            { key: '14', url: "33.png"  },
            { key: '15', url: "34.png"  },
            { key: '16', url: "35.png"  },
            { key: '17', url: "36.png"  },
            { key: '18', url: "41.png"  },
            { key: '19', url: "42.png"  },
            { key: '20', url: "43.png"  },
            { key: '21', url: "44.png"  },
            { key: '22', url: "45.png"  },
            { key: '23', url: "46.png"  },
            { key: '24', url: "51.png"  },
            { key: '25', url: "52.png"  },
            { key: '26', url: "53.png"  },
            { key: '27', url: "54.png"  },
            { key: '28', url: "55.png"  },
            { key: '29', url: "56.png"  },
        ]
        );

        this.load.on('complete', () => {
            console.log('Load complete');
        });
    }

    create() {
        this.add.image(this.scale.width / 2, this.scale.height / 2, 'rc').setOrigin(0.5,0.7);
        const eventos = Phaser.Input.Events;

        this.cortes = Array(30);
        for(var i = 0; i < this.cortes.length/2; i++)
        {
            this.cortes[i] = this.add.image(100+i*135, 1400, i).setOrigin(0,0).setDepth(2).setInteractive();
            this.input.setDraggable(this.cortes[i]);
            this.cortes[i+this.cortes.length/2] = this.add.image(100+i*135, 1700, i+this.cortes.length/2).setOrigin(0,0).setDepth(2).setInteractive();
            this.input.setDraggable(this.cortes[i+this.cortes.length/2]);
        }

        this.hb = Array(30);
        for(var i = 0; i < this.hb.length/5; i++){
            this.hb[i] = this.add.image(290+(i*320), 244, i).setOrigin(0,0).setDepth(-1).setInteractive();
            //this.hb[i].setScale(3.4, 2.35); 
            this.hb[i].input.dropZone = true;

            this.hb[i+6] = this.add.image(290+(i*320), 460, i+6).setOrigin(0,0).setDepth(-1).setInteractive();
            //this.hb[i+this.hb.lenght/5].setScale(3.4, 2.35); 
            this.hb[i+6].input.dropZone = true;

            this.hb[i+12] = this.add.image(290+(i*320), 676, i+12).setOrigin(0,0).setDepth(-1).setInteractive();
            //this.hb[i+this.hb.lenght/5+6].setScale(3.4, 2.35);
            this.hb[i+12].input.dropZone = true; 

            this.hb[i+18] = this.add.image(290+(i*320), 892, i+18).setOrigin(0,0).setDepth(-1).setInteractive();
            //this.hb[i+this.hb.lenght/5+12].setScale(3.4, 2.35); 
            this.hb[i+18].input.dropZone = true;

            this.hb[i+24] = this.add.image(290+(i*320), 1108, i+24).setOrigin(0,0).setDepth(-1).setInteractive();
            //this.hb[i+this.hb.lenght/5+18].setScale(3.4, 2.35); 
            this.hb[i+24].input.dropZone = true;
        }
        this.hb[3].setOrigin(0.2,0);
        this.hb[4].setOrigin(0.2,0);
        this.hb[5].setOrigin(0.2,0);

        this.cortes[3].setOrigin(0.2,0);
        this.cortes[4].setOrigin(0.2,0);
        this.cortes[5].setOrigin(0.2,0);

        this.hb[6].setOrigin(0,0.15);
        this.hb[7].setOrigin(0.19,0.18);
        this.hb[8].setOrigin(0.16,0);
        this.hb[9].setOrigin(0.01,0.19);
        this.hb[10].setOrigin(0.16,0.16);

        this.cortes[6].setOrigin(0,0.15);
        this.cortes[7].setOrigin(0.19,0.18);
        this.cortes[8].setOrigin(0.16,0);
        this.cortes[9].setOrigin(0.01,0.19);
        this.cortes[10].setOrigin(0.16,0.16);

        this.hb[13].setOrigin(0,.19);
        this.hb[14].setOrigin(0.2,.19);
        this.hb[15].setOrigin(0.2,.19);
        this.hb[16].setOrigin(0.16,0.01);
        this.hb[17].setOrigin(0,0.2);

        this.cortes[13].setOrigin(0,.19);
        this.cortes[14].setOrigin(0.2,.19);
        this.cortes[15].setOrigin(0.2,.19);
        this.cortes[16].setOrigin(0.16,0.01);
        this.cortes[17].setOrigin(0,0.2);

        this.hb[18].setOrigin(0,0.15);
        this.hb[19].setOrigin(0.19,0.18);
        this.hb[20].setOrigin(0.16,0.18);
        this.hb[21].setOrigin(0,0.18);
        this.hb[22].setOrigin(0,0.18);
        this.hb[23].setOrigin(0.19,0.15);

        this.cortes[18].setOrigin(0,0.15);
        this.cortes[19].setOrigin(0.19,0.18);
        this.cortes[20].setOrigin(0.16,0.18);
        this.cortes[21].setOrigin(0,0.18);
        this.cortes[22].setOrigin(0,0.18);
        this.cortes[23].setOrigin(0.19,0.15);

        this.hb[25].setOrigin(0,0.19);
        this.hb[26].setOrigin(0.16,0.19);
        this.hb[27].setOrigin(0,0.19);
        this.hb[28].setOrigin(0.16,0.19);
        
        this.cortes[25].setOrigin(0,0.19);
        this.cortes[26].setOrigin(0.16,0.19);
        this.cortes[27].setOrigin(0,0.19);
        this.cortes[28].setOrigin(0.16,0.19);

        this.input.on(eventos.DRAG_START, (pointer, obj, dragX, dragY) => {
            obj.setScale(0.7);
        });

        this.input.on(eventos.DRAG, (pointer, obj, dragX, dragY) => {
            obj.x = dragX;
            obj.y = dragY;
            obj.setScale(1);
        });

        this.input.on(eventos.DROP, (pointer, obj, dropzone) => {
            obj.x = dropzone.x;
            obj.y = dropzone.y;
        });
    }

    update(time,delta)
    {
        
    }
}
export default Bootloader;