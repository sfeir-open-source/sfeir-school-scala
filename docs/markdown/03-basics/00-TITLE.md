<!-- .slide: class="transition-white sfeir-bg-red" -->

# Les bases

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Hello World

<div data-scalafiddle data-layout="h50"> <pre ><code data-trim data-noescape class="scala">
object Main extends App {
  println("Hello world")
}
</code></pre></div>

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les variables

## `val` vs `var`

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
val x = 1
x = 2; // compilation error
var y = 2
y = 3

println(s"x=$x, y=$y")
</code></pre></div>

Notes:

- On a tendance a privilégié l'immutabilité donc `val`
- Utiliser `var` pour une question de perf ou si c'est plus **lisible et compréhensible**

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les conditions

```scala
if(<condition>) {
    // ...
} else {
    // ...
}
```

Notes:

Comme en Java
##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# C'est quoi une expression ?

Quelque chose qui est **évalué** et retourne une **valeur**

## En Java

```Java
String text;

if(isTrue("true")) {
    text = "it's true";
} else {
    text = "it's false";
}
```

## En Scala

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
def isTrue(s: String) = true

val text = if(isTrue("true")) {
"it's true"
} else {
"it's false"
}

println(text)
</code></pre></div>

##--##

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

# Ordre d'évaluation

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
println("= Using val")
val evaluatedAtCreation = {
  println("Evaluated at creation 🔥")
  1
}

println(evaluatedAtCreation)

println("= Using lazy val")
lazy val lazyEvaluation = {
println("lazy 😴")
2
}

println("not yet evaluated")

println(s"evalute it now ! \$lazyEvaluation")

println("= Using def")
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

# Les classes

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
class Animal(name: String) {
}

println(new Animal("Scoubidou"))
</code></pre></div>

Notes:
pas de `getter`, `equals`...

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les classes

## `case class`

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
case class Animal(name: String, species: String) {
}

println(Animal("Scoubidou", "Chien"))
</code></pre></div>

Notes:

- contrairement au `class`: `equals`, `getter`
- méthode `copy` (immutable !)
- les 2: paramètres nommés
- méthodes dans le corps

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les classes

- les `class` pour des composants techniques (service, repository...)
- les `case class` pour des objets métier (entité, DTO...)

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les classes

## Les `object`s

Permet de faire un singleton

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
object SuperDog {
  def say() = println("Super woof")
}

SuperDog.say()
</code></pre></div>

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les classes

## Objet compagnon

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
case class Animal(name: String, species: String)

object Animal {
def say(a: Animal): Unit = {
if(a.species == "Chien") println(s"\${a.name} say woof")
}

def apply(name: String): Animal = Animal(name, "Chien")
}

Animal.say(Animal("Pluto","Chien"))
Animal.say(Animal("Lassie"))
</code></pre></div>

Notes:

Utile pour faciliter l'import de fonctions annexe a un type (ex: mapper JSON, constructeur)

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# La méthode `apply`

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
case class Increment(x: Int) {
  def apply(y: Int) = {
    println(s"$x + $y = ${x+y}")
  }
}

val inc = Increment(1)
inc(2)
inc.apply(3)
</code></pre></div>

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les tuples

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
() // tuple vide
(1) // tuple-1 -> inutile non ?
(1, true) // tuple-2, une paire
(1, true, "plop") // tuple-3: un triplet
// 22 éléments max, pourquoi pas plus ? mais c'est déjà beaucoup
(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22)
</code></pre></div>

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les tuples

- CE N'EST PAS UNE LISTE OU UN TABLEAU
- Proche d'une `case class` dans le principe
- a utiliser localement (en interne d'une fonction) plutôt que comme retour: un **tuple** n'a pas de **nom** donc pas de **sens**
- conseil: ne pas dépasser des **tuple-3**, sinon on perd le **sens**

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les tuples

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
val pair = (1, true) // tuple-2, une paire
val triplet = (1, true, "plop") // tuple-3: un triplet

println(pair.\_2) // true
println(triplet.\_3) // "plop"
</code></pre></div>

Notes:

```scala
(1, true) == (1, true)
((1, true), "plop") != (1, true,"plop")
```

##--##
<!-- .slide: class="sfeir-bg-pink exercice" -->
## Exercice

Faire un programme de **Todo**

1. Créer une todo avec un libellé
2. Terminer une todo

🚫 Utiliser `Boolean`

💡`extends` existe en Scala

Notes:

```scala
class Task
case object TODO extends Task
case object DONE extends Task

case class Todo(desc: String, state: Task = TODO) {
def done = Todo(desc, DONE)
}

val todo = Todo("Faire l'exercice")
println(todo)
println(todo.done)
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# `List`

Les `List` sont représentées par 2 états:

* vide            => `Nil`
* avec une valeur => `::`

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
println(1 :: 2 :: 3 :: Nil)
</code></pre></div>

##--##
<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->
# `List`

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
// On utilise l'objet compagnon de List pour créer une liste
val strings = List("foo", "bar", "baz")
println(strings)
println(strings(1))
</code></pre></div>

Notes:

- c'est là que l'objet compagnon est utile `List.apply`
- différent d'un tuple: ensemble homogène de valeur, itérable
- `::` n'est pas un opérateur de Scala ! C'est une fonction

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Fonctions

## Avec des symboles

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
def >>>(s1: String, s2: String) = s"$s1 >>> $s2"

val s = >>>("foo","bar")
println(s)

case class Foo(s: String) {
def +(other: Foo) = Foo(s"$s + ${other.s}")
}

val foo1 = Foo("foo").+(Foo("bar"))
println(foo1)

val foo2 = Foo("foo") + Foo("bar") + Foo("baz")
println(foo2)
</code></pre></div>

Notes:

- plus utile dans une `(case) class`
- utiliser pour les opérations mathématiques: `+` est une fonction par exemple !
- attention a la syntaxe sans point _infixe_ vs _prefixe_
- attention a la lisibilité ! Que veut dire `>>>` ?
- A réserver pour des librairies plutôt que des app et que le sens de l'opérateur soit partagé

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Fonctions

# Comme opérateur

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
case class Test(label: String) {
  def should(assert: Boolean) = println(s"$label is $assert")
}

Test("1 + 1 == 2") should {
1 + 1 == 2
}

Test("1 + 1 == 3") should {
1 + 1 == 3
}
</code></pre></div>

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les boucles

# `for`

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
for(x <- 1 to 10) println(s"$x ") // inclusif
println("------")
for(x <- 1 until 10) println(s"$x ") // exclusif
</code></pre></div>

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les boucles

## `while`

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
var x = 0
while(x < 10) {
  println(s"$x ")
  x = x + 1
}
</code></pre></div>

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les boucles

## `do while`

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
var x = 0
do {
  println(s"$x ")
  x = x + 1
} while (x < 10)
</code></pre></div>

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les boucles

## for-each

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
for( x <- List("foo","bar")) println(s"$x ")
</code></pre></div>

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# `for`-comprehension

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
val xs = for (x <- List("foo", "bar")) yield x.toUpperCase
println(xs)
</code></pre></div>

Notes:

- les boucles précédentes exécutent un traitement et **ne retournent rien**
- une **for-comprehension** fait un traitement **et retournent une valeur**
- faire un exemple avec un `if` et une sous-boucle

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# `for`-comprehension: filtrer

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
val evens = for {
  x <- 1 to 10
  if x % 2 == 0
} yield x

println(evens)
</code></pre></div>

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# `for`-comprehension: imbriquer

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
val ints = for {
  x <- 1 to 3
  y <- 1 to 3
} yield (x,y)

println(ints)
</code></pre></div>

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Pattern matching

1. Analysé le _motif_ d'une valeur
2. extraire des données
3. en faire quelque-chose

Notes:

- mot clé `match`
- l'ordre compte
- Scala peut dire si un `case` est inatteignable (dans certaines limite)
- utilisable a la déclaration `val (a,b) = (1,2)`

  ##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Pattern matching: comme un `switch`

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
"yes" match {
  case "yes" => println("Oui")
  case "no"  => println("Non")
}
</code></pre></div>

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Pattern matching: voir le motif (1)

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
def head(xs: List[String]): String =
  xs match {
    case x :: xs => s"Head = $x"
    case xs      => "empty list"
  }

println(head(List("a","b","c")))
println(head(List()))
</code></pre></div>

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Pattern matching: voir le motif (2)

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
case class Hero(name: String, power: Int)

def print(hero: Hero) = hero match {
case Hero(name, power) => s"$name has power $power"
}

println(print(Hero("foo", 100)))
</code></pre></div>

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Pattern matching: voir le motif (3)

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
case class Hero(name: String, power: Int)

def print(hero: Hero) = {
val Hero(name, power) = hero
s"$name has power $power"
}

println(print(Hero("foo", 100)))
</code></pre></div>

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Pattern matching: l'ordre compte

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
def firstTwo(xs: List[String]): String =
  xs match {
    case x :: y :: xs => s"First two: $x, $y"
    case x :: xs      => s"Head = $x"
    case xs           => "empty list"
  }

println(firstTwo(List("a","b","c")))
println(firstTwo(List("foo")))
println(firstTwo(List()))
</code></pre></div>

##--##

<!-- .slide: class="sfeir-bg-pink exercice" -->

## Exercice

Faire un programme de **FizzBuzz**

1. Le programme prend des nombres de 1 a 100
2. si le nombre est un multiple de `3` afficher **Fizz**
3. si le nombre est un multiple de `5` afficher **Buzz**
4. si le nombre est un multiple de `3` et `5` afficher **FizzBuzz**
5. Sinon afficher le nombre

🚫 Pas de `if`

Notes:

```scala
val result = for(x <- 1 to 100) yield
  (x % 3, x % 5) match {
    case (0,0) => "FizzBuzz"
    case (0, _) => "Fizz"
    case (_, 0) => "Buzz"
    case _ => x.toString
  }

println(result)
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Lambda

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
val f = (x: Int) => x + 1
val g: Int => Int = x => x + 1
val h: Int => Int = _ + 1

println(
s"""
| f(1) = ${f(1)}
| g(1) = ${g(1)}
| h(1) = \${h(1)}
|""".stripMargin)
</code></pre></div>

Notes:

montrer ensuite

```scala
println(f(g(h(1))))

val fn = f.andThen(g).andThen(h)
println(fn(1))
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# API Collection

## Se passer des boucles

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
val xs = List("foo","bar","baz").map(s => s.toUpperCase)

println(xs)
</code></pre></div>

Notes:

1. Utiliser `_` dans `s => s.toUpperCase`
2. Utiliser `foreach(s => println(s))` puis `foreach(println(_))` puis foreach(println)

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# API Collection

## Se passer des boucles

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
def upper(s:String) = s.toUpperCase

List("foo","bar","baz").map(s => upper(s))
.foreach(println)
</code></pre></div>

Notes:

Utiliser `upper` a la place de `s => upper(s)`

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# API Collection

## Filtrer aussi

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
List("scala","java","haskell","go","javascript").filter(_.length > 4)
  .foreach(println)
</code></pre></div>

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les `Map`s

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
println(Map(("foo", 1), ("bar", 2)))
</code></pre></div>

Notes:

1. utiliser `->`
2. montrer

```scala
val map = Map("foo" -> 1, "bar" -> 2)
map.map {
  case (key,value) => (value,key)
}.foreach(println)

map.filter{
  case (k, _) => k.startsWith("f")
}.foreach(println)
println(map)
```

##--##
<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->
# `Option`: Comment eviter `null` ?

La classe `Option` permet de représenter la présence ou l'absence de valeur:

* `Some(...)` => j'ai un élément
* `None` => pas de valeur

Notes:

* Comme une liste ne pouvant contenir que 0 ou 1 élément
* l'interêt est d'être explicite sur la présence ou non d'une fonction

##--##
<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->
# `Option`
<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
val some: Option[Int]  = Some(1)
val none: Option[Int] = None

println(
  s"""
     |some = $some
     |none = $none
     |""".stripMargin)
</code></pre></div>

##--##
<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->
# `Option` 

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
def head(xs: List[String]) = xs match {
  case x :: _ => x
  case Nil => ""
}

println(
  s"""
     |1. ${head(List("foo"))}
     |2. ${head(List())}
     |""".stripMargin)
</code></pre></div>

Notes:

1. Ajouter le cas `3. ${head(List(""))}` (tête d'une liste contenant `""`)
2. Transformer avec `Option`
3. montrer qu'on peut utiliser `map`

##--##
<!-- .slide: class="sfeir-bg-pink exercice" -->
## Exercice

✅Exo sur l'API collection, enchainer des `map`, `filter`...

##--##
<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->
# Génériques

ou *type paramétré*

* `List[String]`
* `Map[Int, String]`
* `Option[Hero]`
* ...

##--##
<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->
# Type parametré

* `List` est un **constructeur de type**
* `String` dans `List[String]` est un **paramètre de type**
* `List[String]` est un type concret, au même titre que `Int`

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
val xs: List = List()
</code></pre></div>

##--##
<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->
# Type parametré

On peut créer des valeurs/fonctions abstraites sur le **paramètre de type**

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
def head(xs: List[String]) : Option[String] = xs match {
  case x :: _ => Some(x)
  case Nil => None
}

println(
  s"""
     |1. ${head(List("foo"))}
     |2. ${head(List(1,2))}
     |""".stripMargin)
</code></pre></div>

Notes:

Montrer cet exemple ensuite (avec plusieurs **paramètre de type**):

```scala
def keys[K,V](kvs: Map[K,V]): Set[K] = kvs.keySet

println(keys(Map(1 -> "a", 2 -> "b")))
```

##--##
<!-- .slide: class="sfeir-bg-pink exercice" -->
## Exercice

Exercice implémenter `map` pour n'importe quelle `List`

```scala
map(List(1,2), i => i + 1) // List(2,3)
```

🚫Utiliser `List.map`

💡Il manque quelque-chose a l'appel

Notes:

Solution

```scala
def map[A,B](xs: List[A], f: A => B): List[B] =xs match {
  case x :: tail => f(x) :: map(tail, f)
  case Nil => Nil 
}

map[Int,Int](List(1,2), _ + 1)

// ou

map(List(1,2), (_: Int) + 1)
```

##--##
<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->
# Hiérarchie de type

