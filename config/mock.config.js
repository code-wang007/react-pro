const fs = require('fs')
const path = require('path')

const response = (res, content, type = 'json') => {
  res.type(type)
  res.write(content)
  res.end()
}

const mock = (res, file) => {
  fs.readFile(file, 'utf8', (error, content) => {
    if (error) {
      response(res, error.message, 'html')
    }
    response(res, content)
  })
}

const mockMiddleWare = (config) => (req, res, next) => {
  const { projectDir, mockDir } = config

  const filePath = path.resolve(projectDir, `./${mockDir + req.path}.json`)
  console.log(filePath, mockDir)

  return fs.stat(filePath, error => {
    error ? next() : mock(res, filePath)
  })
}

module.exports = mockMiddleWare