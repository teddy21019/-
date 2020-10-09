let app = new Vue({
    el: "#app",
    data: {
        priceList: [20, 150, 200, 250, 300, 400, 500],
        itemStack: [],
        customerQauntity: 0,
    },
    methods: {
        add(price) {
            this.itemStack.push(price);
        },
        clear() {
            this.itemStack = [];
            this.indexOfRice = null;
            this.customerQauntity = 0;
        },
        back() {
            this.itemStack.pop();
        },
        quantityChange(q) {
            let newNum = this.customerQauntity + parseInt(q);
            if (newNum >= 0) {
                this.customerQauntity = newNum;
            } else {
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
        notEnough() {
            return this.total < this.leastPrice;
        },
        itemStackToRender(){
            //itemStack records the history of input
            //but the one to render should gather the prices of rices

            let priceOfRice = this.priceList[0];

            let [...stack] = this.itemStack; //copy
            let {reducedStack} = stack.reduce((state, item)=>{

                let {...newState} = state;
                if(item != priceOfRice){
                    //not rice, then push to reduced Stack
                    newState.reducedStack.push(item);
                }else{
                    //is rice, first check if 20 already exist
                    if(state.indexOfRice == null){
                        newState.indexOfRice = state.reducedStack.length;
                        newState.reducedStack.push(priceOfRice);
                    }else{
                        //is rice, and showed before
                        newState.reducedStack[state.indexOfRice]+=20;
                    }
                }

                return newState;
            },{
                reducedStack:[],
                indexOfRice:null,

            })
            return reducedStack;
        }
    }

});