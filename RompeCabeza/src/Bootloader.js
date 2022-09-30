class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader'); 
    }

    init () {}

    preload() {
        console.log('Bootloader');
        this.load.setPath('./assets/');

        this.load.image('rc', 'RCPuzzle.jpg');
        this.load.image("drop", "drop.png");
        this.load.image("win", "Win.png");
        this.load.image([
            // PIEZAS DEL ROMPECABEZAS (FOTO)
            { key: '0', url: "11.png"  },            { key: '1', url: "12.png"  },
            { key: '2', url: "13.png"  },            { key: '3', url: "14.png"  },
            { key: '4', url: "15.png"  },            { key: '5', url: "16.png"  },
            { key: '6', url: "21.png"  },            { key: '7', url: "22.png"  },
            { key: '8', url: "23.png"  },            { key: '9', url: "24.png"  },
            { key: '10', url: "25.png"  },           { key: '11', url: "26.png"  },
            { key: '12', url: "31.png"  },           { key: '13', url: "32.png"  },
            { key: '14', url: "33.png"  },           { key: '15', url: "34.png"  },
            { key: '16', url: "35.png"  },           { key: '17', url: "36.png"  },
            { key: '18', url: "41.png"  },           { key: '19', url: "42.png"  },
            { key: '20', url: "43.png"  },           { key: '21', url: "44.png"  },
            { key: '22', url: "45.png"  },           { key: '23', url: "46.png"  },
            { key: '24', url: "51.png"  },           { key: '25', url: "52.png"  },
            { key: '26', url: "53.png"  },           { key: '27', url: "54.png"  },
            { key: '28', url: "55.png"  },           { key: '29', url: "56.png"  },
            
            // PIEZAS DEL ROMPECABEZAS (ESPACIOS)
            // { key: '30', url: "P11.png"  },          { key: '31', url: "P12.png"  },
            // { key: '32', url: "P13.png"  },          { key: '33', url: "P14.png"  },
            // { key: '34', url: "P15.png"  },          { key: '35', url: "P16.png"  },
            // { key: '36', url: "P21.png"  },          { key: '37', url: "P22.png"  },
            // { key: '38', url: "P23.png"  },          { key: '39', url: "P24.png"  },
            // { key: '40', url: "P25.png"  },          { key: '41', url: "P26.png"  },
            // { key: '42', url: "P31.png"  },          { key: '43', url: "P32.png"  },
            // { key: '44', url: "P33.png"  },          { key: '45', url: "P34.png"  },
            // { key: '46', url: "P35.png"  },          { key: '47', url: "P36.png"  },
            // { key: '48', url: "P41.png"  },          { key: '49', url: "P42.png"  },
            // { key: '50', url: "P43.png"  },          { key: '51', url: "P44.png"  },
            // { key: '52', url: "P45.png"  },          { key: '53', url: "P46.png"  },
            // { key: '54', url: "P51.png"  },          { key: '55', url: "P52.png"  },
            // { key: '56', url: "P53.png"  },          { key: '57', url: "P54.png"  },
            // { key: '58', url: "P55.png"  },          { key: '59', url: "P56.png"  },
        ]
        );
        
        var jg = {
            nombre: "Kratos", score: 3000
        }

        this.load.on('complete', () => {
            console.log('Load complete');
        });
    }

    create() {
        this.add.image(this.scale.width / 2, this.scale.height / 2, 'rc').setOrigin(0.5,0.7);
        //this.add.Text();
        const eventos = Phaser.Input.Events;
        this.win = this.add.image(1200, 1019, "win").setAlpha(0);
        this.scales = 0.1;

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
            this.hb[i] = this.add.image(290+(i*320), 244, i + 30).setOrigin(0,0).setDepth(-1).setInteractive();
            // this.hb[i].visible = false;
            this.hb[i].input.dropZone = true;

            this.hb[i+6] = this.add.image(290+(i*320), 460, i+6 + 30).setOrigin(0,0).setDepth(-1).setInteractive();
            // this.hb[i+6].visible = false;
            this.hb[i+6].input.dropZone = true;

            this.hb[i+12] = this.add.image(290+(i*320), 676, i+12 + 30).setOrigin(0,0).setDepth(-1).setInteractive();
            // this.hb[i+12].visible = false;
            this.hb[i+12].input.dropZone = true; 

            this.hb[i+18] = this.add.image(290+(i*320), 892, i+18 + 30).setOrigin(0,0).setDepth(-1).setInteractive();
            // this.hb[i+18].visible = false;
            this.hb[i+18].input.dropZone = true;

            this.hb[i+24] = this.add.image(290+(i*320), 1108, i+24 + 30).setOrigin(0,0).setDepth(-1).setInteractive();
            // this.hb[i+24].visible = false;
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

        this.dz = Array(30);

        for(var i = 0; i < this.dz.length/5; i++  ) 
        {
            this.dz[i] = this.add.zone(290+(i*320), 244, 300, 300).setRectangleDropZone(300, 300);
            this.dz[i].name = i;
            this.dz[i].points = false; 
            this.dz[i+6] = this.add.zone(290+(i*320), 460, 300, 300).setRectangleDropZone(300, 300);
            this.dz[i+6].name = i+6;
            this.dz[i+6].points = false; 
            this.dz[i+12] = this.add.zone(290+(i*320), 676, 300, 300).setRectangleDropZone(300, 300);
            this.dz[i+12].name = i+12;
            this.dz[i+12].points = false; 
            this.dz[i+18] = this.add.zone(290+(i*320), 892, 300, 300).setRectangleDropZone(300, 300);
            this.dz[i+18].name = i+18;
            this.dz[i+18].points = false; 
            this.dz[i+24] = this.add.zone(290+(i*320), 1108, 300, 300).setRectangleDropZone(300, 300);
            this.dz[i+24].name = i+24;
            this.dz[i+24].points = false; 
        }

        this.dz[3].setOrigin(0.2,0);
        this.dz[4].setOrigin(0.2,0);
        this.dz[5].setOrigin(0.2,0);

        this.dz[6].setOrigin(0,0.15);
        this.dz[7].setOrigin(0.19,0.18);
        this.dz[8].setOrigin(0.16,0);
        this.dz[9].setOrigin(0.01,0.19);
        this.dz[10].setOrigin(0.16,0.16);

        this.dz[13].setOrigin(0,0.19);
        this.dz[14].setOrigin(0.2,.19);
        this.dz[15].setOrigin(0.2,.19);
        this.dz[16].setOrigin(0.16,0.01);
        this.dz[17].setOrigin(0,0.2);

        this.dz[18].setOrigin(0,0.15);
        this.dz[19].setOrigin(0.19,0.18);
        this.dz[20].setOrigin(0.16,0.18);
        this.dz[21].setOrigin(0,0.18);
        this.dz[22].setOrigin(0,0.18);
        this.dz[23].setOrigin(0.19,0.15);

        this.dz[25].setOrigin(0,0.19);
        this.dz[26].setOrigin(0.16,0.19);
        this.dz[27].setOrigin(0,0.19);
        this.dz[28].setOrigin(0.16,0.19);
        //let redDropZone = this.add.zone(500, 500, 1000, 1000).setRectangleDropZone(1000, 1000);
        //redDropZone.setDepth(2);
        //redDropZone.name = "redZone";
        this.gane = 0;

        this.input.on(eventos.DROP, (pointer, obj, dropZone) => {
            
            if ((obj.texture.key == dropZone.name) ) { //|| (gameObject.texture.key === "blueCard" && dropZone.name === "blueZone")
                console.log('Si coincide el area con la imagen');
                // your code here
                obj.x = dropZone.x;
                obj.y = dropZone.y;
                obj.setDraggable=false;
                //this.gane++;
                dropZone.points = true;
                
                setInterval(() => {
                    obj.setTint(0x008000); 
                }, 1000);
                obj.clearTint(); 
            }
            // Si el objeto de juego no enbona, regresamos el objeto a la posicion anterior/original
            else {
                obj.x = obj.input.dragStartX;
                obj.y = obj.input.dragStartY;
                console.log('El area de la imagen no esta ahi cuidaoh');
                setInterval(() => {
                    obj.setTint(0xff0000); 
                }, 1000);
                obj.clearTint(); 
            }
        });

        this.input.on(eventos.DRAG_END, (pointer, obj, dropzone) => {
            var aux = 0; 
            for(var i = 0; i < 30; i++)
           {
            if(this.dz[i].points == true)
            {
                aux++;
            }
           }
            if (aux == 29) {
            setInterval(() => {    
                if (this.scales < 3) {
                this.win.setDepth(4);
                this.win.setAlpha(1);
                    this.scales += .5;
                    this.win.setScale(this.scales);
                }
            }, 1);
        }
        });

  
        // let blueDropZone = this.add.zone(x, y, width, height).setRectangleDropZone(width, height);
        // blueDropZone.name = "blueZone";

//         this.input.on("drop", function(pointer, gameObject, dropZone) {

//         // if a red card is dropped on the redZone or a blue card dropped on a blueZone:
//         if ((gameObject.texture.key === "this.cortes[0]" && dropZone.name === "redZone") ) { //|| (gameObject.texture.key === "blueCard" && dropZone.name === "blueZone")
//             console.log('Si reconoce el area');
//             // your code here
//         }
//         // if the gameObject and zone don't match, return to original position
//         else {
//             gameObject.x = gameObject.input.dragStartX;
//             gameObject.y = gameObject.input.dragStartY;
//             console.log('El area no esta ahi cuidaoh');
//         }
//         });
    }

    update(time,delta)
    {
        
    }
}
export default Bootloader;