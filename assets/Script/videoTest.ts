const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {
	@property(cc.Label)
	private symbolName: cc.Label = null;
	private _vido: cc.VideoPlayer;

	private _clips: cc.Asset[] = [];
	private _curIdx: number = 0;

	onLoad() {
		cc.resources.loadDir("video", cc.Asset, null, (err, clips) => {
			this._clips = clips;
		});
	}

	start() {
		this._vido = this.node.getComponentInChildren(cc.VideoPlayer);
	}

	onPlay() {
		this.symbolName.string = "Symbol: " + this._curIdx.toString();
		this._vido.clip = (this._clips[this._curIdx] as unknown) as string;
		this._vido.play();
		this._curIdx++;
		if (this._curIdx == this._clips.length) this._curIdx = 0;
	}

	onVideoPlayerEvent(sender, event) {
		if (event === cc.VideoPlayer.EventType.COMPLETED) {
			sender.play();
		}
	}
}
