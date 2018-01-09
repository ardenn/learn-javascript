var user = {
    firstName: "Rodgers",
    lastName: "Ouma",
    getFullName: function() {
        return this.firstName+" "+this.lastName
    }
}
console.log(user.firstName)
console.log(user.getFullName())
