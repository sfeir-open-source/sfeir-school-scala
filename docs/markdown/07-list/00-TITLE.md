<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# `List`

Les `List` sont représentées par 2 états:

* vide            => `Nil`
* avec une valeur => `::`

```scala
1 :: 2 :: 3 :: Nil
```

##--##
<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->
# `List`

```scala
// On utilise l'objet compagnon de List pour créer une liste
val strings = List("foo", "bar", "baz")
strings
strings(1)
```

Notes:

- c'est là que l'objet compagnon est utile `List.apply`
- différent d'un tuple: ensemble homogène de valeur, itérable
- `::` n'est pas un opérateur de Scala ! C'est une fonction