class Bank{
  constructor(name, openingamount, sex){
    this.name = name;
    this.amount = openingamount;
    this.balance = this.amount;
    this.sex = sex;
    this.message = ''
  }
  
  deposit(amount){
    this.balance += amount;
    this.message = `Your deposit of $${amount} was successful. Your balance is now $${this.balance}`
    Message.innerText = this.message
    console.log(this.message);
  }
  
  message(){
    return this.message;
  }
 
  balance(){
    return this.balance;
  }
  
  withdraw(amount){
    if(amount > this.balance){
      this.message = 'Insufficient Balance!'
      Message.innerText = this.message
    }
    else{
      this.balance -= amount;
      this.message = `Transaction Successful. Your new balance is $${this.balance}. Thanks for banking with us`;
      Message.innerText = this.message
    }
  }
  
}
const bank = new Bank('Jerry', 2000, 'Male');
const WithDrawAmount = document.getElementById('withdrawAmount');
const WithDrawButton = document.getElementById('withdraw');
const DepositAmount = document.getElementById('depositamount');
const DepositButton = document.getElementById('deposit');
const Balance = document.getElementById('balance');
const Message = document.getElementById('message');

const withdraw = () => {
  let amount = Number(WithDrawAmount.value);
  bank.withdraw(amount);
  Balance.innerText =  `$${bank.balance}`;
}

const deposit = () => {
  let amount = Number(DepositAmount.value);
  bank.deposit(amount);
  Balance.innerText =  `$${bank.balance}`;
}
Balance.innerText = `$${bank.balance}`
console.log(bank.message)