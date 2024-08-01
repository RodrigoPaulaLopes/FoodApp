import * as Location from 'expo-location';

class Geolocation {


    private async getLocation() {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            throw new Error("Permissão negada!");
        }

        let location = await Location.getCurrentPositionAsync({});

        if (location) {
            return { latitude: location.coords.latitude, longitude: location.coords.longitude };
        }
    };
    async getGeolocation() {
        const coords = await this.getLocation()

        const apiKey = process.env.API_KEY; 
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords?.latitude},${coords?.longitude}&key=${apiKey}`);
        const data = await response.json();

        if (data.status === 'OK') {
            const addressComponents = data.results[0].address_components;
            const stateComponent = addressComponents.find((component: any) => component.types.includes('administrative_area_level_1'));
            return stateComponent?.short_name
        } else {
            return 'Não foi possível obter o endereço.';
        }
    }
}

export default Geolocation