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