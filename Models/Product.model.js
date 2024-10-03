import mongoose from 'mongoose'

const Schema = mongoose.Schema

// Schema
const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
    default: false,
  },
  date: { type: Date, default: Date.now },
})

// Model
export const Product = mongoose.model('product', ProductSchema)
