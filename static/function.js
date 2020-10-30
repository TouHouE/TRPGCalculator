const JUDGEMENT_GATE = 400;

function attackSuccessful(atk, dex, def, luck, int, str, be) {
    let num1 = (attacker.get("int") + attacker.get("str")) / 2;
    let num2 = (dics * attacker.get("luck")) / 15;
    let num3 = (attacker.get("atk") * atk + attackerk.get("dex") * dex + attacker.get("def") * def + attacker.get("luck") * luck + attacker.get("int") * int + attacker.get("str") * str + attacker.get("be") * be) / 20;
    let judgementNum = num1 + num2 + num3;

    if(judgementNum > JUDGEMENT_GATE) {
        return true;
    }
    
}

/**
 * 以上全是一般攻擊傷害成功規則
 * 
 * 
 */

function isCriticalStrike() {

}


function avoidSuccessful() {
    
}


function eventJudgement() {
    
}

/**
 * 
 * @param {*} int 
 */
function intJudgement(int, dics) {
    let num1 = (attacker.get("int") + attacker.get("str")) / 2;
    let num2 = (dics * attacker.get("luck")) / 10;
    let num3 = (int * attacker.get("int")) / 100;
    let judgementNum = num1 + num2 + num3;

    if(judgementNum > JUDGEMENT_GATE) {
        return true;
    }
}