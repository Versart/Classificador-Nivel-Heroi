export default class ClassificadorHeroi {

    

    static calculaNivel(heroi) {
        if(heroi.xp <= 1000) {
            console.log(`O Herói de nome ${heroi.nome} está no nível Ferro`);
        }
        else if(heroi > 1000 && heroi <= 2000) {
            console.log(`O Herói de nome ${heroi.nome} está no nível Bronze`);
        }
        else if(heroi > 2000 && heroi <= 5000) {
            console.log(`O Herói de nome ${heroi.nome} está no nível Prata`);
        }
        else if(heroi > 5000 && heroi <= 7000) {
            console.log(`O Herói de nome ${heroi.nome} está no nível Ouro`);
        }
        else if(heroi > 7000 && heroi <= 8000) {
            console.log(`O Herói de nome ${heroi.nome} está no nível Platina`);
        }
        else if(heroi > 8000 && heroi <= 9000) {
            console.log(`O Herói de nome ${heroi.nome} está no nível Ascedente`);
        }
        else if(heroi > 9000 && heroi <= 10000) {
            console.log(`O Herói de nome ${heroi.nome} está no nível Imortal`);
        }
        else {
            console.log(`O Herói de nome ${heroi.nome} está no nível Radiante`);
        }
    }
}
