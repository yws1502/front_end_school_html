function sayName() {
    console.log(this.name);
}

let name = 'Hero';

let peter = {
    name: "Peter Parker",
    sayName: sayName
}

let bruce = {
    name: "Bruce Wayne",
    sayName: sayName
}

sayName();
peter.sayName();
bruce.sayName();

let 호텔 = [
    {
        '이름' : '하나호텔',
        '위치' : '제주도 제주시 001',
        '가격' : {'A':50000, 'B':30000, 'C':15000},
        '방의개수' : 50,
        '예약자수' : 25,
        '남은방의개수' : function(){return this.방의개수 - this.예약자수}
    },
    {
        '이름' : '둘호텔',
        '위치' : '제주도 제주시 002',
        '가격' : {'A':100000, 'B':60000, 'C':30000},
        '방의개수' : 100,
        '예약자수' : 30,
        '남은방의개수' : function(){return this.방의개수 - this.예약자수}
    },
    {
        '이름' : '셋호텔',
        '위치' : '제주도 제주시 003',
        '가격' : {'A':80000, 'B':50000, 'C':30000},
        '방의개수' : 120,
        '예약자수' : 80,
        '남은방의개수' : function(){return this.방의개수 - this.예약자수}
    }
];

var peter = {
    name : 'Peter Parker',
    sayName : function(){    
        console.log(this.name);
    }
}

var bruce = {
    name : 'Bruce Wayne',
}

peter.sayName.call(bruce); // Bruce Wayne
// call은 내가 정의할 함수가 있는데 

peter.sayName.apply(bruce, ['batman', 'richman']);