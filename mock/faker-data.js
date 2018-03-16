module.exports = function () {
    var faker = require("faker");
    faker.locale = "zh_CN";
    var _ = require("lodash");
    return {
        proList: _.times(3, function (n) {
            return {
                id: n,
                name: faker.name.findName(),
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
        addAddress:  _.times(1, function (n) {
            return {
                id: faker.random.uuid(),
                city: faker.address.city(),
                county: faker.address.county()
            }
        })
   
    }
}
