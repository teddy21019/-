let app = new Vue({
        el: "#app",
        data: {
            priceList: [20, 150, 200, 250, 300, 400, 500],
            itemStack: [],
            customerQauntity: 0
        },
        methods: {
            add(price) {
                this.itemStack.push(price);
            },
            clear() {
                this.itemStack = [];
                this.customerQauntity = 0;
            },
            back() {
                this.itemStack.pop();
            },
            quantityChange(q){
                let newNum = this.customerQauntity+parseInt(q);
                if(newNum>=0){
                    this.customerQauntity = newNum;
                }else{
                    return;
                }
            }
        },
        computed: {
            total() {
                if (this.itemStack.length != 0) {
                    return this.itemStack.reduce((a, c) => a + c);
                } else {
                    return 0;
                }
            },
            leastPrice() {
                return this.customerQauntity * 150;
            },
            notEnough(){
                return this.total<this.leastPrice;
            }
        }

    });