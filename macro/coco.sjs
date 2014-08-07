macro :: {
  rule infix {
    $lhs:ident | [$rhs:expr]
  } => {
    $lhs.prototype[$rhs]
  }
  rule infix {
    $lhs:expr | $rhs:expr
  } => {
    $lhs.prototype.$rhs
  }
}

export ::;

macro @ { 
  rule {
    $x:ident
  } => {
    this.$x
  }
  rule {
  } => {
    this
  }
}

export @;
