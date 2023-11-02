"use strict";
const user = { id: 123, name: 'devam', email: 'devam@gmail.com' };
const account = { acc_id: 10718, acc_type: 'saving', acc_balance: 200 };
const combineUserandAccount = (user, account) => {
    return { ...user, ...account };
};
const displayAccDetails = combineUserandAccount(user, account);
console.log(displayAccDetails);
//# sourceMappingURL=Union&IntersectionAsignment.js.map