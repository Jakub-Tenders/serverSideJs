import mongoose from "mongoose";

const BDESchema = new mongoose.Schema(
    {
    name: {
        type: String,
        required: true,
        unique: true,
    },
    category: {
        type: String,
        required: true,
    },
    president: {
        type: String,
        required: true,
    },
    members: {
        type: Number,
        required: true,
    },
    },
    {
    timestamps: true,
    }
);

export default mongoose.model("BDE", BDESchema, "bdes");