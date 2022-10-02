import ADODB from 'node-adodb';
import { DB_PATH } from '../constants';

const access = ADODB.open(
  `Provider=Microsoft.Jet.OLEDB.4.0;Data Source=${DB_PATH};`,
);

export default access;
