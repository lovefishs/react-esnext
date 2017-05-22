const fs = require('fs')

exports.readFile = async (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        console.error(err)
        reject(err)
      }

      resolve(data)
    })
  })
}

exports.writeFile = async (fileName, data) => {
  return new Promise ((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error(err);
        reject(err)
      }

      resolve()
    })
  })
}
