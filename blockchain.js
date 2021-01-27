const sha256 = require('js-sha256');

const blockchain = [];

class Transcation {
    constructor(from, to, amount) {

        // transaction details
        this.from = from;
        this.to = to;
        this.amount = amount;

        // current time at transaction processing
        // NOTE: we might wanna move this to the front end
        this.time = new Date().getTime();

        // update hash to ensure continuity of blockchain
        const stringToHash = this.time + this.from + this.amount + this.to;
        if (blockchain.length > 0) {
            const prevHash = blockchain[blockchain.length - 1].hash;
            this.hash = sha256.hmac(prevHash, stringToHash);
        } else {
            this.hash = sha256.hmac('Hello World!', stringToHash);
        }
    }
}

blockchain.push(new Transcation('santa', 'me', 800))
blockchain.push(new Transcation('mom', 'me', 100))
blockchain.push(new Transcation('DJ', 'me', 420))
blockchain.push(new Transcation('me', 'amazon', 1000))

console.log(blockchain)
