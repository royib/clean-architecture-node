const InMemoryDatabaseServices = require('../frameworks/persistance/InMemory/InMemoryDatabaseServices');
const UniversityCrmServices = require('../frameworks/externalServices/UniversityCrmServices');

module.exports = (() => {
    return {
        DatabaseService: new InMemoryDatabaseServices(),
        CrmServices: new UniversityCrmServices()
    };
})();
