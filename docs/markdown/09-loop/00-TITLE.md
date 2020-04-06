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
val xs = for (x <- List("foo", "bar")) yield x.toUpperCase
println(xs)
```

Notes:

- les boucles précédentes exécutent un traitement et **ne retournent rien**
- une **for-comprehension** fait un traitement **et retournent une valeur**
- faire un exemple avec un `if` et une sous-boucle

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# `for`-comprehension: filtrer

```scala
val evens = for {
  x <- 1 to 10
  if x % 2 == 0
} yield x

println(evens)
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# `for`-comprehension: imbriquer

```scala
val ints = for {
  x <- 1 to 3
  y <- 1 to 3
} yield (x,y)

println(ints)
```