const InMemoryDatabaseServices = require('../persistance/InMemory/InMemoryDatabaseServices');


module.exports = (() => {
    return {
        DatabaseService: new InMemoryDatabaseServices()
    };
})();
