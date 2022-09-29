class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader'); 
    }

    init () {}

    preload() {
        console.log('Bootloader');
        this.load.setPath('./assets/');

        this.load.image('rc', 'RC.jpg');

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
        this.add.image(this.scale.width / 2, this.scale.height / 2, 'rc');
        
        var cortes = Array(30);
        for(var i = 0; i < 30; i++)
        {
            cortes[i] = this.add.image(100+i*10, 100+i*20, i).setOrigin(0,0).setInteractive();
        }
    }

    update(time,delta)
    {
        
    }
}
export default Bootloader;