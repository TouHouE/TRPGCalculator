class Character {
    
    
/*

    constructor(atk, dex, def, luck, int, str, be) {
        this.atk = atk.value;
        this.dex = dex.value;
        this.def = def.value;
        this.luck = luck.value;
        this.int = int.value;
        this.str = str.value;
        this.be = be.value;
    }
*/
    get(detail) {
        
        if(detail == "atk") {
            return this.atk;
        } else if(detail == "dex") {
            return this.dex;
        } else if(detail == "def") {
            return this.def;
        } else if(detail == "luck") {
            return this.luck;
        } else if(detail == "int") {
            return this.int;
        } else if(detail == "str") {
            return this.str;
        } else if(detail == "be") {
            return this.be;
        }
    }

    set(detail) {
        
        if(detail[0] == "atk") {
            this.atk = detail[1];
        } else if(detail[0] == "dex") {
            this.dex = detail[1];
        } else if(detail[0] == "def") {
            this.def = detail[1];
        } else if(detail[0] == "luck") {
            this.luck = detail[1];
        } else if(detail[0] == "int") {
            this.int = detail[1];
        } else if(detail[0] == "str") {
            this.str = detail[1];
        } else if(detail[0] == "be") {
            this.be = detail[1];
        }
    }

}