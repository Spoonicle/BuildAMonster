class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        this.rArmX = 400;
        this.rArmY = 400;
        this.lArmX = 200;
        this.lArmY = 400;
        this.rLegX = 350;
        this.rLegY = 480;
        this.lLegX = 250;
        this.lLegY = 480;
        this.eyeX = 302;
        this.eyeY = 300;
        this.mouthX = 300;
        this.mouthY = 340;
        this.rHornX = 350;
        this.rHornY = 270;
        this.lHornX = 250;
        this.lHornY = 270;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_darkC.png")
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        my.sprite.rightArm = this.add.sprite(this.rArmX, this.rArmY, "monsterParts", "arm_darkD.png")
        my.sprite.leftArm = this.add.sprite(this.lArmX, this.lArmY, "monsterParts", "arm_darkD.png")
        
        my.sprite.rightLeg = this.add.sprite(this.rLegX, this.rLegY, "monsterParts", "leg_darkD.png")
        my.sprite.leftLeg = this.add.sprite(this.lLegX, this.lLegY, "monsterParts", "leg_darkD.png")

        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_cute_light.png")
        
        my.sprite.smile = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthD.png")
        my.sprite.mouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthC.png")

        my.sprite.rHorn = this.add.sprite(this.rHornX, this.rHornY, "monsterParts", "detail_white_horn_small.png")
        my.sprite.lHorn = this.add.sprite(this.lHornX, this.lHornY, "monsterParts", "detail_white_horn_small.png")


        my.sprite.leftArm.flipX = true
        my.sprite.leftLeg.flipX = true;
        my.sprite.smile.flipY = true;
        my.sprite.mouth.flipY = true;
        my.sprite.lHorn.flipX = true;

        my.sprite.smile.visible = false;

        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.


        this.sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        

        this.sKey.on('down', (key, event) => {
            my.sprite.smile.visible = true;
            my.sprite.mouth.visible = false;
        });

        this.fKey.on('down', (key, event) => {
            my.sprite.smile.visible = false;
            my.sprite.mouth.visible = true;
        });
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if (this.aKey.isDown){  
            for (let sprite of Object.values(my.sprite)){
                sprite.x = sprite.x - 5;
            }
        }
    
        if (this.dKey.isDown){  
            for (let sprite of Object.values(my.sprite)){
                sprite.x = sprite.x +  5;
            }
        }
       
    }

}