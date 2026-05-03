import fs from 'fs'

export const validateBDE = (req, res, next) => {
    const { name, category, president, members } = req.body

    const reject = (message) => {
        if (req.file) fs.unlink(req.file.path, () => {})
        return res.status(400).json({ message })
    }

    if (!name) return reject("name needed")
    if (!category) return reject("category needed")
    if (!president) return reject("president needed")
    if (!members) return reject("members needed")

    if (members < 1) return reject("members must be at least 1")

    next();
}