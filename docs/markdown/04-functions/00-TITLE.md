<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les fonctions

## mot-clé `def`

```scala
def increment(x: Int): Int = x + 1

println(increment(2))
```

Notes:

Vous pouvez mettre des accolades s'il y a plusieurs lignes

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les fonctions

## Paramètres nommés

```scala
def writeToConsole(s1: String, s2: String): Unit = println(s"$s1 $s2")

writeToConsole("foo", "bar") // x = 1, y = 2
writeToConsole(s2 = "foo", s1 = "bar") // x = 2, y = 1
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les fonctions

## Paramètres optionels

```scala
def writeToConsole(s1: String = "nope", s2: String = "nope"): Unit = println(s"$s1 $s2")

writeToConsole("FOO", "BAR")
writeToConsole(s2 = "BAR", s1 = "FOO")
writeToConsole("FOO")
writeToConsole(s2 = "FOO")
writeToConsole()
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les fonctions

## Une fonction dans une fonction

```scala
def greatherThan5(x: Int): Unit = {
  if(x >= 5) {
    println(s"$x est plus grand que 5")
  } else {
    println(s"$x est plus petit que 5")
  }
}

greatherThan5(5)
greatherThan5(3)
greatherThan5(7)
```

Notes:

Imaginez qu'on a une **condition complexe**, avec des dépendances externes

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les Fonctions

## Groupe de paramètres

Une fonction peut avoir plusieurs groupe de paramètres

```scala
def add(x:Int)(y:Int) = println(s"$x + $y = ${x+y}")

add(1)(2)
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Evaluation

## `val` vs `lazy val` vs `def`

**`val`** évaluation **immediate** et **une seule fois**

```scala
val evaluatedAtCreation = {
  println("Evaluated at creation 🔥")
  1
}

println("After init")
println(evaluatedAtCreation)
println(evaluatedAtCreation)
```

Notes:

Faire remarque l'utilisation d'un bloc de code `{ ... }`
##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Evaluation

## `val` vs `lazy val` vs `def`

**`lazy val`** évaluation au **premier appel** et **une seule fois**

```scala
lazy val lazyEvaluation = {
  println("lazy 😴")
  2
}

println("not yet evaluated")
println(s"evalute it now ! $lazyEvaluation")
println(s"evalute it now ! $lazyEvaluation")
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Evaluation

## `val` vs `lazy val` vs `def`

**`def`** évaluation a **l'appel** et **a chaque fois**

```scala
def eachTime = {
  println("each time ⏳")
  3
}

println("not yet evaluated")
println(s"evaluate it at each call $eachTime")
println(s"evaluate it at each call $eachTime")
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Evaluation

## _call by name_ vs _call by value_

- **call by value**: paramètre évalué à **l'appel de méthode**
- **call by name**: paramètre évalué **s'il est utilisé**

```scala
var isDebugEnabled = true
def logDebug(string: String): Unit = if (isDebugEnabled) println(string)

logDebug({
  println("evaluated at call site")
  "Hello world"
})

isDebugEnabled = false

logDebug({
  println("never evaluated")
  "Nope"
})
```

Notes:

Ajouter le `=>` dans la fonction `logDebug`
