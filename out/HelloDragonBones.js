"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var HelloDragonBones = /** @class */ (function (_super) {
    __extends(HelloDragonBones, _super);
    function HelloDragonBones() {
        var _this = _super.call(this) || this;
        _this.tick = 0;
        _this.expand = true;
        _this._resources.push("resource/british/britishLoopParallax_ske.json", "resource/british/britishLoopParallax_tex.json", "resource/british/britishLoopParallax_tex.png");
        return _this;
    }
    HelloDragonBones.prototype._onStart = function () {
        var factory = dragonBones.PixiFactory.factory;
        factory.parseDragonBonesData(this._pixiResources["resource/british/britishLoopParallax_ske.json"].data);
        factory.parseTextureAtlasData(this._pixiResources["resource/british/britishLoopParallax_tex.json"].data, this._pixiResources["resource/british/britishLoopParallax_tex.png"].texture);
        this.armatureDisplay = factory.buildArmatureDisplay("Armature", "britishLoopParallax");
        this.armatureDisplay.animation.play("animtion0");
        this.addChild(this.armatureDisplay);
    };
    HelloDragonBones.prototype.circle = function (pageX, pageY) {
        var mouseX = pageX - 912;
        var mouseY = pageY - 550;
        var radius = 50;
        var r2 = radius * radius;
        var influenceRadius = r2 * 50;
        var x2r2 = ((mouseX * mouseX) + (mouseY * mouseY));
        var slowFactor = 0.7;
        var bone3 = this.armatureDisplay.armature.getBone("bone3");
        var bone4 = this.armatureDisplay.armature.getBone("bone4");
        if (x2r2 <= r2) {
            bone3.offset.x = mouseX * slowFactor;
            bone3.offset.y = mouseY * slowFactor;
            bone4.offset.x = mouseX * slowFactor;
            bone4.offset.y = mouseY * slowFactor;
        }
        else {
            var magV = Math.sqrt((mouseX * mouseX) + (mouseY * mouseY));
            var cX = radius * (mouseX / magV);
            var cY = radius * (mouseY / magV);
            bone3.offset.x = cX;
            bone3.offset.y = cY;
            bone4.offset.x = cX;
            bone4.offset.y = cY;
        }
    };
    HelloDragonBones.prototype.parallax = function (pageX, pageY) {
        var mouseX = pageX - 912;
        var mouseY = pageY - 550;
        var background = this.armatureDisplay.armature.getBone("parallaxbg");
        var twi = this.armatureDisplay.armature.getBone("parallaxtwi");
        var hose = this.armatureDisplay.armature.getBone("parallaxhose");
        var maid = this.armatureDisplay.armature.getBone("parallaxmaid");
        var chair = this.armatureDisplay.armature.getBone("parallaxchair");
        var bgRatio = 0.05;
        var twiRatio = 0.1;
        var hoseRatio = 0.2;
        var maidRatio = 0.3;
        var chairRatio = 0.5;
        background.offset.x = mouseX * bgRatio;
        background.offset.y = mouseY * bgRatio;
        twi.offset.x = mouseX * twiRatio;
        twi.offset.y = mouseY * twiRatio;
        hose.offset.x = mouseX * hoseRatio;
        hose.offset.y = mouseY * hoseRatio;
        maid.offset.x = mouseX * maidRatio;
        maid.offset.y = mouseY * maidRatio;
        chair.offset.x = mouseX * chairRatio;
        chair.offset.y = mouseY * chairRatio;
    };
    return HelloDragonBones;
}(BaseDemo));
