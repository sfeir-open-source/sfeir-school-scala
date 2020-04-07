<!-- .slide: class="transition-white sfeir-bg-red" -->

# Les bases

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Hello World

```scala
object Main {
  def main(args: Array[String]): Unit = {
    println("Hello World")
  }
}
```

Notes:

1. Lancer ce programme dans Intellij
2. Utiliser un argument `args(0)`
3. Utiliser le trait `App` (plus besoin du `main`)
4. utiliser des _string interpolation_: `s"Hello ${args(0)}`

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les variables

## `val` vs `var`

```scala
val x = 1
x = 2; // compilation error
var y = 2
y = 3

s"x=$x, y=$y"
```

Notes:

- On a tendance a privilégié l'immutabilité donc `val`
- Utiliser `var` pour une question de perf ou si c'est plus **lisible et compréhensible**

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les conditions

```scala
if(true) {
  println("true")
} else {
  println("true")
}
```

Notes:

Comme en Java

##--##
<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->
# String interpolation

Formattage de chaines de caractères

```scala
val name = "Emmanuel"

s"Hello $name"
s"Hello ${name.toUpperCase()}"
s"""
   |*******************
   |Hello $name
   |*******************
   """.stripMargin
```

Notes:

Ne prêtez pas attention au `// 0` dans le worksheet, c'est le worksheet qui les ajoute automatiquement
##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# C'est quoi une expression ?

## Instruction vs Expression

- **Instruction**: faire faire quelque chose, on attend que ce soit fait pas une valeur
- **Expression**: évaluer quelque chose, on exécute quelque chose pour produire une valeur

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# C'est quoi une expression ?

En **Java**:

```Java
String text;

if(isTrue("true")) {
    text = "it's true";
} else {
    text = "it's false";
}
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# C'est quoi une expression ?

En **Scala**:

```scala
val text = if(true) {
  "it's true"
} else {
  "it's false"
}

text
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Le cas `Unit`

```scala
val x = println("Hello 👋")
```

- `Unit` représente une **expression** n'ayant pas produit de valeur _utile_
- `Unit` indique que l'expression a produit un **effet** plutôt qu'une valeur
- `()` est la seule valeur possible pour `Unit`

Notes:

- **effet** = persister quelque chose, écrire sur la console, appel HTTP sans résultat

##==##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les fonctions

## mot-clé `def`

```scala
def increment(x: Int): Int = x + 1

increment(2)
```

Notes:

Vous pouvez mettre des accolades s'il y a plusieurs lignes

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les fonctions

## Paramètres nommés

```scala
def namedParameters(s1: String, s2: String): String = s"$s1 $s2"

namedParameters("foo", "bar")
namedParameters(s2 = "foo", s1 = "bar")
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les fonctions

## Paramètres optionels

```scala
def maybeParams(s1: String = "nope", s2: String = "nope"): String = s"$s1 $s2"

maybeParams("FOO", "BAR")
maybeParams(s2 = "BAR", s1 = "FOO")
maybeParams("FOO")
maybeParams(s2 = "FOO")
maybeParams()
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
def add(x:Int)(y:Int) = s"$x + $y = ${x+y}"

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

##==##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Inférence de type

_Où quand le compilateur il sait mieux que toi ce que tu fais_

- le compilateur _sait_ le type d'une valeur/fonction
- **Par contre** c'est mieux de l'écrire:
  - on dit explicitement au compilateur quel type on veut
  - on documente le code

```scala
val message = "Hello world"

def inc(x: Int) = x + 1

println(
  s"""
     |$message: ${message.getClass}
     |${inc(1)}: ${inc(1).getClass}
     |""".stripMargin)
```

Notes:

- _on dit explicitement au compilateur quel type on veut_:
  - si on se trompe on aura une erreur de compilation
- _on documente le code_:
  - pour nos collègues
  - pour nous même dans 2 semaines quand on aura oublié ce que fait la fonction
    ##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les classes

## `class`

On peut faire des classes

```scala
class Animal(name: String) {
}

new Animal("Scoubidou")
```

Notes:
pas de `getter`, `equals`...

- Montrer qu'on a pas besoin des `{}`
- Ajouter une méthode `toString`

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les classes

## `case class`

Mais les `case class` c'est beaucoup mieux

```scala
case class Animal(name: String, species: String)

new Animal("Scoubidou", "Chien")
```

Notes:

Démo:

1. pas besoin de `new`
2. `equals` automatique
3. `getter` automatique
4. `copy` (immuable), la valeur copiée ne change pas
5. ajout de méthodes `def say(s: String) = s"$name say $s"`

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les classes

Mon conseil:

- les `class` pour des composants techniques (service, repository...)
- les `case class` pour des objets métier (entité, DTO...)

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les `object`s

Permet de faire un singleton

```scala
object SuperDog {
  def say() = "Super woof"
}

SuperDog.say()
```

Notes:

En terme d'usage, c'est comme un `static` en java tout en étant très OOP: un `object` est une instance.

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les `object`s

```scala
class Number

object One extends Number
object Two extends Number

One == Two
One == One

def say(number: Number) = s"You say $number"

say(One)
```

Notes:

1. Ajouter `case` a `One` pour montrer qu'on a le `toString`
   ##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les `object`s

## Objet compagnon

Pour des méthodes communes

```scala
case class Number(i: Int)

object Number {
  def plus(x: Number, y:Number) = Number(x.i + y.i)
}

Number.plus(Number(1), Number(2))
```

Notes:

Utile pour faciliter l'import de fonctions annexe a un type (ex: mapper JSON, constructeur)

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# La méthode `apply`

Dans un `object`: pour faciliter la création d'instance

```scala
case class Animal(name: String, species: String)

object Dog {
    def apply(name: String) = Animal(name, "Dog")
}

Dog.apply("Lassie")
Dog("Lassie")
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code big-code" -->

# La méthode `apply`

```scala
case class Increment(x: Int) {
  def apply(y: Int): Unit = s"$x + $y = ${x+y}"
}

val incBy1 = Increment(1)
incBy1.apply(3)
incBy1(2)
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Alias de type

On peut _aliaser_ un type avec `type`

```scala
type Name = String
type Password = String

def login(name: Name, password: Password) = s"\$name successfully log in"

login("John", "pwd123")
```

##==##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les tuples

```scala
() // tuple vide
(1) // tuple-1 -> inutile non ?
(1, true) // tuple-2, une paire
(1, true, "plop") // tuple-3: un triplet
// 22 éléments max, pourquoi pas plus ? mais c'est déjà beaucoup
(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22)
```

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

```scala
val pair = (1, true) // tuple-2, une paire
val triplet = (1, true, "plop") // tuple-3: un triplet

pair.\_2
triplet.\_3
```

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
todo
todo.done
```

##==##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# `List`

Les `List` sont représentées par 2 états:

- vide => `Nil`
- avec une valeur => `::`

```scala
1 :: 2 :: 3 :: Nil
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# `List`

```scala
// On utilise l'objet compagnon de List pour créer une liste
val strings = List("foo", "bar", "baz")
strings
strings(1)
```

Notes:

- c'est là que l'objet compagnon est utile `List.apply`
- différent d'un tuple: ensemble homogène de valeur, itérable
- `::` n'est pas un opérateur de Scala ! C'est une fonction
  ##==##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les Fonctions

## Avec des symboles

```scala
def >>>(s1: String, s2: String) = s"$s1 >>> $s2"

>>>("foo","bar")

case class Foo(s: String) {
def +(other: Foo) = Foo(s"$s + ${other.s}")
}

Foo("foo").+(Foo("bar"))

Foo("foo") + Foo("bar") + Foo("baz")
```

Notes:

- plus utile dans une `(case) class`
- utiliser pour les opérations mathématiques: `+` est une fonction par exemple !
- attention a la syntaxe sans point _infixe_ vs _prefixe_
- attention a la lisibilité ! Que veut dire `>>>` ?
- A réserver pour des librairies plutôt que des app et que le sens de l'opérateur soit partagé

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les Fonctions

# Comme opérateur

```scala
case class Test(label: String) {
  def should(assert: Boolean) = s"$label is $assert"
}

Test("1 + 1 == 2") should {
  1 + 1 == 2
}

Test("1 + 1 == 3") should {
  1 + 1 == 3
}
```

##==##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les boucles

# `for`

```scala
for(x <- 1 to 10) println(s"$x ") // inclusif
println("------")
for(x <- 1 until 10) println(s"$x ") // exclusif
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les boucles

## `while`

```scala
var x = 0
while(x < 10) {
  println(s"$x ")
  x = x + 1
}
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les boucles

## `do while`

```scala
var x = 0
do {
  println(s"$x ")
  x = x + 1
} while (x < 10)
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les boucles

## for-each

```scala
for( x <- List("foo","bar")) println(s"$x ")
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# `for`-comprehension

```scala
for (x <- List("foo", "bar")) yield x.toUpperCase
```

Notes:

- les boucles précédentes exécutent un traitement et **ne retournent rien**
- une **for-comprehension** fait un traitement **et retournent une valeur** (c'est une **expression**)
- faire un exemple avec un `if` et une sous-boucle

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# `for`-comprehension: filtrer

```scala
for {
  x <- 1 to 10
  if x % 2 == 0
} yield x
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# `for`-comprehension: imbriquer

```scala
for {
  x <- 1 to 3
  y <- 1 to 3
} yield (x,y)
```

##==##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Pattern matching

1. Analysé le _motif_ d'une valeur
2. extraire des données
3. en faire quelque-chose

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Pattern matching: comme un `switch`

```scala
"yes" match {
  case "yes" => "Oui"
  case "no"  => "Non"
}
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Pattern matching: voir le motif (1)

```scala
def head(xs: List[String]): String =
  xs match {
    case x :: xs => s"Head = $x"
    case xs      => "empty list"
  }

head(List("a","b","c"))
head(List())
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Pattern matching: voir le motif (2)

```scala
case class Name(name: String)
case class Hero(name: Name, power: Int)

def print(hero: Hero) = hero match {
  case Hero(Name(name), power) => s"$name has power $power"
}

print(Hero(Name("foo"), 100))
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Pattern matching: voir le motif (3)

```scala
case class Hero(name: String, power: Int)

def print(hero: Hero) = {
  val Hero(name, power) = hero
  s"$name has power $power"
}

print(Hero("foo", 100))
```

Notes:

ça marche aussi pour des

```scala
val (x,y) = (1,2) // tuples
val head :: _ = List(1,2,3) // listes
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Pattern matching: l'ordre compte

```scala
def firstTwo(xs: List[String]): String =
  xs match {
    case x :: y :: xs => s"First two: $x, $y"
    case x :: xs      => s"Head = $x"
    case xs           => "empty list"
  }

firstTwo(List("a","b","c"))
firstTwo(List("foo"))
firstTwo(List())
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Pattern matching: plusieurs possibilités

On peut faire un `case` pour plusieurs valeurs

```scala
def isVoyel(c: Char) = c match {
  case 'a' | 'e' | 'i' | 'o' | 'u' => true
  case _ => false
}

isVoyel('a')
isVoyel('b')
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Pattern matching: plusieurs possibilités

On peut aussi utiliser `if` dans `case`

```scala
def isVoyel(c: Char) = {
  def isIn(x: Char) = List('a','e','i','o','u').contains(x) // on pourrait réduire la fonction  a cette ligne 😁

  c match {
    case char if isIn(char) => true
    case _ => false
  }
}

isVoyel('a')
isVoyel('b')
```

Notes:

On est d'accord que cette implémentation est _foireuse_, le `List().contains` est plus lisible !
C'est un exemple 😁
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
for(x <- 1 to 100) yield
  (x % 3, x % 5) match {
    case (0,0) => "FizzBuzz"
    case (0, _) => "Fizz"
    case (_, 0) => "Buzz"
    case _ => x.toString
  }
```

##==##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Exception

Comme en Java, `throw` pour lever une `Exception`

```scala
throw new Exception("fail !!!")
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Exception

`try catch` pour _attraper_ une `Exception`

```scala
try {
  throw new Exception("oups")
} catch {
  case e => e.getMessage
}
```

Notes:

`try` est aussi une **expression**: montrer l'assignation

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Lambda

```scala
val f = (x: Int) => x + 1
val g: Int => Int = x => x + 1
val h: Int => Int = _ + 1

f(1)
g(2)
h(3)
```

Notes:

montrer ensuite

```scala
f(g(h(1)))

val fn = f.andThen(g).andThen(h)
fn(1)
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les Fonctions

## Groupe de paramètres

```scala
case class Person(name: String)

class Repository {
  def save(p: Person): Unit = println(s"save $p")
}

def inTransaction(repository: Repository)(f: Repository => Unit) = f(repository)

inTransaction(new Repository) { repo =>
  repo.save(Person("Jane"))
}
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les Fonctions

## Groupe de paramètres

Que se passe-t-il si on ne donne pas tous les paramètres ?

```scala
def add(x:Int)(y:Int): Int = x + y

add(1)(2)
add(1)
```

Notes:

1. Montrer que ça ne compile pas
2. Ajouter le `_` a `add(1)` => c'est une fonction (currying sans rentrer dans les détails)
3. Assigner a une `val inc = add(1) _` et l'utiliser `inc(1)`

##==##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# API Collection

## Se passer des boucles

```scala
List("foo","bar","baz").map(s => s.toUpperCase)
```

Notes:

1. Utiliser `_` dans `s => s.toUpperCase`
2. Utiliser `foreach(s => println(s))` puis `foreach(println(_))` puis foreach(println)

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# API Collection

## Se passer des boucles

```scala
def upper(s:String) = s.toUpperCase

List("foo","bar","baz").map(s => upper(s))
.foreach(println)
```

Notes:

Utiliser `upper` a la place de `s => upper(s)`

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# API Collection

## Filtrer aussi

```scala
List("scala","java","haskell","go","javascript").filter(_.length > 4)
  .foreach(println)
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les `Map`s

```scala
Map(("foo", 1), ("bar", 2))
```

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
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# `Option`: Comment eviter `null` ?

La classe `Option` permet de représenter la présence ou l'absence de valeur:

- `Some(...)` => j'ai un élément
- `None` => pas de valeur

Notes:

- Comme une liste ne pouvant contenir que 0 ou 1 élément
- l'interêt est d'être explicite sur la présence ou non d'une fonction

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# `Option`

```scala
val some: Option[Int]  = Some(1)
val none: Option[Int] = None

some
none
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# `Option`

```scala
def head(xs: List[String]) = xs match {
  case x :: _ => x
  case Nil => ""
}

head(List("foo"))
head(List())
```

Notes:

1. Ajouter le cas `3. ${head(List(""))}` (tête d'une liste contenant `""`)
2. Transformer avec `Option`
3. montrer qu'on peut utiliser `map`

##--##

<!-- .slide: class="sfeir-bg-pink exercice" -->

## Exercice

✅Exo sur l'API collection, enchainer des `map`, `filter`...
##==##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Génériques

ou _type paramétré_

- `List[String]`
- `Map[Int, String]`
- `Option[Hero]`
- ...

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Type parametré

- `List` est un **constructeur de type**
- `String` dans `List[String]` est un **paramètre de type**
- `List[String]` est un type concret, au même titre que `Int`

```scala
val xs: List = List()
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Type parametré

On peut créer des valeurs/fonctions abstraites sur le **paramètre de type**

```scala
def head(xs: List[String]) : Option[String] = xs match {
  case x :: _ => Some(x)
  case Nil => None
}

head(List("foo"))
head(List(1,2))
```

Notes:

1. Introduire le type `[A]`
2. Montrer cet exemple ensuite (avec plusieurs **paramètre de type**):

```scala
def keys[K, V](kvs: Map[K, V]): Set[K] = kvs.keySet

keys(Map(1 -> "a", 2 -> "b"))
keys(Map("a" -> 1, "b" -> 2))
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

##==##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les `trait`s

Comme une `interface` en Java mais avec la possibilité d'implémenter des méthodes

```scala
trait Votant {
  def age: Int

  val canVote:Boolean = age > 18
}

case class Person(name: String, age: Int) extends Votant

Person("John", 19).canVote
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les `trait`s: Héritage en diamant

![Héritage en diamant](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Diamond_inheritance.svg/440px-Diamond_inheritance.svg.png)

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les `trait`s: Héritage en diamant

Prendre le `trait` le plus a droite

```scala
trait Animal {
  def say: String
}

trait Dog extends Animal {
  override val say = "ouaf"
}

trait Robot extends Animal {
  override val say = "grzzz"
}

case class CyberDog() extends Dog with Robot

CyberDog().say
```

Notes:

Ajouter:

```scala
case class DogBot() extends Robot with Dog
println(DogBot().say)
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les `trait`s: Mixins

Un **type** peut implémenter plusieurs `trait`

```scala
trait Repository[A] {
  def save(a: A): A
}

trait Connexion {
  val cnxString: String= "please-connect-to-db"
}

case class Person(name: String)

class PersonRepository extends Repository[Person] with Connexion {
  def save(person: Person) = {
    println(s"Connect with [$cnxString]")
    person.copy(s"${person.name} saved")
  }
}

new PersonRepository().save(Person("John"))
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les `trait`s: Mixins

⚠️Utiliser les **mixins** pour du comportement (fonction) plutôt que de la donnée

Notes:

Dans l'exemple précédent il ne serai pas facile de remplacer la **chaine de connexion** dans `Connexion`

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les `trait`s scellés

Avec un `trait` on peut facilement représenter une _famille_ de type:

```scala
trait Feu
case object Rouge extends Feu
case object Vert extends Feu

def switch(feu: Feu): Feu = feu match {
  case Rouge => Vert
  case Vert  => Rouge
}

switch(Rouge)
switch(Vert)
```

Notes:

1. Ajouter le `case object Orange`: montrer l'échec du _pattern matching_
2. Ajouter `sealed` sur le `trait`: montrer le warning sur le _pattern matching_
3. Passer sur intellij avec:
   - `scalacOptions += "-Xfatal-warnings"` dans `build.sbt`
   - ⚠️dans un fichier **scala** pas un **worksheet**⚠️

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les `trait`s scellés

- `sealed` empêche d'étendre le `trait` en dehors de son fichier de déclaration
- le `trait` scellé et ces sous-types forment un **A**lgebraic **D**ata **T**ype: **ADT**

##--##

<!-- .slide: class="sfeir-bg-pink exercice" -->

## Exercice

Faire un **ADT** pour **`Maybe`**

**`Maybe`** fonctionne comme une **`Option`**, avec

- **`Some`** => **`Just`**
- **`None`** => **`Empty`**

💡**`Nothing`** est un type spéciale de Scala, qui étend **tous** les types

💡le **compilateur** est votre **ami** => _RTFM_ !

Notes:

Solution:

```scala
sealed trait Maybe[+A] // +A equivalent a `? extends A`
case class Just[A](a: A) extends Maybe[A]
case object Empty extends Maybe[Nothing]

def head[A](xs: List[A]): Maybe[A] = xs match {
  case x :: _ => Just(x)
  case Nil => Empty
}

head(List("foo","bar"))
```
