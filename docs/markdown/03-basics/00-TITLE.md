<!-- .slide: class="transition-white sfeir-bg-red" -->

# Les bases

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Hello World

<div data-scalafiddle data-layout="h50"> <pre ><code data-trim data-noescape class="scala">
object Main {
  def main(args: Array[String]): Unit = {
    println("Hello World")
  }
}
</code></pre></div>

Notes:
1. Lancer ce programme dans Intellij
2. Utiliser un argument `args(0)`
3. Utiliser le trait `App` (plus besoin du `main`)
4. utiliser des _string interpolation_: `s"Hello ${args(0)}`

##--##
<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les variables

## `val` vs `var`

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
val x = 1
x = 2; // compilation error
var y = 2
y = 3

println(s"x=$x, y=$y")
</code></pre></div>

Notes:

- On a tendance a privilégié l'immutabilité donc `val`
- Utiliser `var` pour une question de perf ou si c'est plus **lisible et compréhensible**

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les conditions

```scala
if(<condition>) {
    // ...
} else {
    // ...
}
```

Notes:

Comme en Java

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# C'est quoi une expression ?

Quelque chose qui est **évalué** et retourne une **valeur**

En **Java**:

```Java
String text;

if(isTrue("true")) {
    text = "it's true";
} else {
    text = "it's false";
}
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# C'est quoi une expression ?

Quelque chose qui est **évalué** et retourne une **valeur**

En **Scala**:

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
def isTrue(s: String) = true

val text = if(isTrue("true")) {
"it's true"
} else {
"it's false"
}

println(text)
</code></pre></div>