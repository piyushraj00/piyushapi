const path = require('path')
const fs = require('fs').promises
const fileJson = path.join(__dirname, '..', '..', '..', 'data', 'CyberSpace.json')

module.exports = async (_, res) => {
    const data = await fs.readFile(fileJson, 'utf-8')
    const wallpaper = JSON.parse(data)
    const hasil = {"results" : wallpaper}

    res.status(200).send(hasil)
}
