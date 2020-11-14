const JUDGEMENT_GATE = 400;

/**
 * 
 * @param {*} atk 力量係數 
 * @param {*} dex 敏捷係數
 * @param {*} def 防禦系數
 * @param {*} luck 幸運系數
 * @param {*} int 智力係數
 * @param {*} str 體力係數
 * @param {*} be 戰鬥經驗係數
 */
function getHurt(atk, dex, def, luck, int, str, be) {

}

/**
 * 蠻力打擊
 * @param {number} atk 力量係數
 */
function atkSkillHurt(atk) {
    return getHurt(atk, 0, 0, 0, 0, 0, 0);
}

/**
 * 刺探性攻擊 
 * @param {*} dex 敏捷係數
 * @param {*} int 智力係數
 */
function atkSkillHurt(dex, int) {
    return getHurt(0, dex, 0, 0, int, 0, 0);
}

/**
 * 胡亂斬擊
 * @param {Number} atk 力量係數
 * @param {Number} dex 敏捷係數
 */
function atkSkillHurt(atk, dex) {
    return getHurt(atk, dex, 0, 0, 0, 0, 0);
}



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
 * 以上是一般攻擊成功規則
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