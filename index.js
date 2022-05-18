function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}
saturdayFun();
saturdayFun("bathe my dog");

function mondayWork(activity = 'go to the office') {
    return (`This Monday, I will ${activity}.`)
}
mondayWork();
mondayWork('work from home')

//function wrapAdjective(msg = 'You are', wrap = '*') {
//    return function (emphatic) {
//        return `${msg} ${wrap} ${emphatic} ${wrap}`
//    }
//};

//wrapAdjective('*')('a hard worker')

function wrapAdjective(wrap = '*') {
    return function (emphatic = 'special') {
        return `You are ${wrap}${emphatic}${wrap}!`
        
    }
}
