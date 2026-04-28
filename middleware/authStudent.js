import fs from 'fs'

export const validate = (req, res, next) => {
    const {name, email, password, gpa, major} = req.body;

    const reject = (message) => {
        if (req.file) fs.unlink(req.file.path, () => {});
        return res.status(400).json({message});
    };

    if (!name) return reject("name needed")
    if (!email) return reject("email needed")
    if (!password) return reject("password needed")
    if (!gpa) return reject("gpa needed")
    if (!major) return reject("major needed")

    if (password.length < 8) return reject("Password must be at least 8 characters long")
    if (gpa<0 || gpa > 4 ) return reject("Not a valid gpa(must be between 0 and 4)")

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return reject("Not a valid email");

    next();

}