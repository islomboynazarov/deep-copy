const {copy} = require ('./index');

const complexObject = {
  stringValue: "Hello, World!",
  numberValue: 42,
  booleanValue: true,
  nullValue: null,
  undefinedValue: undefined,
  bigIntValue: BigInt(9007199254740991),

  arrayValue: [
    1,
    2,
    3,
    "four",
    { nestedKey: "nestedValue" }
  ],

  valueDate: new Date(),

  nestedObject: {
    level1: {
      level2: {
        level3: {
          stringValue: "Deep Nesting",
          numberValue: 3.14,
          booleanValue: false,

          arrayValue: [true, false, null],

          anotherNestedObject: {
            level4: "Final Level",

            functionValue: function () {
              return "I am a function!";
            }
          }
        }
      }
    }
  },

  functionValue: function () {
    return "I am a function!";
  }
};

const copied = copy(complexObject);

console.log(copied === complexObject);