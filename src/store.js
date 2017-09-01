var store = {
    users: [
        { id: 0, firstname: "Mark",    lastname: "Smith", phone: "123-11-23", email: "nilson@mail.com"},
        { id: 1, firstname: "Richard", lastname: "Rowe",  phone: "413-44-11", email: "richard@mail.com"}
    ],

    getUserById: function(id) {
        return store.users.filter(function (el) {
            return el.id == id;
        })[0] || {};
    },

    createOrUpdateUser: function(user) {
        var index = store.users.findIndex(el => el.id === user.id)
        if (index < 0) {
            // create user
            user.id = getNextId()
            users.push(user)
        } else {
            // update user
            store.users[index] = user
        }
    },

    getNextId: function() {
        return Math.max(...store.users.map(el => el.id)) + 1
    }
}

export default store;