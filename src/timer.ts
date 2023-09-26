import { DEFAULT_TIMER_MAX_TIME } from './constants';

export class Timer {
	private _currentTime = 0;

	constructor(private _maxTime = DEFAULT_TIMER_MAX_TIME) {}

	hasTimeRemaining() {
		return this._currentTime < this._maxTime;
	}

	tick(delta = 1) {
		this._currentTime += delta;
	}

	resetTime() {
		this._currentTime = 0;
	}

	get currentTime() {
		return this._currentTime;
	}

	get maxTime() {
		return this._maxTime;
	}
}
