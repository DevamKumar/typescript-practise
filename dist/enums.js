"use strict";
var Roles;
(function (Roles) {
    Roles["user"] = "User";
    Roles["admin"] = "Admin";
})(Roles || (Roles = {}));
const user1 = {
    name: "Devam",
    email: "email2devam@gmail.com",
    password: "Devam@123",
    role: Roles.user,
};
const user2 = {
    name: "Shaurya",
    email: "email2shauryag@gmail.com",
    password: "Shaurya@123",
    role: Roles.admin,
};
const isAdmin = (user) => {
    const { name, role } = user;
    return role === Roles.admin ? `${name} is allowed to edit the website` : `${name} is not allowed to edit the website`;
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
//# sourceMappingURL=enums.js.map