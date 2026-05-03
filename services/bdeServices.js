import BDE from "../models/bde.js"

export const getAllBDEs = async () => {
    return await BDE.find()
}

export const getBDEById = (id) => {
    return BDE.findById(id)
}

export const createBDE = async (newBDE) => {
    return await BDE.create(newBDE)
}

export const updateBDE = async (id, updatedBDE) => {
    return await BDE.findByIdAndUpdate(id, updatedBDE, { new: true })
}

export const deleteBDE = (id) => {
    return BDE.findByIdAndDelete(id)
}