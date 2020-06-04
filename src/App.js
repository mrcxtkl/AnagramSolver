const { WordlistUtil } = require('./utils')

const express = require('express')
const App = express()

App.get('/solve/:locale/:word', async (req, res) => {
    try {
        const { locale, word } = req.params

        const wordlist = new WordlistUtil({ locale })
        const match = await wordlist.solveAnagram(word)

        res.status(200).json({
            ok: true,
            queryOf: decodeURI(word),
            orderedString: wordlist.normalizeString(word),
            matched: match.length,
            match
        })
    } catch (e) {
        const { message } = e
        const error = message === 'NO_RESULT' ? 'nenhum resultado obtido' : 'um erro ocorreu, cheque os parametros fornecidos (locale: pt-BR ou en-US)'
        res.json({ ok: false, error })
    }
})

App.listen(3000, () => console.log('Aplicação respondendo à porta 3000'))