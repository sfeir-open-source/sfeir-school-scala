var isDebugEnabled = true
def logDebug(string: => String): Unit = if (isDebugEnabled) println(string)

logDebug({
  println("evaluated at call site")
  "Hello world"
})

isDebugEnabled = false

logDebug({
  println("never evaluated")
  "Nope"
})