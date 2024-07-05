const express = require("express");
const {
    handleGetAllUsers,
    handleGetuserById,
    handlePatchUserById,
    handleDeleteUserById,
    handleCreateNewUser
} = require("../controllers/user");

const router = express.Router();

// if api/users is the call, then we should pass json
// if /users is the call, then we should pass html

//this is a good practice to create hybrid models, 
//supported by both phone and laptop
router
    .route("/")
    .get(handleGetAllUsers)
    .post(handleCreateNewUser);

router
    .route("/:id")
    .get(handleGetuserById)
    .patch(handlePatchUserById)
    .delete(handleDeleteUserById);

// router.get("/users", async (req, res) => {
//     const allDbUsers = await User.find({});
//     const html = `
//         <ul>
//             ${allDbUsers.map(user => `<li> ${user.first_name} - ${user.email} </li>`).join("")}
//         </ul>
//     `;
//     res.send(html);
// })

module.exports = router;