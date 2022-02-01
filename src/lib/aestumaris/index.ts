export default class Aestumaris {
	private _pointsReached = 0;
	private _pointsMaximum = 15;

	public get pointsReached() {
		return this._pointsReached;
	}
	public set pointsReached(value) {
		this._pointsReached = value;
	}
	public get pointsMaximum() {
		return this._pointsMaximum;
	}
	public set pointsMaximum(value) {
		this._pointsMaximum = value;
	}

	/** @todo TODO logic */
	calculateGrade(): number {
		return 0;
	}
}
