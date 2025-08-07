import translate from "translate";

translate.engine = "deepl";
translate.key = process.env.DEEPL_KEY;

const text = await translate("Hello world", "es");
console.log(text);
// "Hola mundo"