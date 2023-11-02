import { _decorator, Component, Node, tween, Tween } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Game')
export class Game extends Component {
    private btnStart: Node = null;
    private biao1: Node = null;
    private isClick: boolean = false;

    protected onLoad(): void {
        this.btnStart = this.node.getChildByPath("pan/biao");
        this.biao1 = this.node.getChildByPath("pan/biao/biao1");
        this.biao1.active = false;
        this.isClick = false;
        this.btnStart.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    private onTouchEnd(): void {//70- -40
        if (this.isClick) return;
        this.isClick = true;
        this.biao1.active = true;
        this.btnStart.angle = 0;
        let angle = Math.random() * 110 - 40;
        Tween.stopAllByTarget(this.btnStart);
        tween()
            .target(this.btnStart)
            .by(3, { angle: 5400 }, { easing: "sineIn" })
            .by(2, { angle: angle + 3600 }, { easing: "sineOut" })
            .start()

    }
    start() {

    }

    update(deltaTime: number) {

    }
}

