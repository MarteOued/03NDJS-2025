const users = [];
let idCounter = 1;

const isEmailTaken = (email) => users.some(user => user.email === email);

module.exports = {
    createUser: (userData) => {
        if (isEmailTaken(userData.email)) throw new Error('Cette adresse email est déjà utilisée');
        const user = { id: idCounter++, ...userData, isAdmin: false };
        users.push(user);
        return user;
    },

    findUserByEmail: (email) => users.find(u => u.email === email),
    findUserById: (id) => users.find(u => u.id === id),
    getAllUsers: () => users.map(u => ({ id: u.id, email: u.email, isAdmin: u.isAdmin })),
    deleteUser: (id) => {
        const index = users.findIndex(u => u.id === id);
        return index !== -1 ? users.splice(index, 1)[0] : null;
    },
    makeAdmin: (id) => {
        const user = users.find(u => u.id === id);
        if (user) user.isAdmin = true;
        return user;
    }
};

