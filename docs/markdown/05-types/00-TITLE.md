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
