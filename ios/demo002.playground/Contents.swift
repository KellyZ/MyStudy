//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"

print(str)

let hello = "world"

//hello = "haha"

var str1: String?
var str2: String?

// 整型，浮点型，布尔型，字符串, 字符, 元祖， 复合
// Int, Float, Bool, Double, String, Character
var num :Int = 12
var numF :Float = 12.0
var isTrue :Bool = true
var dollar :Double = 12.222

var w = 13.02
var h:Character = "h"


var (name,age) = ("kelly",23)

name = "haha"
age = 18
print(name,age)

var gf = (name:"zhangsan",age:45)

gf.name
gf.age
gf.0
gf.1


var students = [12,34,23,45]
students[0]
students.append(18)
students.insert(89, at: 0)

students.isEmpty

var erwei = Array<Array<Int>>()

var myDic = Dictionary<String,String>()

myDic["kelly"]="man"

myDic

struct StudentStruct {
    var name: String
    var age: Int
    var score: Int
}

var kelly = StudentStruct(name:"kelly",age:18,score:100)

kelly

kelly.name = "panda"
kelly.name


2...4

2..<4

if 1==2{
    print("yes")
}else{
    print("no")
}

func hello(param:Int, param2:String) -> String {
    
    return ""
}








