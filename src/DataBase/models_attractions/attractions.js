import { Schema, model } from 'mongoose';

const AttractionSchema = new Schema({
    id_Attraction: {
        type: String,
        unique: true,
        require: true
    },
    name: {
        type: String,
        unique: true,
        require: true
    },
    capacity: {
        type: Number,
        require: true
    },
    faixa_etaria: {
        type: Number,
        require: true
    },
    inspection: {
        type: Boolean,
        require: true
    },
    date_hour_inspection: {
        type: Date,
        require: true
    },
    price_attraction_byPerson: Decimal,
    id_ingresso_person: boolean
}, {
    imagem: {
        type: string,
        require: false
    }
});

const AttractionsModel = model('Attraction', AttractionSchema);
export default AttractionsModel;
/*
Fiz pelo insomnia porem esta com erro devido ao arquivo autenticarController e o index.js do database
{
	id_attraction: '1',
	name: 'Barco Vicking',
	capacity: 50,
	faixa_etaria: 8,
	inspection: true,
	date_hour_inspection: 2020/08/03,
	price_attraction_byPerson: 10.00,
  id_ingresso_person: true
},
{
	id_attraction: '2',
	name: 'Carrinho de bate bate',
	capacity: 8,
	faixa_etaria: 8,
	inspection: true,
	date_hour_inspection: 2020/08/03,
	price_attraction_byPerson: 10.00,
  id_ingresso_person: true
},
{
	id_attraction: '3',
	name: 'Scar Coast',
	capacity: 3,
	faixa_etaria: 15,
	inspection: true,
	date_hour_inspection: 2020/08/03,
	price_attraction_byPerson: 10.00,
  id_ingresso_person: true
},
{
	id_attraction: '4',
	name: 'Labamba',
	capacity: 20,
	faixa_etaria: 8,
	inspection: true,
	date_hour_inspection: 2020/08/03,
	price_attraction_byPerson: 10.00,
  id_ingresso_person: true
},
{
	id_attraction: '5',
	name: 'Casa Maluca',
	capacity: 1,
	faixa_etaria: 8,
	inspection: true,
	date_hour_inspection: 2020/08/03,
	price_attraction_byPerson: 10.00,
  id_ingresso_person: true
}
 
*/