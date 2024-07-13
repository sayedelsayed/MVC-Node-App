const { required } = require('joi');

const Ajv=require('ajv').default;
const ajv=new Ajv();

const schema={
    "type":"object",
    "properties":{
        "name":{"type":"string"},
        "email":{"type":"string","pattern":".+\@.+\..+"},
        "password":{"type":"string",}

    },
    "required":["name","email","password"]
}


module.exports= ajv.compile(schema)