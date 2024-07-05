const User = require("../models/user");

async function handleGetAllUsers(req, res) {
    const allDbUsers = await User.find({});
    res.json(allDbUsers);
}

async function handleGetuserById(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "No user with this id found" });
    res.json(user);
}

async function handlePatchUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id, {lastName: "changed"});
    return res.status(201).json({ msg: "Success" });
}

async function handleDeleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id);
    return res.status(201).json({ msg: "Success" });
}

async function handleCreateNewUser(req, res) {
    const body = req.body;
        if (!body || !body.email || !body.first_name || !body.last_name || !body.gender || !body.job_title)
            return res.status(404).json({ error: "All fields are required" });
        const result= await User.create({
            first_name: body.first_name,
            last_name: body.last_name,
            email: body.email,
            gender: body.gender,
            job_title: body.job_title
        });

        console.log(result);
        return res.status(201).json({ msg: "Success" , id: result._id});
}

module.exports = {
    handleGetAllUsers,
    handleGetuserById,
    handlePatchUserById,
    handleDeleteUserById,
    handleCreateNewUser
};