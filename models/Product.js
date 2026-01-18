import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },

    name: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    category: {
      type: String,
      default: '',
    },

    description: {
      type: String,
      default: '',
    },

    images: {
      type: [String],
      default: [],
    },

    colors: {
      type: [String],
      default: [],
    },

    sizes: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

// למנוע רישום כפול ב-Next (Hot Reload)
export default mongoose.models.Product ||
  mongoose.model('Product', ProductSchema);