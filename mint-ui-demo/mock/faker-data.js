module.exports = function () {
  var faker = require("faker");
  faker.locale = "zh_CN";
  var _ = require("lodash");
  return {
    people: _.times(10, function (n) {
      return {
        id: n,
        name: faker.name.findName(),
        randomEmail: faker.internet.email(),
        avatar: faker.internet.avatar()
      }
    }),
    address: _.times(100, function (n) {
      return {
        id: faker.random.uuid(),
        city: faker.address.city(),
        county: faker.address.county()
      }
    }),
    customers: _.times(100, function (n) {
      var customers = []

      for (var id = 0; id < 50; id++) {
        var firstName = faker.name.firstName()
        var lastName = faker.name.firstName()
        var phoneNumber = faker.phone.phoneNumberFormat()

        customers.push({
          "id": id,
          "first_name": firstName,
          "last_name": lastName,
          "phone": phoneNumber
        })
      }

      return customers
    })
  }
}
