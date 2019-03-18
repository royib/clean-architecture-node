const InMemoryDatabaseServices = require('../frameworks/persistance/InMemory/InMemoryDatabaseServices');

module.exports = (() => {
    return {
        DatabaseService: new InMemoryDatabaseServices()
    };
})();
