/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;

        // Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');

        // Checkbox element in GUI for Sphere Displaying
        this.gui.add(this.scene, 'displaySphere').name('Display Sphere');

        // Checkbox element in GUI for Cylinder Displaying
        this.gui.add(this.scene, 'displayCylinder').name('Display Cylinder');

        this.gui.add(this.scene, 'displayCubeMap').name('Display Cube Map');

        // Slider element in GUI for number of sides of cylinder
        this.gui.add(this.scene, 'numberOfSides', 4, 12, 1).name('Number of sides').onChange(this.scene.updateNumberSides.bind(this.scene));

        // Checkox element in GUI to toggle normals' display
        this.gui.add(this.scene, 'displayNormals').name("Display normals");

        // Dropdown for textures
        // this.gui.add(this.scene, 'selectedTexture', this.scene.textureIds).name('Selected Texture').onChange(this.scene.updateAppliedTexture.bind(this.scene));

        // Slider element in GUI for the vehicle's scaleFactor
        this.gui.add(this.scene, 'scaleFactor', 0.5, 3).name('Scale Factor');
        
        //Dropdown for textures
        this.gui.add(this.scene, 'selectedTexture', this.scene.textureIds).name('Selected Texture').onChange(this.scene.updateAppliedTexture.bind(this.scene));

        this.initKeys();
        
        return true;
    }

    initKeys() {
        // create reference from the scene to the GUI
        this.scene.gui=this;

        // disable the processKeyboard function
        this.processKeyboard=function(){};

        // create a named array to store which keys are being pressed
        this.activeKeys={};
    };

    processKeyDown(event) {
        // called when a key is pressed down
        // mark it as active in the array
        this.activeKeys[event.code]=true;
    };

    processKeyUp(event) {
        // called when a key is released, mark it as inactive in the array
        this.activeKeys[event.code]=false;
    };

    isKeyPressed(keyCode) {
        // returns true if a key is marked as pressed, false otherwise
        return this.activeKeys[keyCode] || false;
    }
}