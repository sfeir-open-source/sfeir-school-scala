<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# `List`

Les `List` sont représentées par 2 états:

* vide            => `Nil`
* avec une valeur => `::`

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
println(1 :: 2 :: 3 :: Nil)
</code></pre></div>

##--##
<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->
# `List`

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
// On utilise l'objet compagnon de List pour créer une liste
val strings = List("foo", "bar", "baz")
println(strings)
println(strings(1))
</code></pre></div>

Notes:

- c'est là que l'objet compagnon est utile `List.apply`
- différent d'un tuple: ensemble homogène de valeur, itérable
- `::` n'est pas un opérateur de Scala ! C'est une fonction