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