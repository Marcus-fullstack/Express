import { Schema, model } from 'mongoose';
/*const formato_Data = require('luxon');*/

const BrunchSchema = new Schema({
    id_Brunch: {
        type: String,
        unique: true,
        require: true,
    },
    nome: {
        type: String,
        unique: true,
        require: true,
    },
    kind: {
        type: String,
        require: true
    },
    capacity: {
        type: Number,
        require: true
    },

    inspection_local_likeAnvisa: {
        type: Boolean,
        require: true
    },
    date_hour_inspection: {
        type: Date,
        require: true
    },
    price_brunch_byPerson: {
        id_ingresso: boolean,
        type: Decimal,
        require: true
    }
});

const FoodModel = model('Brunch', BrunchSchema);
export default Brunch;

/*
O mesmo erro de atração
{
	id_attraction: '1',
	name: 'MC Donalds',
    kind: 'Fast Food Delivery',
	capacity: 20,
	inspection: true,
	date_hour_inspection: 2020/08/03,
	price_attraction_byPerson: 'varia com o pedido',
    id_ingresso_person: true
},
{
	id_attraction: '2',
	name: 'Hamburger King',
    kind: 'Fast Food Delivery',
	capacity: 18,
	inspection: true,
	date_hour_inspection: 2020/08/03,
	price_attraction_byPerson: 'varia com o pedido',
    id_ingresso_person: true
},
{
	id_attraction: '3',
	name: 'Carrinho da pipoca',
    kind: 'Fast Food Delivery',
	capacity: 3,
	inspection: true,
	date_hour_inspection: 2020/08/03,
	price_attraction_byPerson: 5.00,
    id_ingresso_person: true
},
{
	id_attraction: '4',
	name: 'Pastelaria Brasileira',
    kind: 'Fast Food Delivery',
	capacity: 20,
	inspection: true,
	date_hour_inspection: 2020/08/03,
	price_attraction_byPerson: 14.00,
    id_ingresso_person: true
},
{
	id_attraction: '5',
	name: 'Kebab Truck',
    kind: 'Fast Food Delivery',
	capacity: 4,
	inspection: true,
	date_hour_inspection: 2020/08/03,
	price_attraction_byPerson: 14.00,
    id_ingresso_person: true
}
*/