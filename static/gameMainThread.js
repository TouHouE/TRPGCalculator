function main() {
    cleanContainer();
    updateValueForm();
    decisionAttacker();



    let funcDetail = getFunction();
    checkFunctionType(funcDetail);
}



function getFunction() {

    var funcSeriousAndSkill = {};                

    if(atkSkill.options[atkSkill.selectedIndex].value != "not") {

        funcSeriousAndSkill["skillType"] = "atkSkill";
        funcSeriousAndSkill["skill"] = atkSkill.options[atkSkill.selectedIndex].value;

        return funcSeriousAndSkill;
    } else if(defSkill.options[defSkill.selectedIndex].value != "not") {
        
        funcSeriousAndSkill["skillType"] = "atkSkill";
        funcSeriousAndSkill["skill"] = atkSkill.options[atkSkill.selectedIndex].value;

        return funcSeriousAndSkill;
    } else if(dexSkill.options[dexSkill.selectedIndex].value != "not") {

        funcSeriousAndSkill["skillType"] = "atkSkill";
        funcSeriousAndSkill["skill"] = atkSkill.options[atkSkill.selectedIndex].value;

        return funcSeriousAndSkill;
    } else if(gpSkill.options[gpSkill.selectedIndex].value != "not") {

        funcSeriousAndSkill["skillType"] = "atkSkill";
        funcSeriousAndSkill["skill"] = atkSkill.options[atkSkill.selectedIndex].value;

        return funcSeriousAndSkill;
    } else if(buffSkill.options[buffSkill.selectedIndex].value != "not") {

        funcSeriousAndSkill["skillType"] = "atkSkill";
        funcSeriousAndSkill["skill"] = atkSkill.options[atkSkill.selectedIndex].value;

        return funcSeriousAndSkill;
    } else if(debuffSkill.options[debuffSkill.selectedIndex].value != "not") {

        funcSeriousAndSkill["skillType"] = "atkSkill";
        funcSeriousAndSkill["skill"] = atkSkill.options[atkSkill.selectedIndex].value;

        return funcSeriousAndSkill;
    } else if(ruleSkill.options[ruleSkill.selectedIndex].value != "not") {

        funcSeriousAndSkill["skillType"] = "atkSkill";
        funcSeriousAndSkill["skill"] = atkSkill.options[atkSkill.selectedIndex].value;

        return funcSeriousAndSkill;
    } else {
        
        funcSeriousAndSkill["skillType"] = "inputError";
        funcSeriousAndSkill["skill"] = "Warning!!!!";

        return funcSeriousAndSkill;
    }
}

/**
 * 
 * @param {Object} functionType - The data which is GM choosen.
 * @param {string} functionType[skillType]  -   The skill serious which is GM choosen,
 * @param {string} functionType[skill]  -   The skill name which GM choosen.
 */
function checkFunctionType(functionType) {
    

    switch(functionType["skillType"]) {
        case "atkSkill":
            break;
        case "defSkill":
            break;
        case "dexSkill":
            break;
        case "itemSkill":
            break;
        case "buffSkill":
            break;
        case "debuffSkill":
            break;
        case "gpSkill":
            break;
        case "ruleSkill":
            break;
        
    }

    if(functionType == "atkFunc") {
        attackCalculator();
    } else if(functionType == "judgeFunc") {

    }
}

function attackCalculator() {
    //爆擊效果（ atk * LUCK / 100 + ATK - 敵人DEF）
    console.log("Attacker.get(atk)：" + attacker.get("atk"));
    console.log("Defenser.get(def)：" + defenser.get("def"));


    let realHurt = (attacker.get("atk") * (attacker.get("luck") / 100)) + (attacker.get("atk") - defenser.get("def"));
    console.log(realHurt);
    ansContainer.appendChild(document.createTextNode(realHurt));
}

function judgeCalculator() {

}

/**
 * 
 * 決定進攻方
 */             
function decisionAttacker() {
    attacker = new Character();
    defenser = new Character();
    let i = 0;

    for(let temp of playerRadio) {
        console.log(temp.value + "：" + temp.checked);
        console.log(i++);

        if(temp.checked) {
            attackerValue = new FormData(document.querySelector("#" + temp.value + "Value"));
            
            for(let stat of attackerValue) {
                attacker.set(stat);
            }

        } else {
            defenserValue = new FormData(document.querySelector("#" + temp.value + "Value"));

            for(let stat of defenserValue) {
                defenser.set(stat);
            }
        }
    }
}


/**
 * 更新所有玩家屬性
 */

function updateValueForm() {
    player1Value = new FormData(document.querySelector("#player1Value"));
    player2Value = new FormData(document.querySelector("#player2Value"));
    
}

function cleanContainer() {
    ansContainer.innerText = "";
}