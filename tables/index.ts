import type { TableJson } from '../src/lib/table/table';
import Table from '../src/lib/table/table';
import table01 from './table_01.json';
import table02 from './table_02.json';
import table03 from './table_03.json';

const tables: TableJson[] = [table01, table02, table03];

/** Array of all available instances of `Table` class */
export default tables.map(x => new Table(x));
