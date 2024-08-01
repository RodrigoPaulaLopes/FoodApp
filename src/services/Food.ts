import { FoodProps } from "../components/Trendings"


class Food {

    public async findAll() : Promise<FoodProps[] | []> {
        try {
            const response = await fetch('http://192.168.1.2:3000/foods')
            const data = await response.json()
            return data
        } catch (error) {
            return []
        }
    }
} 

export default new Food()