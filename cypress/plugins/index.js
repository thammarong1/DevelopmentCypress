/// <reference types ="cypress" />

const readXlsx = require('./read_xlsx')

module.exports = (on, config) =>{
    on('task',{
        'readXlsx' : readXlsx.read
    })
}