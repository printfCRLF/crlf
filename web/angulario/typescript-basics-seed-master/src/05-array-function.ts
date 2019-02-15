const pizzas = [
  { name: 'Pepperoni', toppings: ['pepperoni'] },
  { name: 'Hawaii', toppings: ['pine apple'] }];

const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());

const pizza = {
  name: 'Blzaing Inferno',
  getName: function () {
    setTimeout(function () {
      console.log(this);
    }, 100);
  },

  getName2: function () {
    const self = this;
    setTimeout(function () {
      console.log(self);
    }, 100);
  },

  getName3: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 100);
  },

  getName4: () => pizza.name,

};