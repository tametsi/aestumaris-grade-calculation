export interface TableJson {
	/** Just the shown name. */
	name: string;
	/** The fields, growing from 0 points up to `basis` */
	fields: {
		/**
		 * The max value (inclusive).
		 *
		 * The min value is calculated with the last element´s max value + 1.
		 */
		to: number;

		/** The grade, belonging to this field. */
		grade: string;
	}[];
}

export default class Table {
	constructor(private _table: TableJson) {}

	get name() {
		return this._table.name;
	}
	/**
	 * The basis, this table works with. Is equal to
	 * the last field's `to` value
	 */
	get basis() {
		return this._table.fields[this._table.fields.length - 1]?.to ?? 0;
	}

	calculateGrade(pointsReached: number, pointsMaximum: number) {
		const k = pointsMaximum / this.basis;

		return this.getGrade(Math.round(pointsReached / k)) ?? '';
	}
	private getGrade(pointsReached: number) {
		let z = '';

		for (const x of this._table.fields) {
			z = x.grade;
			if (pointsReached <= x.to) break;
		}

		return z;
	}

	toJsonTable(): TableJson {
		return this._table;
	}
}
