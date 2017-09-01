var store = {
    users: [
        { id: 0, firstname: "Elizabeth",    lastname: "Jennings", phone: "123-11-23", email: "elizabeth@mail.com"},
        { id: 1, firstname: "Stan", lastname: "Beeman",  phone: "413-44-11", email: "beeman@mail.com"},
        { id: 2, firstname: "Nina", lastname: "Krilova",  phone: "214-74-82", email: "nina@mail.com"},
        { id: 3, firstname: "Oleg", lastname: "Burov",  phone: "213-24-199", email: "oburov@mail.com"}
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
            user.id = store.getNextId()
            store.users.push(user)
        } else {
            // update user
            store.users[index] = user
        }
    },

    deleteUser: function(user) {
        var index = store.users.findIndex(el => el.id === user.id)
        store.users.splice(index, 1)
    },

    getNextId: function() {
        return Math.max(...store.users.map(el => el.id)) + 1
    }
}

export default store;