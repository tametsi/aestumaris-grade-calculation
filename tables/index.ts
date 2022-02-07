import type { TableJson } from '../src/lib/aestumaris/table';
import Table from '../src/lib/aestumaris/table';
import table01 from './table_01.json';

const tables: TableJson[] = [table01];

/** Array of all available instances of `Table` class */
export default tables.map(x => new Table(x));
