<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Inférence de type

_Où quand le compilateur il sait mieux que toi ce que tu fais_

- le compilateur _sait_ le type d'une valeur/fonction
- **Par contre** c'est mieux de l'écrire:
  - on dit explicitement au compilateur quel type on veut
  - on documente le code

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
val message = "Hello world"

def inc(x: Int) = x + 1

println(
s"""
|$message: ${message.getClass}
|${inc(1)}: ${inc(1).getClass}
|""".stripMargin)
</code></pre></div>

Notes:

- _on dit explicitement au compilateur quel type on veut_:
  - si on se trompe on aura une erreur de compilation
- _on documente le code_:
  - pour nos collègues
  - pour nous même dans 2 semaines quand on aura oublié ce que fait la fonction
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

- Montrer qu'on a pas besoin des `{}`
- Ajouter une méthode `toString`

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les classes

## `case class`

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
case class Animal(name: String, species: String)

println(new Animal("Scoubidou", "Chien"))
</code></pre></div>

Notes:

Démo:

1. pas besoin de `new`
2. `equals` automatique
3. `getter` automatique
4. `copy` (immuable), la valeur copiée ne change pas
5. ajout des méthodes `def say(s: String) = s"$name say $s"`

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les classes

Mon conseil:

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

Notes:

En terme d'usage, c'est comme un `static` en java tout en étant très OOP: un `object` est une instance.

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les `object`s

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
class Animal

object Scoubidou extends Animal
object Lassie extends Animal

println(s"Scoubidou == Lassie    ? ${Scoubidou == Lassie}")
println(s"Scoubidou == Scoubidou ? ${Scoubidou == Scoubidou}")

def say(animal: Animal) = println(s"Hello $animal")

say(Scoubidou)
</code></pre></div>

Notes:

1. Ajouter `case` a `Scoubidou` pour montrer qu'on a le `toString`
##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les `object`s

## Objet compagnon

Pour des méthodes communes

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
case class Animal(name: String, species: String)

object Animal {
    def say(a: Animal): Unit = {
        if (a.species == "Chien") println(s"\${a.name} say woof")
    }
}

Animal.say(Animal("Pluto", "Chien"))
</code></pre></div>

Notes:

Utile pour faciliter l'import de fonctions annexe a un type (ex: mapper JSON, constructeur)

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# La méthode `apply`

Dans un `object`: pour faciliter la création d'instance

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
case class Animal(name: String, species: String)

object Dog {
    def apply(name: String) = Animal(name, "Dog")
}

println(Dog.apply("Lassie"))
println(Dog("Lassie"))
</code></pre></div>

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code big-code" -->

# La méthode `apply`

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
case class Increment(x: Int) {
  def apply(y: Int): Unit = println(s"$x + $y = ${x+y}")
}

val incBy1 = Increment(1)
incBy1.apply(3)
incBy1(2)
</code></pre></div>

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Alias de type

On peut _aliaser_ un type avec `type`

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
type Name = String
type Password = String

def login(name: Name, password: Password) = println(s"\$name successfully log in")

login("John", "pwd123")
</code></pre></div>