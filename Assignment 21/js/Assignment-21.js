/*21. The Translator:
Write a program that:
a. takes 1 input, a language code (e.g. "es", "de", "en")
b. tells "Hello, World" for the given language, for atleast 3
languages. It should default to returning English.
(Hint: use translate.google.com to check the translation of
hello world in different languages)*/

var language=prompt("Enter a language code (e.g. 'ch', 'Ar', 'en') to translate 'Hello World' on that language","en");
if(language=="en")
{
   alert("Hello world");  
}
else if(language=="ch")
{ 
   alert("你好，世界");

}
else if(language=="Ar")
{
  alert("مرحبا بالعالم");
}
