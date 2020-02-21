<!-- .slide: class="transition-white sfeir-bg-red" -->

# Les bases

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Hello World

```scala
object Main extends App {
  println("Hello world")
}
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les variables

## `val` vs `var`

```scala
val x = 1
x = 2; // compilation error
var y = 2
y = 3;
```

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

```Scala
val text = if(isTrue("true")) {
    "it's true"
} else {
    "it's false"
}
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les fonctions

## mot-clé `def`

```scala
def increment(x: Int): Int = x + 1
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les fonctions

## Paramètres nommés

```scala
def writeToConsole(x: Int, y: Int): Unit ={
  println(s"x = $x, y = $y")
}

writeToConsole(1, 2) // x = 1, y = 2
writeToConsole(y = 1, x = 2) // x = 2, y = 1
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les fonctions

## Groupe de paramètre

```scala
def add(x: Int)(y: Int): Int = x + y

add(1)(2) // 3
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les classes

```scala
class Animal(name: String) {
}

new Animal("Scoubidou")
```

Notes:
pas de `getter`, `equals`...

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les classes

## `case class`

```scala
case class Animal(name: String, species: String) {
}

Animal("Scoubidou", "Chien")
```

Notes:

- pas de `new` on verra pourquoi plus tard
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

```scala
object SuperDog {
  def say() = println("Super ouf")
}

SuperDog.say()
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les classes

## Objet compagnon

```scala
case class Animal(name: String, species: String)

object Animal {
  def say(a: Animal): Unit = {
    if(a.species == "Chien") println(s"${a.name} say woof")
  }

  def apply(name: String): Animal = Animal(name, "Chien")
}

Animal.say(Animal("Pluto","Chien"))
Animal.say(Animal("Lassie"))
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# La méthode `apply`

```scala
case class Increment(x: Int) {
  def apply(y: Int) = x+y
}

val add1 = Increment(1)

add1(2)
```

##--##

<!-- .slide: class="sfeir-bg-pink exercice" -->

## Exercice

???

- Écrire un programme de gestion de combat de héros
  - gestion de l'identité secrète
  - tout dans un worksheet

##--##

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
- ne pas dépasser des **tuple-3**, sinon on perd le **sens**

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les tuples

```scala
val pair = (1, true) // tuple-2, une paire
val triplet = (1, true, "plop") // tuple-3: un triplet

pair._2 // true
triplet._3 // "plop"
```

Notes:

```scala
(1, true) == (1, true)
((1, true), "plop") != (1, true,"plop")
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les listes

```scala
List(1, 2, 3)
// On utilise l'objet compagnon de List pour créer une liste
val strings = List("foo", "bar", "baz")

strings(1)

val xs = "foo" :: "bar" :: "baz" :: Nil
```

Notes:

- c'est là que l'objet compagnon est utile `List.apply`
- différent d'un tuple: ensemble homogène de valeur, itérable
- `::` n'est pas un opérateur de Scala ! C'est une fonction

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Fonctions

## Avec des symboles

```scala
def >>>(s1: String, s2: String) = s"$s1 >>> $s2"

>>>("foo","bar")

case class Foo(s: String) {
  def >>>(other: Foo) = Foo(s"$s >>> ${other.s}")
}

Foo("foo").>>>(Foo("bar"))

Foo("foo") >>> Foo("bar") >>> Foo("baz")
```

Notes:

- plus utile dans une `(case) class`
- utiliser pour les opérations mathématiques: `+` est une fonction par exemple !
- attention a la syntaxe sans point _infixe_ vs _prefixe_
- attention a la lisibilité ! Que veut dire `>>>` ?
- A réserver pour des librairies plutôt que des app et que le sens de l'opérateur soit partagé

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les boucles

## `for`

```scala
for(x <- 1 to 10) print(s"$x ") // inclusif
for(x <- 1 until 10) print(s"$x ") // exclusif
```

## `while`

```scala
var x = 0
while(x < 10) {
  print(s"$x ")
  x = x + 1
}
```

## `do while`

```scala
var x = 0
do {
  print(s"$x ")
  x = x + 1
} while (x < 10)
```

## for-each

```scala
for( x <- List("foo","bar")) print(s"$x ")
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# `for`-comprehension

```scala
val xs = for (x <- List("foo", "bar")) yield x.toUpperCase
```

Notes:

- les boucles précédentes exécutent un traitement et **ne retournent rien**
- une **for-comprehension** fait un traitement **et retournent une valeur**
- faire un exemple avec un `if` et une sous-boucle

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Pattern matching

1. Analysé le _motif_ d'une valeur
2. extraire des données
3. en faire quelque-chose

Notes:

* mot clé `match`
* l'ordre compte
* Scala peut dire si un `case` est inatteignable (dans certaines limite)
* utilisable a la déclaration `val (a,b) = (1,2)`
##--##

<!-- .slide: class="sfeir-bg-pink exercice" -->

## Exercice
