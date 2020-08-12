cc.Class({
    extends: cc.Component,

    properties: {
        tileBody: cc.Sprite,
        tileText: cc.Sprite
    },

    init(tileSF, textSF, textTrans) { //{scale, skew, position}
        this.tileBody.spriteFrame = tileSF;
        this.tileText.spriteFrame = textSF;
        this.tileBody.node.scale = 720 / 1080;
        this.tileText.node.position = textTrans.position;
        this.tileText.node.scale = textTrans.scale // cc.pMult(textTrans.scale, (1080 / 720)) // cc.Vec2(textTrans.scale.x * (1080 / 720), textTrans.scale.y * (1080 / 720)) // cc.pMult(textTrans.scale, Math.pow((1080 / 720), 1)) // textTrans.scale * (1080 / 720);
        this.tileText.node.rotation = textTrans.rotation;
        this.tileText.node.skewX = textTrans.skew.x;
        this.tileText.node.skewY = textTrans.skew.y;
    }
});