---
title: mathjax-support-demo
date: 2016-11-27 02:38:55
mathjax: true
tags:
---

### Usage

To enable mathjax, just add `mathjax: true` at **Front-matte** like this:

```
---
title: mathjax-support-demo
date: 2016-11-27 02:38:55
mathjax: true
tags:
---
```

then you can write mathjax scripts in post

### MathJax-Source-Code

```
\begin{align}
\theta\_0 & := \theta\_0 - \alpha\frac{\partial}{\partial\theta\_0}J(\theta\_0,\theta\_1) \\\\
& = \theta\_0 - \alpha\frac{\partial}{\partial\theta\_0} \frac{1}{2m} \sum\_{i=1}^{m}(h\_\theta(x^{(i)}) - y^{(i)})^2 \\\\
& = \theta\_0 - (\alpha \frac{1}{2m} \* 2 \* \sum\_{i=1}^{m}(h\_\theta(x^{(i)}) - y^{(i)})) \* \frac{\partial}{\partial\theta\_0}(h\_\theta(x^{(i)}) - y^{(i)}) \\\\
& = \theta\_0 - \frac{\alpha}{m}  * \sum\_{i=1}^{m}(h\_\theta(x^{(i)}) - y^{(i)})
\end{align}
```

### Render-Result

\begin{align}
\theta\_0 & := \theta\_0 - \alpha\frac{\partial}{\partial\theta\_0}J(\theta\_0,\theta\_1) \\\\
& = \theta\_0 - \alpha\frac{\partial}{\partial\theta\_0} \frac{1}{2m} \sum\_{i=1}^{m}(h\_\theta(x^{(i)}) - y^{(i)})^2 \\\\
& = \theta\_0 - (\alpha \frac{1}{2m} \* 2 \* \sum\_{i=1}^{m}(h\_\theta(x^{(i)}) - y^{(i)})) \* \frac{\partial}{\partial\theta\_0}(h\_\theta(x^{(i)}) - y^{(i)}) \\\\
& = \theta\_0 - \frac{\alpha}{m}  * \sum\_{i=1}^{m}(h\_\theta(x^{(i)}) - y^{(i)})
\end{align}
