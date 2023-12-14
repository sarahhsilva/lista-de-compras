const conn = require('../db/conn')

module.exports = class ProductController{
    static getAllProduct(request, response){
        return response.render('product/home');
    }

    static createProduct(request, response){
        try{
            if(!request.body.nome || !request.body.quantidade){
                return response.status(400).json({
                    message: 'por favor, preencha todos os campos',
                });
            }

            const {nome, quantidade} = request.body
            //dml -> manipulacao
            const sql = `INSERT INTO tb_lista (nome, quantidade)`
            VALUES ("${nome}", "${quantidade}");

            conn.query(sql, (err)=>{
                if(err){
                    console.log(err)
                }
                return response.redirect('/product')
            })
        }catch(error) {
            console.error(error)
;        }
        return response.send('oi');
    }
};