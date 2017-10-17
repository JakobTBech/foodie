/*global Vue */
'use strict'

var vm = new Vue({
  el: '#app',
  computed: {
    sortedDishes: function() {
      return this.dishes.sort();
    }
  },
  methods:{
    sevenRandomDishes: sevenRandomDishes,
    refreshDish: refreshDish,
    deleteDish: deleteDish
  },
  data: {
    dishes: [
      'Frikadeller',
      'Fiskefrikadeller',
      'Stegt fisk',
      'Lasagne m oksekød',
      'Lakselasagne',
      'Pastagratin',
      'Spaghetti med kødsovs',
      'Laks og rejer i flødesovs',
      'Toast med skinke og ost',
      'Pølser og pølsebrød',
      'Flødekartofler',
      'Fadkoteletter & ris',
      'Risotto med kylling',
      'Koldskål',
      'Spaghetti carbonara',
      'Tortilla wraps med kylling',
      'Chili con carne',
      'Svensk pølseret',
      'Boller i karry',
      'Pasta penne med oksekød og fløde',
      'Kyllingefileter med ris og bearnaise',
      'Kyllingelår med ris og bearnaise',
      'Bøf stroganoff',
      'Kartoffel og porresuppe',
      'Kalkun og nudler',
      'Pølsemuffins',
      'Pølsehorn',
      'Minipizzaer',
      'Pizzastænger',
      'Kalkun og pasta i fløde'],
    weekdays: [
      {name: 'Mandag', dish: {name: ''}},
      {name: 'Tirsdag', dish: {name: ''}},
      {name: 'Onsdag', dish: {name: ''}},
      {name: 'Torsdag', dish: {name: ''}},
      {name: 'Fredag', dish: {name: ''}},
      {name: 'Lørdag', dish: {name: ''}},
      {name: 'Søndag', dish: {name: ''}},
    ]
  }
});

function refreshDish(index) {
  console.log("refreshDish called");
  var newDish = this.dishes[randomIntFromInterval(1,this.dishes.length-1)];
  console.log(newDish)
  this.weekdays[index].dish.name = newDish;
}

function deleteDish(index) {
  this.weekdays.splice(index, 1);
}

function sevenRandomDishes() {
  var randomDishes = {};
  var randomDishNumbers = [];
  var maxRowsNum = this.dishes.length;
  var i = 0;

  randomDishNumbers = getUniqueRandomNumbers(this.weekdays.length, maxRowsNum);

  for (var i = 0; i < randomDishNumbers.length; i++) {
    var dish = this.dishes[randomDishNumbers[i]];
    randomDishes[dish] = dish;
    this.weekdays[i].dish.name = dish;
  }

  console.log(this.weekdays);
}

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function getUniqueRandomNumbers(num, maxRowsNum) {
  var list = [];

  for (var i = 0; i < 1000; i++) {

    var randomInt = randomIntFromInterval(1, maxRowsNum)-1;

    if (list.indexOf(randomInt) > -1) {
      continue;
    }

    list.push(randomInt)
  }

  return list.slice(0, num);
}