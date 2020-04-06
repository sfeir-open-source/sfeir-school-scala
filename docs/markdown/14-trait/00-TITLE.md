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

* `case class DogBot() extends Robot with Dog`
* `println(DogBot().say)`

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
   * `scalacOptions += "-Xfatal-warnings"` dans `build.sbt`
   * ⚠️dans un fichier **scala** pas un **worksheet**⚠️

##--##
<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->
# Les `trait`s scellés

* `sealed` empêche d'étendre le `trait` en dehors de son fichier de déclaration
* le `trait` scellé et ces sous-types forment un **A**lgebraic **D**ata **T**ype: **ADT**

##--##
<!-- .slide: class="sfeir-bg-pink exercice" -->
## Exercice

Faire un **ADT** pour **`Maybe`**

**`Maybe`** fonctionne comme une **`Option`**, avec

* **`Some`** => **`Just`**
* **`None`** => **`Empty`**

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
