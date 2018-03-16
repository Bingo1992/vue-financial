const Mock = require('mockjs')
 
 Mock.mock('/productList', (req, res) => {
    return {
    	'status': 1,
        'list': [{
        	'id': 1,
        	'name': '黄先生'
        }, {
        	'id': 2,
        	'name': 'wang先生'
        }]
    }
})