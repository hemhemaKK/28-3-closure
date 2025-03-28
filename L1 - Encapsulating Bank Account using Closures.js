function createBankAccount(amount){
    return {
        deposit: function(n){
            amount = amount + n
            return amount
        },
        withdraw: function(n){
            amount = amount - n
            return amount
        },
        getBalance: function(){
            return amount
        },
        
    }
}
const account = createBankAccount(100);

console.log(account.deposit(50)); // Output: 150

console.log(account.withdraw(30)); // Output: 120

console.log(account.getBalance()); // Output: 120
