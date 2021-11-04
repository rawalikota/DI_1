//const { TestWatcher } = require('@jest/core');
const count=require('./count.js');

jsonobject=[
    {
        "name": 'raja',
        "age": 26

    },
    {
        "name":'josh',
        "age":24
    }
];

test('count the json objects and give output as 4 ',()=>{
    expect(count(jsonobject)).toBe(2);
});