const fs = require('fs');
const pdf = require('pdf-parse');

async function main() {
  const items = fs.readdirSync('./input')
  for (const item of items) {
    if (item.endsWith('.pdf')) {
      const dataBuffer = fs.readFileSync(`./input/${item}`)
      const data = await pdf(dataBuffer)
      const name = data.text.split('\n')[3].split(':')[1]
      fs.writeFileSync(`./output/${name}.pdf`, dataBuffer)
      console.log(name)
    }
  }
}

main()
