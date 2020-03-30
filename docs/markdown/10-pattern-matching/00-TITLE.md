<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Pattern matching

1. Analysé le _motif_ d'une valeur
2. extraire des données
3. en faire quelque-chose

  ##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Pattern matching: comme un `switch`

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
"yes" match {
  case "yes" => println("Oui")
  case "no"  => println("Non")
}
</code></pre></div>

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Pattern matching: voir le motif (1)

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
def head(xs: List[String]): String =
  xs match {
    case x :: xs => s"Head = $x"
    case xs      => "empty list"
  }

println(head(List("a","b","c")))
println(head(List()))
</code></pre></div>

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Pattern matching: voir le motif (2)

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
case class Name(name: String)
case class Hero(name: Name, power: Int)

def print(hero: Hero) = hero match {
  case Hero(Name(name), power) => s"$name has power $power"
}

println(print(Hero(Name("foo"), 100)))
</code></pre></div>

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Pattern matching: voir le motif (3)

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
case class Hero(name: String, power: Int)

def print(hero: Hero) = {
  val Hero(name, power) = hero
  s"$name has power $power"
}

println(print(Hero("foo", 100)))
</code></pre></div>

Notes: 

ça marche aussi pour des 
```scala
val (x,y) = (1,2) // tuples
val head :: _ = List(1,2,3) // listes
```

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Pattern matching: l'ordre compte

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
def firstTwo(xs: List[String]): String =
  xs match {
    case x :: y :: xs => s"First two: $x, $y"
    case x :: xs      => s"Head = $x"
    case xs           => "empty list"
  }

println(firstTwo(List("a","b","c")))
println(firstTwo(List("foo")))
println(firstTwo(List()))
</code></pre></div>

##--##
<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->
# Pattern matching: plusieurs possibilités

On peut faire un `case` pour plusieurs valeurs

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
def isVoyel(c: Char) = c match {
  case 'a' | 'e' | 'i' | 'o' | 'u' => true
  case _ => false
}

println(
  s"""
     |a: ${isVoyel('a')}
     |b: ${isVoyel('b')}
     |""".stripMargin)
</code></pre></div>

##--##
<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->
# Pattern matching: plusieurs possibilités

On peut aussi utiliser `if` dans `case`

<div data-scalafiddle data-layout="h50"><pre><code data-trim data-noescape class="scala">
def isVoyel(c: Char) = {
  def isIn(x: Char) = List('a','e','i','o','u').contains(x) // on pourrait réduire la fonction  a cette ligne 😁
  
  c match {
    case char if isIn(char) => true
    case _ => false
  }
}

println(
  s"""
     |a: ${isVoyel('a')}
     |b: ${isVoyel('b')}
     |""".stripMargin)
</code></pre></div>

Notes:

On est d'accord que cette implémentation est *foireuse*, le `List().contains` est plus lisible !
C'est un exemple 😁
##--##

<!-- .slide: class="sfeir-bg-pink exercice" -->

## Exercice

Faire un programme de **FizzBuzz**

1. Le programme prend des nombres de 1 a 100
2. si le nombre est un multiple de `3` afficher **Fizz**
3. si le nombre est un multiple de `5` afficher **Buzz**
4. si le nombre est un multiple de `3` et `5` afficher **FizzBuzz**
5. Sinon afficher le nombre

🚫 Pas de `if`

Notes:

```scala
val result = for(x <- 1 to 100) yield
  (x % 3, x % 5) match {
    case (0,0) => "FizzBuzz"
    case (0, _) => "Fizz"
    case (_, 0) => "Buzz"
    case _ => x.toString
  }

println(result)
```