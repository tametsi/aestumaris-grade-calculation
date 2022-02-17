import type Table from '../table/table';
import TableManager from '../table/tableManager';

export default class Aestumaris {
	private _pointsReached = 0;
	private _pointsMaximum = 15;
	private _tableManager = new TableManager();

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
	public get tableManager() {
		return this._tableManager;
	}
	public get table(): Table {
		return this._tableManager.getActiveTable();
	}

	calculateGrade(): string {
		return this.table.calculateGrade(
			this.pointsReached,
			this.pointsMaximum
		);
	}
}
