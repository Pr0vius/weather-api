const CityRepository = require('../repository/city.repository');
const repository = new CityRepository();

const findCities = async (city) => {
    const cities = await repository.findCities(city);
    return cities.features.map(e => {
        return {
            id: e.id,
            name:e.place_name,
            lat:e.geometry.coordinates[1],
            lon:e.geometry.coordinates[0]
        }
    })
}

module.exports = {
    findCities
}