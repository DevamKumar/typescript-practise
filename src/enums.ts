enum Roles {
  user = "User",
  admin = "Admin",
}
type Logindetails = {
  name?: string;
  email: string;
  password: string;
  role: Roles;
};
const user1: Logindetails = {
  name: "Devam",
  email: "email2devam@gmail.com",
  password: "Devam@123",
  role: Roles.user,
};
const user2: Logindetails = {
  name: "Shaurya",
  email: "email2shauryag@gmail.com",
  password: "Shaurya@123",
  role: Roles.admin,
};

const isAdmin = (user:Logindetails) => {
    const {name,role} = user;
    
    return role === Roles.admin ? `${name} is allowed to edit the website`: `${name} is not allowed to edit the website`

}
console.log(isAdmin(user1));
console.log(isAdmin(user2));