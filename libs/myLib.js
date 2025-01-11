let LIB_PREFIX = 'myLib_'
function hello(){ Bot.sendMessage("Hello from lib!") }
function goodbye(name){ Bot.sendMessage("Goodbye, " + name) }
function greet(name){ Bot.sendMessage("Hey "+name+", Welcome Back") }

publish({
  sayHello: hello,
  sayGoodbyeTo: goodbye,
greet: greet
})