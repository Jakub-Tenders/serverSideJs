import {
    getAllBDEs,
    getBDEById,
    createBDE,
    updateBDE,
    deleteBDE,
} from "../services/bdeServices.js";

export const getBDEsController = async (req, res) => {
    try {
    const bdes = await getAllBDEs()
    const toBDEDTO = (bde) => ({
        id: bde._id,
        name: bde.name,
        category: bde.category,
        president: bde.president,
        members: bde.members,
    })
    res.status(200).json(bdes.map(toBDEDTO))
    } catch (error) {
    res.status(404).json({ message: error.message })
    }
};

export const getBDEByIdController = async (req, res) => {
    const id = req.params.id
    try {
    const bde = await getBDEById(id)
    if (!bde) return res.status(404).json({ message: "BDE does not exist" })
    res.status(200).json(bde)
    } catch (error) {
    res.status(404).json({ message: "BDE does not exist" })
    }
};

export const createBDEController = async (req, res) => {
    try {
    const { name, category, president, members } = req.body
    const newBDE = { name, category, president, members }
    const bde = await createBDE(newBDE)
    res.status(201).json(bde)
    } catch (error) {
    res.status(500).json({ error: error.message })
    }
};

export const updateBDEController = async (req, res) => {
    try {
    const updated = await updateBDE(req.params.id, req.body)
    res.status(200).json(updated)
    } catch (error) {
    res.status(500).json({ message: error.message })
    }
};

export const deleteBDEController = async (req, res) => {
    try {
    await deleteBDE(req.params.id)
    res.status(200).json({ message: "BDE deleted successfully" })
    } catch (error) {
    res.status(500).json({ message: error.message })
    }
};