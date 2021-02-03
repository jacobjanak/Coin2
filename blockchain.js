const sha256 = require('js-sha256');

// const blockchain = [];

class Transcation {
    constructor(blockchain, from, to, amount) {

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
            // this.hash = sha256.hmac(prevHash, stringToHash);
            this.hash = sha256.hmac("", prevHash);
        } else {
            this.hash = sha256.hmac('Hello World!', stringToHash);
            // this.hash = sha256.hmac("", "Hello World!");
        }

        // get 5 more hashes for a total of 6
        let newHash = this.hash;
        this.hash += sha256.hmac(this.hash, this.from);
        this.hash += sha256.hmac(this.hash, this.to);
        this.hash += sha256.hmac(this.hash, String(this.amount));
        this.hash += sha256.hmac(this.hash, String(this.time));
        this.hash += sha256.hmac(this.hash, "temp");

        // create random picture
        this.picHexCodes = [];
        for (let i = 0; i < 8; i++) {
            const row = [];
            for (let j = 0; j < 8; j++) {
                const startIndex = 6 * (i * 8 + j);
                row.push(this.hash.substring(startIndex, startIndex + 6))
            }
            this.picHexCodes.push(row)
        }

        // console.log(this.picHexCodes)
    }
}

module.exports = Transcation;
