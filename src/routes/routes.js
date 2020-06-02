import { addnewProduct } from "../controllers/controllers";

function routes(app) {
  app.route('/products')
    .post(addnewProduct);
}

export default routes;
