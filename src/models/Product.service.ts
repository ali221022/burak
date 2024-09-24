import Errors, { HttpCode, Message } from "../libs/utils/Errors";
import { Product, ProductInput } from "../libs/types/product";
import ProductModel from "../schema/Product.model";
import { shapeIntoMongooseObjectId } from "../libs/config";

class ProductService {
   private readonly productModel;

   constructor() {
    this.productModel = ProductModel;
   }

  /*** SPA */
 


  /** SSR */
 public async ceateNewProduct(Input: ProductInput): Promise<Product> {
   try {
      return await this.productModel.create(Input);
    } catch (err) {
      console.log("Error, model:createNewProduct:", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
   }

  public async updateChosenProduct( 
   id: string,
   input: ProductInput ): Promise<Product> {
    // string => object_id
    id = shapeIntoMongooseObjectId(id);
    const result = await this.productModel
    .findOneAndUpdate({ _id: id }, input, { new: true})
    .exec();
   if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);

   return result;
  } 
}


export default ProductService;
