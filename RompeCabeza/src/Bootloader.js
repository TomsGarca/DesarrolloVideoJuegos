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
            { key: 0, url: "11.png"  },
            { key: 1, url: "12.png"  },
            { key: 2, url: "13.png"  },
            { key: 3, url: "14.png"  },
            { key: 4, url: "15.png"  },
            { key: 5, url: "img6.png"  },
            { key: 6, url: "img7.png"  },
            { key: 7, url: "img8.png"  },
            { key: 8, url: "img9.png"  },
            { key: 9, url: "img10.png"  },
            { key: 10, url: "img11.png"  },
            { key: 11, url: "img12.png"  },
            { key: 12, url: "img13.png"  },
            { key: 13, url: "img14.png"  },
            { key: 14, url: "img15.png"  },
            { key: 15, url: "img16.png"  },
            { key: 16, url: "img17.png"  },
            { key: 17, url: "img18.png"  },
            { key: 18, url: "img19.png"  },
            { key: 19, url: "img20.png"  },
            { key: 20, url: "img21.png"  },
            { key: 21, url: "img22.png"  },
            { key: 22, url: "img23.png"  },
            { key: 22, url: "img24.png"  },
            { key: 23, url: "img25.png"  },
            { key: 24, url: "img26.png"  },
            { key: 25, url: "img27.png"  },
            { key: 26, url: "img28.png"  },
            { key: 27, url: "img29.png"  },
            { key: 28, url: "img30.png"  },
            { key: 29, url: "img31.png"  },
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