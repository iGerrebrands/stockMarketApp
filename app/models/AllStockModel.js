import getAllStockHTTP from './getAllStocksHTTP';

export default class AllStockModel {

    constructor() {
        this.stocks = [];
        getAllStockHTTP()
            .then((res) => {
                const data = JSON.parse(res);
                this.stocks = data;
            })
            .error((error) => {
                console.error(error);
            });
    }

    getStockById(id) {
        let stock = null;
        this.stocks.forEach((s) => {
            if(s.Id == id) {
                stock = s;
            }
        });
        return stock;
    }

}