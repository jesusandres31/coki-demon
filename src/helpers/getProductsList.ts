import { productSvcs } from '../services';
import path from 'path';
import fs from 'fs';
var pdf = require('pdf-creator-node');

// Read HTML Template
const TEMPLATE_PATH = path.join(__dirname, '../../../src/static/products.html');
var html = fs.readFileSync(TEMPLATE_PATH, 'utf8');

var options = {
  format: 'A4',
  orientation: 'portrait',
  border: '10mm',
  footer: {
    height: '28mm',
    contents: {
      first: 'Cover page',
      2: 'Second page', // Any page number is working. 1-based index
      default:
        '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
      last: 'Last Page',
    },
  },
};

export const getProductsList = async () => {
  try {
    const products = await productSvcs.getProducts();
    const document = {
      html: html,
      data: {
        products: products,
      },
      path: `${path.join(__dirname, '../../../static/products.pdf')}`,
      type: '',
    };

    const res = await pdf.create(document, options);
    return res;
  } catch (e) {
    console.log(e);
  }
};
