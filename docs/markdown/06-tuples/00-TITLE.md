<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les tuples

```scala
() // tuple vide
(1) // tuple-1 -> inutile non ?
(1, true) // tuple-2, une paire
(1, true, "plop") // tuple-3: un triplet
// 22 éléments max, pourquoi pas plus ? mais c'est déjà beaucoup
(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22)
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les tuples

- CE N'EST PAS UNE LISTE OU UN TABLEAU
- Proche d'une `case class` dans le principe
- a utiliser localement (en interne d'une fonction) plutôt que comme retour: un **tuple** n'a pas de **nom** donc pas de **sens**
- conseil: ne pas dépasser des **tuple-3**, sinon on perd le **sens**

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les tuples

```scala
val pair = (1, true) // tuple-2, une paire
val triplet = (1, true, "plop") // tuple-3: un triplet

println(pair.\_2) // true
println(triplet.\_3) // "plop"
```

Notes:

```scala
(1, true) == (1, true)
((1, true), "plop") != (1, true,"plop")
```

##--##
<!-- .slide: class="sfeir-bg-pink exercice" -->
## Exercice

Faire un programme de **Todo**

1. Créer une todo avec un libellé
2. Terminer une todo

🚫 Utiliser `Boolean`

💡`extends` existe en Scala

Notes:

```scala
class Task
case object TODO extends Task
case object DONE extends Task

case class Todo(desc: String, state: Task = TODO) {
def done = Todo(desc, DONE)
}

val todo = Todo("Faire l'exercice")
println(todo)
println(todo.done)
```