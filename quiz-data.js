window.QUIZ={
 "7.1": [
  {
   "q": "តើ C# ប្រើសញ្ញា ឬ Keyword អ្វីសម្រាប់ Inheritance?",
   "o": [
    "extends",
    "implements",
    "inherits",
    "`:`"
   ],
   "a": 3,
   "e": "C# ប្រើសញ្ញា `:` សម្រាប់ទាំង Class និង Interface។"
  },
  {
   "q": "Class មួយក្នុង C# អាច Inherit ពី Class ប៉ុន្មាន?",
   "o": [
    "១ Class",
    "២ Class",
    "គ្មានកំណត់",
    "មិនអាច Inherit បាន"
   ],
   "a": 0,
   "e": "C# គាំទ្រ Single Class Inheritance ប៉ុណ្ណោះ (Interface អាចច្រើន)។"
  },
  {
   "q": "ការប្រកាសណាមួយត្រឹមត្រូវ?",
   "o": [
    "`class Dog : IPet, Animal`",
    "`class Dog : Animal, IPet`",
    "`class Dog extends Animal`",
    "`class Dog implements IPet`"
   ],
   "a": 1,
   "e": "Base Class ត្រូវនៅមុន រួចទើប Interface។"
  },
  {
   "q": "ទំនាក់ទំនង “Car HAS-A Engine” ត្រូវបង្ហាញដោយរបៀបណា?",
   "o": [
    "`class Car : Engine`",
    "Car មាន Field `private Engine engine;`",
    "`interface Car`",
    "`abstract class Car`"
   ],
   "a": 1,
   "e": "HAS-A គឺ Class មួយមាន Instance Variable យោងទៅ Class មួយទៀត។"
  },
  {
   "q": "ឈ្មោះណាមួយមិនមែនជាឈ្មោះរបស់ Super Class?",
   "o": [
    "Base Class",
    "Parent Class",
    "Super Class",
    "Derived Class"
   ],
   "a": 3,
   "e": "Derived Class គឺជាឈ្មោះរបស់ Sub Class។"
  }
 ],
 "7.2": [
  {
   "q": "Super Class ត្រូវប្រើ Keyword អ្វី ដើម្បីអនុញ្ញាតឲ្យ Method ត្រូវបាន Override?",
   "o": [
    "`override`",
    "`virtual`",
    "`sealed`",
    "`static`"
   ],
   "a": 1,
   "e": "Super Class ប្រកាស `virtual` ហើយ Sub Class ប្រើ `override`។"
  },
  {
   "q": "Keyword ណាប្រើហៅ Method របស់ Super Class ពីក្នុង Sub Class?",
   "o": [
    "`super`",
    "`this`",
    "`base`",
    "`parent`"
   ],
   "a": 2,
   "e": "C# ប្រើ `base` (មិនមែន `super` ដូច Java)។"
  },
  {
   "q": "Method ប្រភេទណាមិនអាច Override បាន?",
   "o": [
    "`virtual` Method",
    "`abstract` Method",
    "`static` Method",
    "Method ដែលមាន `override`"
   ],
   "a": 2,
   "e": "Static Method មិនអាច Override បានទេ។"
  },
  {
   "q": "ប្រសិនបើ Sub Class ប្រើ `new` លើ Method ដែលមានឈ្មោះដូច Super Class នោះហៅថា?",
   "o": [
    "Overriding",
    "Hiding",
    "Overloading",
    "Abstraction"
   ],
   "a": 1,
   "e": "`new` គ្រាន់តែ Hide Method របស់ Super Class។"
  },
  {
   "q": "ចំណុចណាត្រឹមត្រូវអំពីច្បាប់ Override?",
   "o": [
    "Return Type អាចខុសគ្នា",
    "Access Level ត្រូវតែដូចគ្នា",
    "Constructor អាច Override បាន",
    "Static Method អាច Override បាន"
   ],
   "a": 1,
   "e": "Access Level, ឈ្មោះ, Parameter និង Return Type ត្រូវដូចគ្នា។"
  }
 ],
 "7.3": [
  {
   "q": "Polymorphism ចែកជាប្រភេទអ្វីខ្លះ?",
   "o": [
    "Inheritance និង Encapsulation",
    "Overloading និង Overriding",
    "Abstraction និង Interface",
    "Class និង Object"
   ],
   "a": 1,
   "e": "Polymorphism មាន ២ ប្រភេទ៖ Overloading និង Overriding។"
  },
  {
   "q": "Method Overloading ត្រូវមានអ្វីខុសគ្នា?",
   "o": [
    "Return Type តែមួយ",
    "Signature (ប្រភេទ/ចំនួន Parameter)",
    "Access Modifier តែមួយ",
    "ឈ្មោះ Class"
   ],
   "a": 1,
   "e": "ឈ្មោះដូចគ្នា តែ Signature ខុសគ្នា។"
  },
  {
   "q": "Runtime Polymorphism ក្នុង C# សម្រេចបានដោយ?",
   "o": [
    "`virtual` និង `override`",
    "Overloading",
    "`static`",
    "`const`"
   ],
   "a": 0,
   "e": "Method ដែលដំណើរការត្រូវបានកំណត់នៅពេល Run តាម Object ពិត។"
  },
  {
   "q": "`Animal a = new Dog(); a.Move();` បើ `Dog` Override `Move()` តើ Method របស់ Class ណាដំណើរការ?",
   "o": [
    "`Animal`",
    "`Dog`",
    "Compile Error",
    "គ្មានមួយណា"
   ],
   "a": 1,
   "e": "Object ពិតជា `Dog` ដូច្នេះ `Dog.Move()` ដំណើរការ។"
  },
  {
   "q": "ពាក្យ “Poly” ក្នុងភាសាក្រិច មានន័យថា?",
   "o": [
    "មួយ",
    "ច្រើន",
    "ពីរ",
    "លាក់"
   ],
   "a": 1,
   "e": "Poly = ច្រើន, morph = ទម្រង់។"
  }
 ],
 "7.4": [
  {
   "q": "អ្វីខាងក្រោមត្រឹមត្រូវអំពី Abstract Class?",
   "o": [
    "អាច `new` បាន",
    "អាចមានទាំង Abstract Method និង Regular Method",
    "មិនអាចមាន Method ធម្មតា",
    "មិនអាចជា Base Class"
   ],
   "a": 1,
   "e": "Abstract Class មិនអាច Instantiate បានទេ តែអាចមាន Method ទាំងពីរប្រភេទ។"
  },
  {
   "q": "Abstract Method ត្រូវតែ?",
   "o": [
    "មាន Body",
    "គ្មាន Body ហើយបញ្ចប់ដោយ `;`",
    "ជា `private`",
    "ជា `static`"
   ],
   "a": 1,
   "e": "Abstract Method គ្មាន Implementation។"
  },
  {
   "q": "Subclass ធម្មតា ដែល Inherit ពី Abstract Class ត្រូវធ្វើអ្វី?",
   "o": [
    "មិនចាំបាច់ធ្វើអ្វី",
    "Implement Abstract Method ទាំងអស់",
    "ប្រកាសជា `sealed`",
    "ប្រកាសជា Interface"
   ],
   "a": 1,
   "e": "បើមិន Implement ទាំងអស់ ត្រូវប្រកាស Subclass ជា `abstract` ផងដែរ។"
  },
  {
   "q": "ប្រយោគណាត្រឹមត្រូវ?",
   "o": [
    "`new Shape()` ត្រូវបានអនុញ្ញាតបើ Shape ជា Abstract",
    "Class ដែលមាន Abstract Method ត្រូវជា Abstract Class",
    "Abstract Method អាចមាន Body",
    "Abstract Class មិនអាចជា Reference បាន"
   ],
   "a": 1,
   "e": "Class ដែលមាន Abstract Method ត្រូវប្រកាសជា `abstract`។"
  },
  {
   "q": "Abstraction ក្នុង C# អាចសម្រេចបានតាមរយៈ?",
   "o": [
    "Abstract Class ឬ Interface",
    "`static` និង `const`",
    "`struct` តែមួយ",
    "`enum`"
   ],
   "a": 0,
   "e": "Abstract Class និង Interface គឺជាវិធីសំខាន់ពីរ។"
  }
 ],
 "7.5": [
  {
   "q": "Encapsulation ត្រូវបានគេហៅម្យ៉ាងទៀតថា?",
   "o": [
    "Data Hiding",
    "Inheritance",
    "Overloading",
    "Boxing"
   ],
   "a": 0,
   "e": "ធ្វើឲ្យ Field ជា `private` ដើម្បីលាក់ Data។"
  },
  {
   "q": "Fields របស់ Class ក្នុង Encapsulation គួរមាន Access Modifier អ្វី?",
   "o": [
    "`public`",
    "`private`",
    "`static`",
    "`abstract`"
   ],
   "a": 1,
   "e": "Field `private` ហើយចូលតាម Method/Property `public`។"
  },
  {
   "q": "Property ណាមួយជា Read-Only?",
   "o": [
    "`{ get; }`",
    "`{ set; }`",
    "`{ get; set; }`",
    "`{ private; }`"
   ],
   "a": 0,
   "e": "មាន `get` តែមួយ គឺអាចអានបានប៉ុណ្ណោះ។"
  },
  {
   "q": "C# ប្រើអ្វីជំនួស Getter/Setter Method បែប Java?",
   "o": [
    "Property",
    "Interface",
    "Delegate",
    "Attribute"
   ],
   "a": 0,
   "e": "ឧ. `public int Id { get; set; }`។"
  },
  {
   "q": "អត្ថប្រយោជន៍ណាមួយជារបស់ Encapsulation?",
   "o": [
    "ប្តូរប្រភេទ Data ក្នុង Class បានដោយ User មិនចាំបាច់កែ Code",
    "អនុញ្ញាត Multiple Inheritance",
    "ធ្វើឲ្យ Field ទាំងអស់ជា `public`",
    "លុបតម្រូវការ Method"
   ],
   "a": 0,
   "e": "User មិនដឹងពីរបៀបផ្ទុក Data ខាងក្នុង។"
  }
 ],
 "7.6": [
  {
   "q": "សមាជិករបស់ Interface មាន Access Modifier អ្វីតាមលំនាំដើម?",
   "o": [
    "`private`",
    "`protected`",
    "`public`",
    "`internal`"
   ],
   "a": 2,
   "e": "Interface Members ជា `public` តាមលំនាំដើម។"
  },
  {
   "q": "អ្វីខាងក្រោមដែល Interface មិនអាចមាន?",
   "o": [
    "Method",
    "Property",
    "Instance Field",
    "Event"
   ],
   "a": 2,
   "e": "Interface មិនរក្សាទុក State ដូច្នេះគ្មាន Instance Field។"
  },
  {
   "q": "ការប្រកាសណាត្រឹមត្រូវសម្រាប់ Class Implement Interface ពីរ?",
   "o": [
    "`class A : IX IY`",
    "`class A : IX, IY`",
    "`class A : IX & IY`",
    "`class A : IX + IY`"
   ],
   "a": 1,
   "e": "បំបែក Interface ដោយសញ្ញា `,`។"
  },
  {
   "q": "Interface មួយ Inherit ពី Interface មួយទៀតដោយប្រើអ្វី?",
   "o": [
    "`extends`",
    "`:`",
    "`implements`",
    "`inherits`"
   ],
   "a": 1,
   "e": "ឧ. `interface IFootball : ISports`។"
  },
  {
   "q": "បើ Class ធម្មតា Implement Interface មិនគ្រប់ Member តើមានអ្វីកើតឡើង?",
   "o": [
    "Compile បានធម្មតា",
    "Compile Error",
    "មាន Warning ប៉ុណ្ណោះ",
    "Run Time Error ប៉ុណ្ណោះ"
   ],
   "a": 1,
   "e": "Class ត្រូវ Implement Member ទាំងអស់ (លើកលែងតែជា `abstract`)។"
  }
 ]
};