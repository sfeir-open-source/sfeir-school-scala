<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les fonctions

## mot-clé `def`

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
def increment(x: Int): Int = x + 1

println(increment(2))
</code></pre></div>

Notes:

Vous pouvez mettre des accolades s'il y a plusieurs lignes

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les fonctions

## Paramètres nommés

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
def writeToConsole(x: Int, y: Int): Unit ={
  println(s"x = $x, y = $y")
}

writeToConsole(1, 2) // x = 1, y = 2
writeToConsole(y = 1, x = 2) // x = 2, y = 1
</code></pre></div>

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les fonctions

## Paramètres optionels

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
def writeToConsole(x: String = "XXX", y: String = "BAZ"): Unit = {
  println(s"x = $x, y = $y")
}

writeToConsole("FOO", "BAR")
writeToConsole(y = "BAR", x = "FOO")
writeToConsole("FOO")
writeToConsole(y = "FOO")
writeToConsole()
</code></pre></div>

##--##
<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->
# Les fonctions

## Une fonction dans une fonction

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
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
</code></pre></div>

Notes:

* Imaginez qu'on a une **condition complexe**, avec des dépendances externes
* Avantage: limiter l'utilisation de fonction _privée_


##--##
<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->
# Les Fonctions

## Groupe de paramètres

Une fonction peut avoir plusieurs groupe de paramètres

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
def add(x:Int)(y:Int) = println(s"$x + $y = ${x+y}")

add(1)(2)
</code></pre></div>

##--##
<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->
# Evaluation
## `val` vs `lazy val` vs `def`

**`val`** évaluation **immediate** et **une seule fois**

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
val evaluatedAtCreation = {
  println("Evaluated at creation 🔥")
  1
}

println("After init")
println(evaluatedAtCreation)
println(evaluatedAtCreation)
</code></pre></div>

##--##
<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->
# Evaluation
## `val` vs `lazy val` vs `def`

**`lazy val`** évaluation au **premier appel** et **une seule fois**

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
lazy val lazyEvaluation = {
  println("lazy 😴")
  2
}

println("not yet evaluated")
println(s"evalute it now ! $lazyEvaluation")
println(s"evalute it now ! $lazyEvaluation")
</code></pre></div>

##--##
<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->
# Evaluation
## `val` vs `lazy val` vs `def`

**`def`** évaluation a **l'appel** et **a chaque fois**

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
def eachTime = {
  println("each time ⏳")
  3
}

println("not yet evaluated")
println(s"evaluate it at each call $eachTime")
println(s"evaluate it at each call $eachTime")
</code></pre></div>

##--##
<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->
# Evaluation

## _call by name_ vs _call by value_

* **call by value**: paramètre évalué à l'appel de méthode
* **call by name**: paramètre évalué s'il est utilisé

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
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
</code></pre></div>

Notes:

Ajouter le `=>` dans la fonction `logDebug`