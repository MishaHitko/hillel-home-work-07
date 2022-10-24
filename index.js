const store = {
	name: 'Apple',
	address: {
		country: 'Ukraine',
		city: 'Kyiv',
		street: 'Maidan Nezalezhnosti',
		houseNumber: 15,
	}
}
store.clients = {}
store.clients['Oleksandra Horbenko'] = {
	quantity: 5,
	bonuses: 50,
}
store.clients['Olena Demchyk'] = {
	quantity: 7,
	bonuses: 70,
}
store.clients['Oleksii Yelanskiy'] = {
	quantity: 3,
	bonuses: 30,
}
store.clients['Olha Nevzghodova'] = {
	quantity: 2,
	bonuses: 20,
}
store.clients['Viktoriia Barankova'] = {
	quantity: 5,
	bonuses: 50,
}
console.log(store);