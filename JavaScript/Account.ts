namespace Banking {
    export class Account {
        private accountType: number;
        private accountNumber: number;
        private holderName: string;
        private balance: number;
        constructor(t: number, an: number, hn: string, bal: number) {
            this.accountType = t;
            this.accountNumber = an;
            this.holderName = hn;
            this.balance = bal;
        }

        deposit(amount: number): boolean {
            let success: boolean = false;

            //check Account type
            switch (this.accountType) {
                case 1://Savings account
                case 2://Current account
                    this.balance += amount;
                    success = true;
                    break;

                case 3://Fixed deposit
                    //has no deposit 
                    success = false
            }
            return success;
        }

        withdraw(amount:number):boolean
        {
            let success: boolean=false;
            //check Account Type
            switch(this.accountType)
            {
                case 1://savings Account
                    //check for minimum balance
                    if(this.balance-amount<500)
                    {
                        success =false;
                    }
                    else
                    {
                        this.balance=this.balance-amount
                        success=true;
                    }
                return success;
            }
            return;
        }
    }
}