<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les boucles

# `for`

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
for(x <- 1 to 10) println(s"$x ") // inclusif
println("------")
for(x <- 1 until 10) println(s"$x ") // exclusif
</code></pre></div>

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les boucles

## `while`

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
var x = 0
while(x < 10) {
  println(s"$x ")
  x = x + 1
}
</code></pre></div>

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les boucles

## `do while`

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
var x = 0
do {
  println(s"$x ")
  x = x + 1
} while (x < 10)
</code></pre></div>

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les boucles

## for-each

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
for( x <- List("foo","bar")) println(s"$x ")
</code></pre></div>

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# `for`-comprehension

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
val xs = for (x <- List("foo", "bar")) yield x.toUpperCase
println(xs)
</code></pre></div>

Notes:

- les boucles précédentes exécutent un traitement et **ne retournent rien**
- une **for-comprehension** fait un traitement **et retournent une valeur**
- faire un exemple avec un `if` et une sous-boucle

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# `for`-comprehension: filtrer

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
val evens = for {
  x <- 1 to 10
  if x % 2 == 0
} yield x

println(evens)
</code></pre></div>

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# `for`-comprehension: imbriquer

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
val ints = for {
  x <- 1 to 3
  y <- 1 to 3
} yield (x,y)

println(ints)
</code></pre></div>