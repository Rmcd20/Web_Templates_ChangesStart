class Users {
    constructor(nome,email,assunto, morada, menssagem,) {
        this._nome = nome;
        this._email = email;
        this._assunto = assunto;      
        this._menssagem = menssagem;
    }


        get nome(){
            return this._nome;
        }

        set nome(nome){
            this._nome = nome;
        }

        get email(){
            return this._email;
        }

        set email(email){
            this._email = email;
        }

        get assunto(){
            return this._assunto;
        }

        set assunto(assunto){
            this._assunto = assunto;
        }

        get menssagem(){
            return this._menssagem;
        }

        set menssagem(menssagem){
            this._menssagem = menssagem;
        }

}