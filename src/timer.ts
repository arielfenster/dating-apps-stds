export class Timer {
	private _currentTime = 0;

	constructor(private _maxTime: number) {}

	hasTimeRemaining() {
		return this._currentTime < this._maxTime;
	}

	tick(delta = 1) {
		this._currentTime += delta;
	}

	get currentTime() {
		return this._currentTime;
	}

	get maxTime() {
		return this._maxTime;
	}
}
