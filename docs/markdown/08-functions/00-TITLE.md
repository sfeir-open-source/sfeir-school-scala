<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les Fonctions

## Avec des symboles

```scala
def >>>(s1: String, s2: String) = s"$s1 >>> $s2"

val s = >>>("foo","bar")
println(s)

case class Foo(s: String) {
def +(other: Foo) = Foo(s"$s + ${other.s}")
}

val foo1 = Foo("foo").+(Foo("bar"))
println(foo1)

val foo2 = Foo("foo") + Foo("bar") + Foo("baz")
println(foo2)
```

Notes:

- plus utile dans une `(case) class`
- utiliser pour les opérations mathématiques: `+` est une fonction par exemple !
- attention a la syntaxe sans point _infixe_ vs _prefixe_
- attention a la lisibilité ! Que veut dire `>>>` ?
- A réserver pour des librairies plutôt que des app et que le sens de l'opérateur soit partagé

##--##

<!-- .slide: class="sfeir-bg-white-1 with-code-dark big-code" -->

# Les Fonctions

# Comme opérateur

```scala
case class Test(label: String) {
  def should(assert: Boolean) = println(s"$label is $assert")
}

Test("1 + 1 == 2") should {
1 + 1 == 2
}

Test("1 + 1 == 3") should {
1 + 1 == 3
}
```