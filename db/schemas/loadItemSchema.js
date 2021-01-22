import mongoose from "mongoose";
import { LOAD_ITEM_SCHEMA_NAME } from "../../src/utils/constants/mongooseConstants";

const schemaName = LOAD_ITEM_SCHEMA_NAME;

const loadItemSchema = new mongoose.Schema(
  {
    seller: { type: String, required: true },
    itemId: { type: String, required: true },
    sellerPostalCode: { type: String, required: false },
    sellerCity: { type: String, required: false },
    itemUrl: { type: String, required: false },
    itemTitle: { type: String, required: false },
    itemCategory: { type: String, required: false },
    itemHitCount: { type: Number, required: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models[schemaName] ||
  mongoose.model(schemaName, loadItemSchema);
