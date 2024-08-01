import { RestaurantProps } from "../components/restaurants"


class Restaurant {

    public async findAll() : Promise<RestaurantProps[] | []> {
        try {
            const response = await fetch('http://192.168.1.2:3000/restaurants')
            const data = await response.json()
            return data
        } catch (error) {
            return []
        }
    }
} 

export default new Restaurant()