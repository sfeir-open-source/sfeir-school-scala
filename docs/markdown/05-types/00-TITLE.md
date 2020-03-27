<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->
# Inférence de type

_Où quand le compilateur il sait mieux que toi ce que tu fais_

* le compilateur _sait_ le type d'une valeur/fonction
* **Par contre** c'est mieux de l'écrire:
  * on dit explicitement au compilateur quel type on veut
  * on documente le code

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

* _on dit explicitement au compilateur quel type on veut_:
  * si on se trompe on aura une erreur de compilation
* _on documente le code_:
  * pour nos collègues
  * pour nous même dans 2 semaines quand on aura oublié ce que fait la fonction
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
# Alias de type

On peut _aliaser_ un type avec `type`

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
type Name = String
type Password = String

def login(name: Name, password: Password) = println(s"$name successfully log in")

login("John", "pwd123")
</code></pre></div>