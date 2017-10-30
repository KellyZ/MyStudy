## 基本数据类型

- 布尔值 True，False    
- 整数，浮点数
- 字符串
- 空值None
- 没有常量，习惯用大写变量名表示

## 基本运算
- 加减乘除 10/3=3.33333333
- 地板除 // ， 10//3=3
- 取余 %，10%3=1
- 布尔运算 and，or，not

## 字符编码

> ASCII -> Unicode(两个字节) -> UTF8(可变长编码)

- .py文件以utf8保存：# -*- coding: utf-8 -*-

## 其他数据类型
- bytes，Python对bytes类型的数据用带b前缀的单引号或双引号表示
```
    x = b'ABC'
    
   # 以Unicode表示的str通过encode()方法可以编码为指定的bytes
   >>> 'ABC'.encode('ascii')
   b'ABC'
   >>> '中文'.encode('utf-8')
   b'\xe4\xb8\xad\xe6\x96\x87'
   >>> '中文'.encode('ascii')
   Traceback (most recent call last):
     File "<stdin>", line 1, in <module>
   UnicodeEncodeError: 'ascii' codec can't encode characters in position 0-1: ordinal not in range(128)
   
   # 如果我们从网络或磁盘上读取了字节流，那么读到的数据就是bytes。要把bytes变为str，就需要用decode()方法
   >>> b'ABC'.decode('ascii')
   'ABC'
   >>> b'\xe4\xb8\xad\xe6\x96\x87'.decode('utf-8')
   '中文'
```
- list和tuple是Python内置的有序集合，一个可变，一个不可变。
- 


## 内置函数和对象
- 对于单个字符的编码，Python提供了ord()函数获取字符的整数表示，chr()函数把编码转换为对应的字符
```  
  >>> ord('A')
  65
  >>> ord('中')
  20013
  >>> chr(66)
  'B'
  >>> chr(25991)
  '文'
  
  >>> '\u4e2d\u6587'
  '中文'
```
- print
- len
- 字符串格式化　'Hello, %s' % 'world'


