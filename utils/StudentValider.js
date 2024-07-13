
const Ajv = require("ajv")
const ajv = new Ajv( ) // options can be passed, e.g.

const schema = {
  type: "object",
  properties: {
    fn: {type: "string"},
    ln:{type:"string",required:"true",minLength:3,maxLength:30, trim:true},
    age: {type: "integer"},
  },
  required: ["foo"],
  additionalProperties: false
}
//const validate = ajv.compile(schema)
module.exports= ajv.compile(schema)