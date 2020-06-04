const wordlistOrder = require('wordlist-to-json')
const latinize = require('latinize')

module.exports = class WordList {
    constructor (opts = {}) {
        this.wordlistPath = `src/lists/wordlist_${opts.locale.toLowerCase()}.txt`
    }

    get _wordlist () {
        return wordlistOrder(this.wordlistPath)
    }

    normalizeString (word) {
        return latinize(decodeURI(word)).split('').sort().join('')
    }

    async solveAnagram (test) {
        const wordlist = await this._wordlist
        if (wordlist === null) throw new Error('INVALID_LOCALE')

        const result = wordlist.filter(w => this.normalizeString(w) === this.normalizeString(test))
        if (result.length === 0) throw new Error('NO_RESULT')
        
        else return result
    }
}