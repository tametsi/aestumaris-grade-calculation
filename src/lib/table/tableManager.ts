import type Table from './table';
import tables from '../../../tables';

export default class TableManager {
	private _activeTableIndex: number;
	private _tables: Table[];

	constructor() {
		this.loadTables(tables);
	}

	private loadTables(tables: Table[]) {
		this._tables = tables;
	}

	getActiveTable(): Table {
		return this._tables[this._activeTableIndex] ?? this._tables[0];
	}
	getTableList(): { name: string; index: number }[] {
		return this._tables.map((x, i) => {
			return { name: x.name, index: i };
		});
	}

	setActiveTable(index: number) {
		// validation
		if (this._tables[index]) this._activeTableIndex = index;
	}
}
