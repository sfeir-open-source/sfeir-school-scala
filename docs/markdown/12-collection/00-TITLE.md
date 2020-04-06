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

* `Some(...)` => j'ai un élément
* `None` => pas de valeur

Notes:

* Comme une liste ne pouvant contenir que 0 ou 1 élément
* l'interêt est d'être explicite sur la présence ou non d'une fonction

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