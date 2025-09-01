fun printHello(){
    println("Hello world")
 

    // Arithmetic operations
    println(2.times(3))
    println(2*3)
    3.5.plus(4)
    2.4.div(2)

    // Variable declaration with type
    val i: Int = 6
    // Variable declaration without type
    val b1 = i.toByte()

    // Conversions
    val b2: String = b1.toString()
    val b3: Int = b2.toInt()
    val b4: Double = b2.toDouble()

    

    // mutable
    var fish = 1
    fish = 2
    // immutable
    val aquarium = 1
    // aquarium = 2

    // Create a string template
    val numOfFish = 5
    val numOfPlants = 12
    val ans = "I have $numOfFish fish and $numOfPlants plants"
    println(ans) 
}

// printHello()


fun conditionsAndBooleans(){
    val fish = 50
    val plants = 23

    if(fish > plants){
        println("Good ratio!")
    }else{
        println("Unhealthy")
    }


    if(fish in 1..100){
        println(fish)
    }

    if(fish == 0){
        println("Empty tank")
    }else if(fish < 40){
        println("Got fish")
    }else{
        println("That's a lot of fish!")
    }


    when(fish){
        0 -> println("Empty tank")
        in 1..39 -> println("Got fish!")
        else -> println("That's a lot of fish")
    }
}

// conditionsAndBooleans()


//  NOT UNDERSTOOD
// fun nullability(){
//     var rocks : Int =  null
//     // var marbles : Int? = null

//     var fishFood = 6

//     if (fishFood != null){
//         fishFood = fishFood.dec()
//         println(fishFood)
//     }
//     // Another way
//     // fishFood = fishFood?.desc() ?:0

//     // val len = s!!.length   // throws NullPointerException if s is null

    
// }

// nullability()



fun myArrays(){
    val letters = listOf("a","b","c")
    println(letters)
    // Mutable array
    val letters2 = mutableListOf("a","b","c")
    letters2.remove("c")

    // mixed array
    val mix = arrayOf("fish",2)

    // Number array
    val numbers = intArrayOf(1,2,3)

    // Combine 2 arrays
    val numbers2 = intArrayOf(1,2,3)
    val numbers3 = numbers + numbers2

    println(java.util.Arrays.toString(numbers3))
}

myArrays()


fun loopingArrays(){
    val letters = arrayOf("a","b","c")
    for(element in letters){
        println(element + " ")
    }

    for((index,element) in letters.withIndex()){
        println("Item at $index is $element\n")
    }


    for (i in 1..5) print(i)

    for (i in 5 downTo 1) print(i)

    for (i in 3..6 step 2) print(i)

    for (i in 'd'..'g') print (i)
}

loopingArrays()