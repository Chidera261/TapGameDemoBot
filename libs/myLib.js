let LIB_PREFIX = 'myLib_'
function hello(){ Bot.sendMessage("Hello from lib!") }
function goodbye(name){ Bot.sendMessage("Goodbye, " + name) }

publish({
  sayHello: hello,
  sayGoodbyeTo: goodbye
})