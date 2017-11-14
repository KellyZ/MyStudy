## numpy tutorial

### 介绍

* 一个强大的N维数组对象Array，比Python自身的嵌套列表结构要高效的多；
* 比较成熟的函数库；
* 实用的线性代数、傅里叶变换和随机数生成函数；
* 和稀疏矩阵运算包scipy配合实用更加方便；

### 手册

中文手册参考地址
> http://python.usyiyi.cn/translate/NumPy_v111/index.html

1. NumPy的主要对象时同类型的多维数组，维度称为*轴*，轴的数目称为*秩rank*
2. NumPy的数组的类称为ndarray，别名array。请注意，numpy.array和Python类库中的array.array不同。
3. ndarray有以下重要的属性：

   - ndarray.ndim: 维度（轴）的个数， 维度的理解？
   - ndarray.shape: 对于具有n行和m列的矩阵，shape就是(n,m)
   - ndarray.size: 数组元素的总数
   - ndarray.dtype: 元素类型的对象，如numpy.int32,numpy.float64
   - ndarray.itemsize: 每个元素的字节大小，如numpy.float64是8（=64/8)
   - ndarray.data: 数组的实际元素缓存
    
    属性示例：见python101_example01
4. 创建数组的方式

   - np.array()创建
   - np.zeros, np.ones, np.empty, np.arange, np.linspace创建
5. 基本操作

   - 数组上算术运算符使用元素级别，将创建一个新数组并用结果填充
   - 特别说明：矩阵乘积
   - 某些操作（如+=何*=）可以修改现有数组，而不是创建新数组
   - 类的方法操作，如a.sum,a.max,a.min
6. 通用函数

   - sin, cos, exp, sqrt
   - all, any, apply_along_axis, argmax, argmin, argsort, average, bincount, ceil, clip, conj, corrcoef, cov, cross, cumprod, cumsum, diff, dot, floor, inner, inv, lexsort, max, maximum, mean, median, min, minimum, nonzero, outer, prod, re, round, sort, std, sum, trace, transpose, var, vdot, vectorize, where
7. 索引，切片和迭代

   - 