const Bill = document.getElementById('bill');
const Tip = document.getElementById('tip');
const People = document.getElementById('people');
const Total = document.getElementById('total');


const cal = () => {
  let bill = Number(Bill.value);
  let tip = (Number(Tip.value)/100) * bill;
  let people = Number(People.value);
  let totalPerPerson = (bill + tip)/people;
  Total.value = totalPerPerson;
}