# Java សំណួរ និង ចម្លើយ (Q&A)

- [មេរៀនទី១ Inheritance](#មេរៀនទី១-inheritance)
- [មេរៀនទី២ Overriding](#មេរៀនទី២-overriding)
- [មេរៀនទី៣ Polymorphism](#មេរៀនទី៣-polymorphism)
- [មេរៀនទី៤ Abstraction](#មេរៀនទី៤-abstraction)
- [មេរៀនទី៥ Encapsulation](#មេរៀនទី៥-encapsulation)
- [មេរៀនទី៦ Interface](#មេរៀនទី៦-interface)

---

## មេរៀនទី១ Inheritance

**Q1. Inheritance គឺជាអ្វី?**
អនុញ្ញាតឲ្យ Class មួយទទួលយក Property (Fields, Methods) ពី Class មួយទៀតមកប្រើ ដោយមិនចាំបាច់សរសេរ Code ឡើងវិញ។ ក្នុង C# ប្រើសញ្ញា `:` នៅ Class Declaration។

**Q2. តើ Super Class និង Sub Class ហៅម្យ៉ាងទៀតថាអ្វី?**
- Super Class = Base Class = Parent Class (Class ដែលឲ្យ)
- Sub Class = Derived Class = Child Class (Class ដែលទទួល)

**Q3. C# មាន Keyword `extends` ឬ `implements` ដែរឬទេ?**
គ្មានទេ។ C# ប្រើសញ្ញា `:` សម្រាប់ទាំង Class Inheritance និង Interface Inheritance។

**Q4. តើ Class មួយអាច Inherit ពី Class ប៉ុន្មាន? អាច Implement Interface ប៉ុន្មាន?**
Inherit ពី Class បានតែ **មួយ** ប៉ុណ្ណោះ ប៉ុន្តែ Implement Interface បាន **មួយ ឬច្រើន**។

**Q5. បើ Inherit ពី Class និង Interface ក្នុងពេលតែមួយ ត្រូវសរសេរតាមលំដាប់បែបណា?**
Base Class មុនគេ រួចទើប Interfaces បន្តបន្ទាប់ ដោយបំបែកនឹង `,`។
```csharp
public class Dog : Animal, IPet, IPlayable { }
```

**Q6. ចូរពន្យល់ IS-A និង HAS-A Relationship។**
- **IS-A**៖ ទំនាក់ទំនង Sub Class ↔ Super Class (Inheritance)។ ឧ. `Dog : Mammal` → Dog IS-A Mammal។
- **HAS-A**៖ Class មួយមាន Instance Variable យោងទៅ Class មួយទៀត។ ឧ. `Dog` មាន `private Legs dogLegs;` → Dog HAS-A Legs។

**Q7. តើ Operator `is` ប្រើសម្រាប់អ្វី? ត្រឡប់តម្លៃប្រភេទអ្វី?**
ត្រួតពិនិត្យថា Object ជាប្រភេទនៃ Class ឬ Interface ណាមួយឬទេ ហើយត្រឡប់ជា `bool` (`true`/`false`)។

**Q8. លទ្ធផលនៃ Code ខាងក្រោមជាអ្វី?**
```csharp
interface IAnimal { }
class Mammal : IAnimal { }
class Dog : Mammal { }
// Mammal m = new Mammal(); Dog d = new Dog();
Console.WriteLine(m is IAnimal);
Console.WriteLine(d is Mammal);
Console.WriteLine(d is IAnimal);
```
`true`, `true`, `true` — Mammal implement IAnimal, Dog inherit ពី Mammal, ហើយ Dog ក៏ជា IAnimal ដោយប្រយោល។

**Q9. លទ្ធផលនៃ Code ខាងក្រោមជាអ្វី?**
```csharp
class Vehicle {
    public void Start() { Console.WriteLine("Vehicle starts"); }
}
class Car : Vehicle {
    public void Drive() { Console.WriteLine("Car drives"); }
}
class Program {
    static void Main() {
        Car car = new Car();
        car.Start();
        car.Drive();
    }
}
```
```
Vehicle starts
Car drives
```
`Car` inherit `Start()` ពី `Vehicle` ដូច្នេះហៅបានដោយផ្ទាល់ ហើយក៏មាន `Drive()` ផ្ទាល់ខ្លួនដែរ។

**Q10. Code នេះមានកំហុសអ្វី? ត្រូវកែយ៉ាងដូចម្តេច?**
```csharp
class Animal { }
class Pet { }
class Dog : Animal, Pet { }
```
C# មិនអនុញ្ញាតឲ្យ Inherit ពី Class ច្រើនទេ (Compile Error) ។ `Pet` ជា Class មិនមែន Interface។ ដំណោះស្រាយ៖ ធ្វើ `Pet` ជា Interface ឬប្រើ HAS-A។
```csharp
class Animal { }
interface IPet { }
class Dog : Animal, IPet { }   // Base Class មុន ហើយ Interface តាមក្រោយ
```

**Q11. លទ្ធផលនៃ Code ខាងក្រោមជាអ្វី?**
```csharp
class Animal { }
class Dog : Animal { }
class Cat : Animal { }

Animal a = new Dog();
Console.WriteLine(a is Dog);
Console.WriteLine(a is Cat);
Console.WriteLine(a is Animal);
```
`true`, `false`, `true` — Object ពិតជា `Dog` (ដែលជា `Animal` ដែរ) ប៉ុន្តែមិនមែន `Cat` ទេ។

**Q12. [ពហុជម្រើស] តើ C# ប្រើសញ្ញា ឬ Keyword អ្វីសម្រាប់ Inheritance?**
- **A.** extends
- **B.** implements
- **C.** inherits
- **D.** `:`

**ចម្លើយ៖ D** — C# ប្រើសញ្ញា `:` សម្រាប់ទាំង Class និង Interface។

**Q13. [ពហុជម្រើស] Class មួយក្នុង C# អាច Inherit ពី Class ប៉ុន្មាន?**
- **A.** ១ Class
- **B.** ២ Class
- **C.** គ្មានកំណត់
- **D.** មិនអាច Inherit បាន

**ចម្លើយ៖ A** — C# គាំទ្រ Single Class Inheritance ប៉ុណ្ណោះ (Interface អាចច្រើន)។

**Q14. [ពហុជម្រើស] ការប្រកាសណាមួយត្រឹមត្រូវ?**
- **A.** `class Dog : IPet, Animal`
- **B.** `class Dog : Animal, IPet`
- **C.** `class Dog extends Animal`
- **D.** `class Dog implements IPet`

**ចម្លើយ៖ B** — Base Class ត្រូវនៅមុន រួចទើប Interface។

**Q15. [ពហុជម្រើស] ទំនាក់ទំនង “Car HAS-A Engine” ត្រូវបង្ហាញដោយរបៀបណា?**
- **A.** `class Car : Engine`
- **B.** Car មាន Field `private Engine engine;`
- **C.** `interface Car`
- **D.** `abstract class Car`

**ចម្លើយ៖ B** — HAS-A គឺ Class មួយមាន Instance Variable យោងទៅ Class មួយទៀត។

**Q16. [ពហុជម្រើស] ឈ្មោះណាមួយមិនមែនជាឈ្មោះរបស់ Super Class?**
- **A.** Base Class
- **B.** Parent Class
- **C.** Super Class
- **D.** Derived Class

**ចម្លើយ៖ D** — Derived Class គឺជាឈ្មោះរបស់ Sub Class។

**សរុប៖ ១៦ សំណួរ និងចម្លើយ**

---

## មេរៀនទី២ Overriding

**Q1. Overriding គឺជាអ្វី? មានប្រយោជន៍អ្វី?**
ជាការយក Method របស់ Super Class មកកំណត់ Functionality ថ្មីក្នុង Sub Class។ ប្រយោជន៍៖ ឲ្យ Sub Class មាន Behavior ជាក់លាក់តាមតម្រូវការ។

**Q2. ដើម្បី Override Method ក្នុង C# តើ Super Class និង Sub Class ត្រូវប្រើ Keyword អ្វី?**
Super Class ប្រកាស `virtual` (ឬ `abstract`) ហើយ Sub Class ប្រើ `override`។ C# មិនមែន virtual ដោយស្វ័យប្រវត្តិដូច Java ទេ។
```csharp
public class Animal { public virtual void Move() { } }
public class Dog : Animal { public override void Move() { } }
```

**Q3. បើ Sub Class សរសេរ Method ឈ្មោះដូចគ្នា ដោយគ្មាន `override` តើមានអ្វីកើតឡើង?**
Method នោះគ្រាន់តែ **Hide** Method របស់ Super Class (`new`) មិនមែន Override ទេ។ Compiler នឹងផ្តល់ Warning ឲ្យប្រើ `new` ឬ `override`។

**Q4. រាយបញ្ជីច្បាប់ (Rules) នៃការ Override។**
- ឈ្មោះ, Argument list និង Return Type ត្រូវដូចគ្នា
- Access Level ត្រូវដូចគ្នា
- Instance Method ប៉ុណ្ណោះដែល Override បាន
- Sealed Method និង Method ដែលគ្មាន `virtual` មិនអាច Override បាន
- Static Method និង Constructor មិនអាច Override បាន

**Q5. Sub Class ក្នុង Assembly ផ្សេងពី Super Class អាច Override Method បែបណាខ្លះ?**
បានតែ `public virtual` ឬ `protected virtual`។ ចំណែក `internal virtual` Override បានតែក្នុង Assembly ដូចគ្នា។

**Q6. តើ `base` Keyword ប្រើសម្រាប់អ្វី?**
ប្រើ Access Member របស់ Super Class ពី Sub Class ឧ. `base.Move();` ដើម្បីហៅ Method ដើមមុននឹងបន្ថែមការងារថ្មី។

**Q7. លទ្ធផលនៃ Code ខាងក្រោមជាអ្វី?**
```csharp
Animal b = new Dog();   // Dog.Move() ហៅ base.Move() រួចបោះពុម្ពបន្ថែម
b.Move();
```
```
Animals can move
Dogs can walk and run
```
Reference ជា `Animal` ប៉ុន្តែ Object ជា `Dog` ដូច្នេះ Method របស់ Dog ត្រូវដំណើរការ ហើយ `base.Move()` ហៅ Method របស់ Animal មុន។

**Q8. លទ្ធផលនៃ Code ខាងក្រោមជាអ្វី? ហេតុអ្វី?**
```csharp
class A { public virtual void Show() { Console.WriteLine("A"); } }
class B : A { public override void Show() { Console.WriteLine("B"); } }
class C : A { public new void Show() { Console.WriteLine("C"); } }

A x = new B();
A y = new C();
x.Show();
y.Show();
```
```
B
A
```
`B` ប្រើ `override` → ហៅតាមប្រភេទ Object ពិត (`B`)។ `C` ប្រើ `new` (Hide) → ហៅតាមប្រភេទ Reference (`A`) ។

**Q9. Code នេះមានកំហុសអ្វី? ត្រូវកែយ៉ាងដូចម្តេច?**
```csharp
class Animal { public void Move() { Console.WriteLine("Animal moves"); } }
class Dog : Animal { public override void Move() { Console.WriteLine("Dog runs"); } }
```
Compile Error៖ `Animal.Move()` មិនមែន `virtual` ទេ ដូច្នេះ Override មិនបាន។ ដំណោះស្រាយ៖ ប្តូរទៅ `public virtual void Move()` ក្នុង `Animal`។

**Q10. សរសេរ Code ឲ្យ `Manager` Override `CalculateSalary()` ដោយប្រើ `base` ហើយបូកប្រាក់រង្វាន់ 200។ ប្រសិនបើ `Employee` ផ្តល់ 500 តើលទ្ធផលប៉ុន្មាន?**
```csharp
class Employee {
    public virtual double CalculateSalary() { return 500; }
}
class Manager : Employee {
    public override double CalculateSalary() {
        return base.CalculateSalary() + 200;
    }
}

Employee e = new Manager();
Console.WriteLine(e.CalculateSalary());   // 700
```

**Q11. [ពហុជម្រើស] Super Class ត្រូវប្រើ Keyword អ្វី ដើម្បីអនុញ្ញាតឲ្យ Method ត្រូវបាន Override?**
- **A.** `override`
- **B.** `virtual`
- **C.** `sealed`
- **D.** `static`

**ចម្លើយ៖ B** — Super Class ប្រកាស `virtual` ហើយ Sub Class ប្រើ `override`។

**Q12. [ពហុជម្រើស] Keyword ណាប្រើហៅ Method របស់ Super Class ពីក្នុង Sub Class?**
- **A.** `super`
- **B.** `this`
- **C.** `base`
- **D.** `parent`

**ចម្លើយ៖ C** — C# ប្រើ `base` (មិនមែន `super` ដូច Java)។

**Q13. [ពហុជម្រើស] Method ប្រភេទណាមិនអាច Override បាន?**
- **A.** `virtual` Method
- **B.** `abstract` Method
- **C.** `static` Method
- **D.** Method ដែលមាន `override`

**ចម្លើយ៖ C** — Static Method មិនអាច Override បានទេ។

**Q14. [ពហុជម្រើស] ប្រសិនបើ Sub Class ប្រើ `new` លើ Method ដែលមានឈ្មោះដូច Super Class នោះហៅថា?**
- **A.** Overriding
- **B.** Hiding
- **C.** Overloading
- **D.** Abstraction

**ចម្លើយ៖ B** — `new` គ្រាន់តែ Hide Method របស់ Super Class។

**Q15. [ពហុជម្រើស] ចំណុចណាត្រឹមត្រូវអំពីច្បាប់ Override?**
- **A.** Return Type អាចខុសគ្នា
- **B.** Access Level ត្រូវតែដូចគ្នា
- **C.** Constructor អាច Override បាន
- **D.** Static Method អាច Override បាន

**ចម្លើយ៖ B** — Access Level, ឈ្មោះ, Parameter និង Return Type ត្រូវដូចគ្នា។

**សរុប៖ ១៥ សំណួរ និងចម្លើយ**

---

## មេរៀនទី៣ Polymorphism

**Q1. Polymorphism មានន័យដូចម្តេច?**
មកពីភាសាក្រិច៖ _Poly_ = ច្រើន, _morph_ = ទម្រង់ → Object/Method មួយមានច្រើនទម្រង់ គឺ Method ឈ្មោះដូចគ្នា ប៉ុន្តែធ្វើការខុសគ្នា។

**Q2. Polymorphism ចែកជាប៉ុន្មានប្រភេទ?**
២ គឺ **Overloading** និង **Overriding**។

**Q3. ចូរប្រៀបធៀប Overloading និង Overriding។**

| | Overloading | Overriding |
|---|---|---|
| ឈ្មោះ Method | ដូចគ្នា | ដូចគ្នា |
| Signature | **ខុសគ្នា** (Parameter ខុស) | **ដូចគ្នា** |
| កន្លែងប្រើ | Class តែមួយ | Super Class ↔ Sub Class |
| Keyword | មិនត្រូវការ | `virtual` / `override` |

**Q4. តើ Code នេះជា Overloading ឬ Overriding? ហេតុអ្វី?**
```csharp
public void Disp(char c) { }
public void Disp(char c, int num) { }
```
ជា **Overloading** ព្រោះឈ្មោះដូចគ្នាតែ Signature (ចំនួន Parameter) ខុសគ្នា។

**Q5. លទ្ធផលនៃ Code ខាងក្រោម?**
```csharp
Animal a = new Animal();
Animal b = new Dog();
a.Move();
b.Move();
```
`a.Move()` → "Animals can move" ; `b.Move()` → "Dogs can walk and run" (Method ដែលដំណើរការអាស្រ័យលើប្រភេទ Object ពិត មិនមែន Reference)។

**Q6. ក្នុងឧទាហរណ៍ Shape, Rectangle, Circle តើ Polymorphism ដំណើរការបែបណា?**
Shape មាន `virtual Area()`។ Rectangle Override ជា `Length * Width` ហើយ Circle Override ជា `3.14 * R * R`។ ហៅ `Area()` តាម Reference `Shape` នឹងគណនាតាមរូបមន្តរបស់ Object ពិត។

**Q7. (កែ Code) Code ក្នុង Slide សរសេរ `public overriding int Area()` តើត្រូវទេ?**
មិនត្រូវទេ។ Keyword ត្រឹមត្រូវគឺ `override` ហើយ Return Type ត្រូវដូចគ្នានឹង `virtual`៖
```csharp
public class Shape { public virtual double Area() => 0; }
public class Rectangle : Shape {
    public int Length, Width;
    public override double Area() => Length * Width;
}
public class Circle : Shape {
    public double R;
    public override double Area() => 3.14 * R * R;
}
```

**Q8. Method Overloading៖ តើ Code នេះបោះពុម្ពអ្វីខ្លះ?**
```csharp
class Calc {
    public int Add(int a, int b)           { return a + b; }
    public double Add(double a, double b)  { return a + b; }
    public int Add(int a, int b, int c)    { return a + b + c; }
}

Calc c = new Calc();
Console.WriteLine(c.Add(2, 3));
Console.WriteLine(c.Add(2.5, 1.5));
Console.WriteLine(c.Add(1, 2, 3));
```
```
5
4
6
```
Compiler ជ្រើស Method តាមចំនួន និងប្រភេទ Parameter (Compile-time Polymorphism)។

**Q9. លទ្ធផលនៃ Code ខាងក្រោមជាអ្វី?**
```csharp
class Shape     { public virtual void Draw() { Console.WriteLine("Draw Shape"); } }
class Rectangle : Shape { public override void Draw() { Console.WriteLine("Draw Rectangle"); } }
class Circle    : Shape { public override void Draw() { Console.WriteLine("Draw Circle"); } }

Shape[] shapes = { new Shape(), new Rectangle(), new Circle() };
foreach (Shape s in shapes) s.Draw();
```
```
Draw Shape
Draw Rectangle
Draw Circle
```
Reference ទាំងអស់ជា `Shape` ប៉ុន្តែ Method ដែលដំណើរការអាស្រ័យលើ Object ពិត (Runtime Polymorphism)។

**Q10. Code នេះមានកំហុសអ្វី?**
```csharp
class Test {
    public int GetValue()    { return 1; }
    public double GetValue() { return 1.5; }
}
```
Compile Error៖ Overloading ត្រូវការ Signature ខុសគ្នា (ឈ្មោះ + Parameter) ។ ការខុសគ្នាត្រឹម **Return Type** មិនគ្រប់គ្រាន់ទេ។ ត្រូវប្តូរឈ្មោះ ឬបន្ថែម/ប្តូរ Parameter។

**Q11. [ពហុជម្រើស] Polymorphism ចែកជាប្រភេទអ្វីខ្លះ?**
- **A.** Inheritance និង Encapsulation
- **B.** Overloading និង Overriding
- **C.** Abstraction និង Interface
- **D.** Class និង Object

**ចម្លើយ៖ B** — Polymorphism មាន ២ ប្រភេទ៖ Overloading និង Overriding។

**Q12. [ពហុជម្រើស] Method Overloading ត្រូវមានអ្វីខុសគ្នា?**
- **A.** Return Type តែមួយ
- **B.** Signature (ប្រភេទ/ចំនួន Parameter)
- **C.** Access Modifier តែមួយ
- **D.** ឈ្មោះ Class

**ចម្លើយ៖ B** — ឈ្មោះដូចគ្នា តែ Signature ខុសគ្នា។

**Q13. [ពហុជម្រើស] Runtime Polymorphism ក្នុង C# សម្រេចបានដោយ?**
- **A.** `virtual` និង `override`
- **B.** Overloading
- **C.** `static`
- **D.** `const`

**ចម្លើយ៖ A** — Method ដែលដំណើរការត្រូវបានកំណត់នៅពេល Run តាម Object ពិត។

**Q14. [ពហុជម្រើស] `Animal a = new Dog(); a.Move();` បើ `Dog` Override `Move()` តើ Method របស់ Class ណាដំណើរការ?**
- **A.** `Animal`
- **B.** `Dog`
- **C.** Compile Error
- **D.** គ្មានមួយណា

**ចម្លើយ៖ B** — Object ពិតជា `Dog` ដូច្នេះ `Dog.Move()` ដំណើរការ។

**Q15. [ពហុជម្រើស] ពាក្យ “Poly” ក្នុងភាសាក្រិច មានន័យថា?**
- **A.** មួយ
- **B.** ច្រើន
- **C.** ពីរ
- **D.** លាក់

**ចម្លើយ៖ B** — Poly = ច្រើន, morph = ទម្រង់។

**សរុប៖ ១៥ សំណួរ និងចម្លើយ**

---

## មេរៀនទី៤ Abstraction

**Q1. Abstraction គឺជាអ្វី? អាចសម្រេចបានតាមរយៈអ្វីខ្លះ?**
ជាការលាក់ព័ត៌មានលម្អិត ហើយបង្ហាញតែអ្វីដែលចាំបាច់។ សម្រេចបានតាមរយៈ **Abstract Class** ឬ **Interface**។

**Q2. Abstract Class គឺជាអ្វី?**
Class ដែលប្រកាសជា `abstract`។ វាអាចមាន ឬគ្មាន Abstract Method ក៏បាន។

**Q3. តើអាចបង្កើត Object ពី Abstract Class (`new Shape()`) បានទេ?**
មិនបានទេ (Instantiate មិនបាន) ប៉ុន្តែអាចប្រើជា Reference ដើម្បីចង្អុល Object របស់ Subclass បាន ឧ. `Shape s = new Rectangle();`។

**Q4. Abstract Method គឺជាអ្វី? សរសេរយ៉ាងដូចម្តេច?**
Method ដែលប្រកាសជា `abstract` ហើយ **គ្មាន Body** (គ្មាន `{ }`) បញ្ចប់ដោយ `;`។
```csharp
public abstract double Area();
```

**Q5. បើ Class មួយមាន Abstract Method តើត្រូវធ្វើដូចម្តេច?**
Class នោះត្រូវប្រកាសជា `abstract class` ដែរ។

**Q6. Subclass ធម្មតា ត្រូវធ្វើអ្វីជាមួយ Abstract Method របស់ Parent?**
ត្រូវ Implement (`override`) **ទាំងអស់**។ បើមិន Implement ទាំងអស់ Subclass នោះត្រូវប្រកាសជា `abstract` ផងដែរ។

**Q7. តើ Abstract Class អាចមាន Regular Method (មាន Body) បានទេ?**
បាន ឧ. `sleep()` ក្នុង `Animal` ហើយ Subclass (`Pig`) អាចហៅបានដោយផ្ទាល់ រួមជាមួយ `animalSound()` ដែលត្រូវ Override។

**Q8. Code នេះមានកំហុសអ្វី?**
```csharp
abstract class Animal { public abstract void Sound(); }
class Cat : Animal { }
```
`Cat` ជា Class ធម្មតា ប៉ុន្តែមិនបាន Implement `Sound()` → Compile Error។ ត្រូវ `override Sound()` ឬប្រកាស `Cat` ជា `abstract`។

**Q9. លទ្ធផលនៃ Code ខាងក្រោមជាអ្វី?**
```csharp
abstract class Animal {
    public abstract void Sound();
    public void Sleep() { Console.WriteLine("Zzz"); }
}
class Dog : Animal { public override void Sound() { Console.WriteLine("Woof"); } }
class Cat : Animal { public override void Sound() { Console.WriteLine("Meow"); } }

Animal[] animals = { new Dog(), new Cat() };
foreach (Animal a in animals) {
    a.Sound();
    a.Sleep();
}
```
```
Woof
Zzz
Meow
Zzz
```

**Q10. Code នេះមានកំហុសអ្វី? ត្រូវកែយ៉ាងដូចម្តេច?**
```csharp
abstract class Shape { public abstract double Area(); }

Shape s = new Shape();
```
Compile Error៖ មិនអាច `new` Abstract Class បានទេ។ ត្រូវបង្កើត Object ពី Subclass៖
```csharp
class Square : Shape {
    public double Side;
    public override double Area() { return Side * Side; }
}
Shape s = new Square { Side = 4 };
Console.WriteLine(s.Area());   // 16
```

**Q11. សរសេរ Abstract Class `Employee` ដែលមាន Abstract Method `GetSalary()` និង Regular Method `Display()` រួចបង្កើត Subclass `Teacher`។**
```csharp
abstract class Employee {
    public string Name;
    public abstract double GetSalary();
    public void Display() {
        Console.WriteLine(Name + ": $" + GetSalary());
    }
}
class Teacher : Employee {
    public override double GetSalary() { return 400; }
}

Employee t = new Teacher { Name = "Sok" };
t.Display();   // Sok: $400
```

**Q12. [ពហុជម្រើស] អ្វីខាងក្រោមត្រឹមត្រូវអំពី Abstract Class?**
- **A.** អាច `new` បាន
- **B.** អាចមានទាំង Abstract Method និង Regular Method
- **C.** មិនអាចមាន Method ធម្មតា
- **D.** មិនអាចជា Base Class

**ចម្លើយ៖ B** — Abstract Class មិនអាច Instantiate បានទេ តែអាចមាន Method ទាំងពីរប្រភេទ។

**Q13. [ពហុជម្រើស] Abstract Method ត្រូវតែ?**
- **A.** មាន Body
- **B.** គ្មាន Body ហើយបញ្ចប់ដោយ `;`
- **C.** ជា `private`
- **D.** ជា `static`

**ចម្លើយ៖ B** — Abstract Method គ្មាន Implementation។

**Q14. [ពហុជម្រើស] Subclass ធម្មតា ដែល Inherit ពី Abstract Class ត្រូវធ្វើអ្វី?**
- **A.** មិនចាំបាច់ធ្វើអ្វី
- **B.** Implement Abstract Method ទាំងអស់
- **C.** ប្រកាសជា `sealed`
- **D.** ប្រកាសជា Interface

**ចម្លើយ៖ B** — បើមិន Implement ទាំងអស់ ត្រូវប្រកាស Subclass ជា `abstract` ផងដែរ។

**Q15. [ពហុជម្រើស] ប្រយោគណាត្រឹមត្រូវ?**
- **A.** `new Shape()` ត្រូវបានអនុញ្ញាតបើ Shape ជា Abstract
- **B.** Class ដែលមាន Abstract Method ត្រូវជា Abstract Class
- **C.** Abstract Method អាចមាន Body
- **D.** Abstract Class មិនអាចជា Reference បាន

**ចម្លើយ៖ B** — Class ដែលមាន Abstract Method ត្រូវប្រកាសជា `abstract`។

**Q16. [ពហុជម្រើស] Abstraction ក្នុង C# អាចសម្រេចបានតាមរយៈ?**
- **A.** Abstract Class ឬ Interface
- **B.** `static` និង `const`
- **C.** `struct` តែមួយ
- **D.** `enum`

**ចម្លើយ៖ A** — Abstract Class និង Interface គឺជាវិធីសំខាន់ពីរ។

**សរុប៖ ១៦ សំណួរ និងចម្លើយ**

---

## មេរៀនទី៥ Encapsulation

**Q1. Encapsulation គឺជាអ្វី?**
ជា Concept មួយក្នុងចំណោម ៤ របស់ OOP៖ ធ្វើឲ្យ Fields ជា `private` ហើយឲ្យចូលប្រើតាម Method `public` ប៉ុណ្ណោះ។ ហៅថា **Data Hiding**។

**Q2. តើ OOP មាន Concept សំខាន់ទាំងបួនអ្វីខ្លះ?**
Inheritance, Polymorphism, Abstraction, Encapsulation។

**Q3. តើ Class ខាងក្រៅចូលប្រើ Field `private` របៀបណា?**
តាម Getter / Setter Method (ឧ. `GetName()`, `SetName()`)។ ក្នុង C# ប្រើ **Property** ជំនួស។

**Q4. Property ក្នុង C# ខុសពី Getter/Setter បែប Java យ៉ាងដូចម្តេច?**
Property មានវាក្យសម្ព័ន្ធខ្លីជាង៖ `public int Id { get; set; }` (Auto-property) ហើយប្រើដូច Field៖ `p.Id = 5;`។

**Q5. សរសេរ Property ដែលត្រួតពិនិត្យតម្លៃ (ទាល់តែ ≥ 0)។**
```csharp
private double price;
public double Price {
    get { return price; }
    set { if (value >= 0) price = value; }
}
```

**Q6. តើធ្វើ Property ឲ្យ Read-Only ឬ Write-Only បែបណា?**
- Read-Only: `public int Id { get; }`
- Write-Only: ត្រូវប្រើ Backing Field ព្រោះ Auto-property មិនអាចមានតែ `set` បាន
```csharp
private int pin;
public int Pin { set { pin = value; } }
```

**Q7. រាយប្រយោជន៍របស់ Encapsulation។**
- Data ត្រូវបានការពារដោយ Method/Property
- កំណត់ Read-Only / Write-Only បាន
- User មិនដឹងពីរបៀបផ្ទុក Data ខាងក្នុង
- ប្តូរប្រភេទទិន្នន័យក្នុង Class បាន ដោយ User មិនចាំបាច់កែ Code

**Q8. សរសេរ Class `BankAccount` ដែលមាន Field `balance` ជា private, Method `Deposit` ដែលទទួលតែចំនួនវិជ្ជមាន, និង Property `Balance` ជា Read-Only។ តើលទ្ធផលជាអ្វី?**
```csharp
class BankAccount {
    private double balance;
    public double Balance { get { return balance; } }
    public void Deposit(double amount) {
        if (amount > 0) balance += amount;
    }
}

BankAccount acc = new BankAccount();
acc.Deposit(100);
acc.Deposit(-50);   // មិនត្រូវបានទទួល
Console.WriteLine(acc.Balance);   // 100
```

**Q9. Code នេះមានកំហុសអ្វី? ត្រូវកែយ៉ាងដូចម្តេច?**
```csharp
class Product { private double price; }

Product p = new Product();
p.price = 5;
```
Compile Error៖ `price` ជា `private` មិនអាចចូលពីខាងក្រៅ Class បានទេ។ ត្រូវប្រើ Property៖
```csharp
class Product {
    private double price;
    public double Price { get { return price; } set { price = value; } }
}
p.Price = 5;
```

**Q10. លទ្ធផលនៃ Code ខាងក្រោមជាអ្វី?**
```csharp
class Person {
    private int age;
    public int Age {
        get { return age; }
        set { if (value >= 0 && value <= 150) age = value; }
    }
}

Person p = new Person();
p.Age = -5;
Console.WriteLine(p.Age);
p.Age = 20;
Console.WriteLine(p.Age);
```
```
0
20
```
តម្លៃ `-5` មិនត្រឹមត្រូវ ដូច្នេះ Setter មិនកំណត់ (Field នៅតម្លៃលំនាំដើម `0`) ។ បន្ទាប់មក `20` ត្រូវបានទទួល។

**Q11. [ពហុជម្រើស] Encapsulation ត្រូវបានគេហៅម្យ៉ាងទៀតថា?**
- **A.** Data Hiding
- **B.** Inheritance
- **C.** Overloading
- **D.** Boxing

**ចម្លើយ៖ A** — ធ្វើឲ្យ Field ជា `private` ដើម្បីលាក់ Data។

**Q12. [ពហុជម្រើស] Fields របស់ Class ក្នុង Encapsulation គួរមាន Access Modifier អ្វី?**
- **A.** `public`
- **B.** `private`
- **C.** `static`
- **D.** `abstract`

**ចម្លើយ៖ B** — Field `private` ហើយចូលតាម Method/Property `public`។

**Q13. [ពហុជម្រើស] Property ណាមួយជា Read-Only?**
- **A.** `{ get; }`
- **B.** `{ set; }`
- **C.** `{ get; set; }`
- **D.** `{ private; }`

**ចម្លើយ៖ A** — មាន `get` តែមួយ គឺអាចអានបានប៉ុណ្ណោះ។

**Q14. [ពហុជម្រើស] C# ប្រើអ្វីជំនួស Getter/Setter Method បែប Java?**
- **A.** Property
- **B.** Interface
- **C.** Delegate
- **D.** Attribute

**ចម្លើយ៖ A** — ឧ. `public int Id { get; set; }`។

**Q15. [ពហុជម្រើស] អត្ថប្រយោជន៍ណាមួយជារបស់ Encapsulation?**
- **A.** ប្តូរប្រភេទ Data ក្នុង Class បានដោយ User មិនចាំបាច់កែ Code
- **B.** អនុញ្ញាត Multiple Inheritance
- **C.** ធ្វើឲ្យ Field ទាំងអស់ជា `public`
- **D.** លុបតម្រូវការ Method

**ចម្លើយ៖ A** — User មិនដឹងពីរបៀបផ្ទុក Data ខាងក្នុង។

**សរុប៖ ១៥ សំណួរ និងចម្លើយ**

---

## មេរៀនទី៦ Interface

**Q1. Interface គឺជាអ្វី?**
ជា **Contract** ដែលកំណត់ Methods និង Properties ដែល Class ត្រូវអនុវត្ត។

**Q2. តើ Class Implement Interface របៀបណាក្នុង C#?**
ប្រើសញ្ញា `:` (មិនមាន `implements`)។ ឧ. `public class Car : IMachine { }`

**Q3. សមាជិករបស់ Interface មាន Access Modifier អ្វីតាមលំនាំដើម?**
`public`។ ជាទូទៅជា abstract ប៉ុន្តែ C# ទំនើបអនុញ្ញាតឲ្យមាន Default Implementation ។

**Q4. តើ Interface អាចមាន Field បានទេ? ហេតុអ្វី?**
មិនបានទេ ព្រោះវាកំណត់កិច្ចសន្យាសម្រាប់ Behavior ហើយមិនរក្សាទុក State។ (ប្រើ Property ជំនួស)

**Q5. តើ Class មួយអាច Implement Interface ច្រើនបានទេ?**
បាន ដោយបំបែកនឹង `,`៖ `public class PrinterCar : IMachine, IPrintable { }`

**Q6. បើ Class Implement Interface មិនគ្រប់ Member តើមានអ្វីកើតឡើង?**
Compile Error — Class ត្រូវ Implement Member **ទាំងអស់** (លើកលែងតែ Class នោះជា `abstract`)។

**Q7. Interface Inheritance គឺជាអ្វី? ផ្តល់ឧទាហរណ៍។**
Interface មួយ Inherit ពី Interface មួយ ឬច្រើនដោយប្រើ `:`។ Interface កូនទទួលបាន Member របស់ Parent ហើយ Class ដែល Implement វាត្រូវ Implement ទាំងអស់។
```csharp
interface ISports   { void Play(); }
interface IFootball : ISports { void Score(); }
class Match : IFootball {
    public void Play()  { }
    public void Score() { }
}
```

**Q8. ប្រៀបធៀប Abstract Class និង Interface។**

| | Abstract Class | Interface |
|---|---|---|
| Inherit បានប៉ុន្មាន | ១ Class | ច្រើន Interface |
| Instance Field | មានបាន | មិនបាន |
| Constructor | មាន | មិនមាន |
| Access Modifier លំនាំដើម | `private` | `public` |
| គោលបំណង | Base ដែលមាន Code រួម | Contract/សមត្ថភាព |

**Q9. ហេតុអ្វីបានជា `IGreeter greeter = new Greeter();` មានប្រយោជន៍?**
ប្រើ Reference ជាប្រភេទ Interface ធ្វើឲ្យ Code **Flexible** និង **Reusable** — អាចប្តូរ Implementation ផ្សេងបានដោយមិនកែ Code ដែលប្រើ។

**Q10. សរសេរ Interface `ILogger` ដែលមាន `Log(string message)` រួចបង្កើត Class `ConsoleLogger` ហើយប្រើតាម Interface Reference។**
```csharp
public interface ILogger {
    void Log(string message);
}
public class ConsoleLogger : ILogger {
    public void Log(string message) {
        Console.WriteLine("[LOG] " + message);
    }
}

ILogger logger = new ConsoleLogger();
logger.Log("Hello");   // [LOG] Hello
```

**Q11. Code នេះមានកំហុសអ្វី? ត្រូវកែយ៉ាងដូចម្តេច?**
```csharp
interface IFlyable { void Fly(); }
class Bird : IFlyable { }
```
Compile Error៖ `Bird` មិនបាន Implement `Fly()` ។ ដំណោះស្រាយ៖
```csharp
class Bird : IFlyable {
    public void Fly() { Console.WriteLine("Bird flies"); }
}
```

**Q12. លទ្ធផលនៃ Code ខាងក្រោមជាអ្វី?**
```csharp
interface ISports { void Play(); }
interface IFootball : ISports { void Score(); }
interface IPrintable { void Print(); }

class Match : IFootball {
    public void Play()  { }
    public void Score() { }
}

object m = new Match();
Console.WriteLine(m is ISports);
Console.WriteLine(m is IFootball);
Console.WriteLine(m is IPrintable);
```
`true`, `true`, `false` — `Match` implement `IFootball` ដែល Inherit ពី `ISports` ដូច្នេះជាទាំងពីរ ប៉ុន្តែមិនបាន Implement `IPrintable` ទេ។

**Q13. [ពហុជម្រើស] សមាជិករបស់ Interface មាន Access Modifier អ្វីតាមលំនាំដើម?**
- **A.** `private`
- **B.** `protected`
- **C.** `public`
- **D.** `internal`

**ចម្លើយ៖ C** — Interface Members ជា `public` តាមលំនាំដើម។

**Q14. [ពហុជម្រើស] អ្វីខាងក្រោមដែល Interface មិនអាចមាន?**
- **A.** Method
- **B.** Property
- **C.** Instance Field
- **D.** Event

**ចម្លើយ៖ C** — Interface មិនរក្សាទុក State ដូច្នេះគ្មាន Instance Field។

**Q15. [ពហុជម្រើស] ការប្រកាសណាត្រឹមត្រូវសម្រាប់ Class Implement Interface ពីរ?**
- **A.** `class A : IX IY`
- **B.** `class A : IX, IY`
- **C.** `class A : IX & IY`
- **D.** `class A : IX + IY`

**ចម្លើយ៖ B** — បំបែក Interface ដោយសញ្ញា `,`។

**Q16. [ពហុជម្រើស] Interface មួយ Inherit ពី Interface មួយទៀតដោយប្រើអ្វី?**
- **A.** `extends`
- **B.** `:`
- **C.** `implements`
- **D.** `inherits`

**ចម្លើយ៖ B** — ឧ. `interface IFootball : ISports`។

**Q17. [ពហុជម្រើស] បើ Class ធម្មតា Implement Interface មិនគ្រប់ Member តើមានអ្វីកើតឡើង?**
- **A.** Compile បានធម្មតា
- **B.** Compile Error
- **C.** មាន Warning ប៉ុណ្ណោះ
- **D.** Run Time Error ប៉ុណ្ណោះ

**ចម្លើយ៖ B** — Class ត្រូវ Implement Member ទាំងអស់ (លើកលែងតែជា `abstract`)។

**សរុប៖ ១៧ សំណួរ និងចម្លើយ**
